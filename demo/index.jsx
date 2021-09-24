import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'xtcomps'

const Root = () => {
  // const ref = React.createRef()
  // const contentContext = React.createContext()
  return (
    <div>
      <div>hello worldaasss</div>
      <Button id="1" text="hello" />
      <Button id="2" text="hello" />
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))
