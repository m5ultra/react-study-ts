import React, { FC, ReactElement, ReactNode, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { ctx } from './AuthProvider'

interface OwnProps {
  children: ReactElement
}

type Props = OwnProps

const ProtectedRoute: FC<Props> = ({ children }) => {
  const { isLogin } = useContext(ctx)
  console.log(isLogin, 'isLogin')
  if (isLogin) {
    return children
  }
  return <Navigate to={'/login'} replace />
}

export default ProtectedRoute
