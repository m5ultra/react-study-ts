import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Root from '../pages/Root/Root'
import Btns from '../pages/01.Btns'
import Icons from '../pages/02.Icons'

const Navs = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path={'Icons'} element={<Icons />} />
        <Route index element={<Btns />} />
      </Route>
    </Routes>
  </BrowserRouter>
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
