import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { HeatMapOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import './Root.less'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}

const items: MenuProps['items'] = [
  getItem('通用', '通用组建', <HeatMapOutlined />, [
    getItem('Button 按钮', '按钮组建', null),
    getItem('Icon 图标', 'Icon 图标', null),
    getItem('表单', '表单元素', null),
    getItem('国际化', 'i18n', null),
  ]),
]

const Root: React.FC = () => {
  const navigate = useNavigate()
  const onClick: MenuProps['onClick'] = (e) => {
    const { key } = e
    switch (key) {
      case '按钮组建':
        navigate('/', { replace: true })

        break
      case 'Icon 图标':
        navigate('/Icons')
        break
      case '表单元素':
        navigate('/Forms')
        break
      case 'i18n':
        navigate('/i18n')
        break
      default:
        break
    }
  }

  return (
    <div className="Root">
      <Menu
        onClick={onClick}
        style={{ width: 256, height: '100vh' }}
        defaultSelectedKeys={['按钮组建']}
        defaultOpenKeys={['通用组建']}
        mode="inline"
        items={items}
      />
      <section className={'section'}>
        <Outlet />
      </section>
    </div>
  )
}

export default Root
