import React, { FunctionComponent } from 'react'

interface OwnProps {}

type Props = OwnProps

const notFound: FunctionComponent<Props> = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <h3 style={{ fontSize: '30px' }}>Not Found, Something is wrong</h3>
    </div>
  )
}

export default notFound
