import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_TW'
import Root from '../pages/Root/Root'
import Btns from '../pages/01.Btns'
import Icons from '../pages/02.Icons'
import Forms from '../pages/03.Forms'
import I18n from '../pages/04.i18n'

const i18nextLng = localStorage.getItem('i18nextLng')
console.log(i18nextLng, '01-i18nextLng')
const Navs = () => (
  <ConfigProvider locale={zhCN}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path={'Icons'} element={<Icons />} />
          <Route index element={<Btns />} />
          <Route path={'Forms'} element={<Forms />} />
          <Route path={'i18n'} element={<I18n />} />
        </Route>
      </Routes>
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
