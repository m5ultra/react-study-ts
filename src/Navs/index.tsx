import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zhTW from 'antd/lib/locale/zh_TW'
import enUS from 'antd/lib/locale/en_US'
import zhCN from 'antd/lib/locale/zh_CN'
import deDE from 'antd/lib/locale/de_DE'
import Root from '../pages/Root/Root'
import Btns from '../pages/01.Btns'
import Icons from '../pages/02.Icons'
import Forms from '../pages/03.Forms'
import I18n from '../pages/04.i18n'
import UseMobx from '../pages/05.mobx'
import NotFound from '@/pages/404/notFound'
import Login from '@/pages/Login'
import AuthProvider from '@/auth/AuthProvider'
import ProtectedRoute from '@/auth/ProtectedRoute'

const i18nextLng = localStorage.getItem('i18nextLng')

// eslint-disable-next-line no-shadow
enum Lngs {
  en = 'en',
  tw = 'tw',
  cn = 'cn',
  de = 'de',
}

// eslint-disable-next-line consistent-return
const lng = () => {
  if (i18nextLng === Lngs.en) return enUS
  if (i18nextLng === Lngs.de) return deDE
  if (i18nextLng === Lngs.cn) return zhCN
  if (i18nextLng === Lngs.tw) return zhTW
}

const Navs = () => (
  <ConfigProvider locale={lng()}>
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
            <Route path={'mobx'} element={<UseMobx />} />
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
