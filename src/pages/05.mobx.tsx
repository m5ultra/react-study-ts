import { FC } from 'react'
import { useStore } from 'store'
import { Button } from 'antd'
import { observer } from 'mobx-react'

interface OwnProps {}

type Props = OwnProps

const Mobx: FC<Props> = (props) => {
  const { counter, cart } = useStore()
  const { reset, count, num, add, minus, double } = counter
  const { list } = cart
  return (
    <div>
      <h2>mobx 使用测试</h2>
      <hr />
      <p>count: {count}</p>
      <p>num: {num}</p>
      <p>{double}</p>
      <hr />
      <Button onClick={() => add(5)}>Add</Button>
      <Button onClick={minus}>minus</Button>
      <Button onClick={reset}>重置</Button>
      <hr />
      {list.map((item, index) => (
        <p key={item}>{item * 10}</p>
      ))}
    </div>
  )
}

export default observer(Mobx)
