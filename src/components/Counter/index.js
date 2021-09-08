import React, { Component } from 'react'
import './CounterStyles.css'
import Button from '../Button'

class Counter extends Component {

  state = {
    count: 0
  }

  render() {
    const increment = () => {
      this.setState({ count: this.state.count + 1 })
    }
    const decrement = () => {
      this.setState({ count: this.state.count - 1 })
    }

    return (
        <div className="counterContainer">
            <Button click={increment} className='standardButton' iconClassName='icon-angle-up' />
            <p className="counterNumber">
                {this.state.count}
            </p>
            <Button click={decrement} className='standardButton' iconClassName='icon-angle-down' />
        </div>
    )
  }
}

export default Counter;