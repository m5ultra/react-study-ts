import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_TW'
import Root from '../pages/Root/Root'
import Btns from '../pages/01.Btns'
import Icons from '../pages/02.Icons'
import Forms from '../pages/03.Forms'
import I18n from '../pages/04.i18n'
import NotFound from '@/pages/404/notFound'
import Login from '@/pages/Login'
import AuthProvider from '@/auth/AuthProvider'
import ProtectedRoute from '@/auth/ProtectedRoute'

const i18nextLng = localStorage.getItem('i18nextLng')
console.log(i18nextLng, '01-i18nextLng')

// eslint-disable-next-line no-shadow
enum Lngs {
  en = 'en_US',
  tw = 'zh_TW',
  zh = 'zh_CN',
  de = 'de_DE',
}

console.log(Lngs[i18nextLng], Lngs, '当前语言映射')
const Navs = () => (
  <ConfigProvider locale={zhCN}>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route
              path={'Icons'}
              element={
                <ProtectedRoute>
                  <Icons />
                </ProtectedRoute>
              }
            />
            <Route index element={<Btns />} />
            <Route path={'Forms'} element={<Forms />} />
            <Route path={'i18n'} element={<I18n />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </ConfigProvider>
)
const vm =
  process.env.NODE_ENV === 'development' ? (
    <StrictMode>
      <Navs />
    </StrictMode>
  ) : (
    <Navs />
  )
export default vm
