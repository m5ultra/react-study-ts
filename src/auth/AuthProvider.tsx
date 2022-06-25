import { FunctionComponent, createContext, useState, ReactNode } from 'react'

export const ctx = createContext(null)

interface OwnProps {
  children: ReactNode
}

type Props = OwnProps

const AuthProvider: FunctionComponent<Props> = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false)
  return <ctx.Provider value={{ isLogin, setIsLogin }}>{children}</ctx.Provider>
}

export default AuthProvider
