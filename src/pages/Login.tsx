import { createContext, FunctionComponent, useContext } from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ctx } from '@/auth/AuthProvider'

interface OwnProps {}

type Props = OwnProps

const Login: FunctionComponent<Props> = (props) => {
  const navigate = useNavigate()
  const { setIsLogin } = useContext(ctx)
  return (
    <div>
      <p>这里是登录页面</p>
      <Button
        onClick={() => {
          setIsLogin(true)
          return navigate('/')
        }}
      >
        登录
      </Button>
    </div>
  )
}

export default Login
