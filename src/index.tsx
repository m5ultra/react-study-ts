import ReactDOM from 'react-dom/client'
import './styl/index.less'
import './i18n'
import vm from './Navs'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// StrictNode 会导致useEffect执行2次 开发阶段调试看着不舒服
root.render(vm)
