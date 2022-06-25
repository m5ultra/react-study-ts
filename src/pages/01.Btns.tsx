import { Button, Tooltip } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { test } from 'utils'

console.log(test(), '西湖美景， 六月天那')

const Btns = () => (
  <div style={{ padding: '30px 20px' }}>
    <Button type={'primary'}>Primary Button</Button>
    <Button>Default Button</Button>
    <Button type={'dashed'}>Dashed</Button>
    <Button type={'text'}>Text Button</Button>
    <Button type={'link'}>Text Link</Button>
    <hr />
    <Tooltip title={'Search'}>
      <Button type="primary" shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
    <Button type="primary" shape="circle">
      A
    </Button>
    <Button type="primary" icon={<SearchOutlined />}>
      Search
    </Button>
  </div>
)

export default Btns
