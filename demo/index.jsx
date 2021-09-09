import React from 'react'
import ReactDOM from 'react-dom'
import Button from '../src/components/Button'

const Root = () => {
  // const ref = React.createRef()
  // const contentContext = React.createContext()
  return (
    <div>
      <div>hello worldaa</div>
      <Button id="1" text="hello" />
      <Button id="2" text="hello" />
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))
