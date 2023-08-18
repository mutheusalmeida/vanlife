import { ReactNode, createContext, useContext } from 'react'
import type { UserType } from 'vanlife'

type UserContextType = {
  user: UserType
}

type UserProviderProps = {
  children: ReactNode
  value: UserContextType
}

const UserContext = createContext({} as UserContextType)

export const UserProvider = ({ children, value }: UserProviderProps) => {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext)
