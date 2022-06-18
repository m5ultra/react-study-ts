import ReactDOM from 'react-dom/client'
import vm from './Navs'
import './styl/index.less'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// StrictNode 会导致useEffect执行2次 开发阶段调试看着不舒服
root.render(vm)
