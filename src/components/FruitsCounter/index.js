// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  onClickMango = () => {
    this.setState(prev => ({count1: prev.count1 + 1}))
  }

  onClickBanana = () => {
    this.setState(prev => ({count2: prev.count2 + 1}))
  }

  render() {
    const {count1, count2} = this.state
    return (
      <div className="fruits-bg-container">
        <div className="fruits-container">
          <h1 className="heading">
            Bob ate <span className="count">{count1}</span> mangoes{' '}
            <span className="count">{count2}</span> bananas
          </h1>
          <div className="fruits-card">
            <div className="card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="Mango"
                className="image"
              />
              <button
                type="button"
                className="button"
                onClick={this.onClickMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="Banana"
                className="image"
              />
              <button
                type="button"
                className="button"
                onClick={this.onClickBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
