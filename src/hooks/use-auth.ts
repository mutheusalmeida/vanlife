import { auth, getUser } from '@/resources/api'
import { FirebaseError } from 'firebase/app'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { ErrorType, UserType } from 'vanlife'

export const useAuth = () => {
  const [user, loading, authError] = useAuthState(auth)
  const [data, setData] = useState<UserType | null>(null)
  const [error, setError] = useState<ErrorType | null>(
    !loading && authError ? { message: 'Error while trying to login' } : null
  )
  const [isLoading, setIsLoading] = useState(loading)

  useEffect(() => {
    if (user && user.uid) {
      const getUserData = async () => {
        try {
          setError(null)
          setIsLoading(true)
          const data = await getUser<UserType>(user.uid)
          setData({ ...data, id: user.uid })
        } catch (err: unknown) {
          if (err instanceof FirebaseError) {
            const message =
              (err.customData?.message as string) || err.message || err.code

            setError({ message })
          }
        } finally {
          setIsLoading(false)
        }
      }

      getUserData()
    } else {
      setData(null)
    }
  }, [loading, user])

  return {
    error,
    isLoading,
    data,
  }
}
