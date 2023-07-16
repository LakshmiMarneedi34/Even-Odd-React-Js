// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  randomNumber = () => Math.ceil(Math.random() * 100)

  onCountIncrease = () => {
    const randomNum = this.randomNumber()
    this.setState(prevState => ({count: prevState.count + randomNum}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="count-heading">
            Count <span className="span-count">{count}</span>
          </h1>
          <p className="count-text">Count is {displayText}</p>
          <button
            className="button"
            type="button"
            onClick={this.onCountIncrease}
          >
            Increment
          </button>
          <p className="paragraph">
            *Increased By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
