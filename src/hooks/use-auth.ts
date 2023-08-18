import { auth, getUser } from '@/resources/api'
import { FirebaseError } from 'firebase/app'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { ErrorType, UserType } from 'vanlife'

export const useAuth = () => {
  const [user, loading, authError] = useAuthState(auth)
  const [data, setData] = useState<UserType | null>(null)
  const [error, setError] = useState<ErrorType | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (user && user.uid) {
      const getUserData = async () => {
        try {
          setError(null)
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

  useEffect(() => {
    if (!loading && authError) {
      setError({ message: 'Error while trying to login' })
    }
  }, [authError, loading])

  return {
    error,
    isLoading,
    data,
  }
}
