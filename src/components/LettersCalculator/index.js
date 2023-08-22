// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {userInput: ''}

  onChangeLetters = event => {
    this.setState({userInput: event.target.value})
  }

  render() {
    const {userInput} = this.state
    return (
      <div className="bg-container">
        <div className="letters-calculator-container">
          <h1 className="heading">
            Calculate the <br />
            Letters you
            <br /> Enter
          </h1>
          <label htmlFor="inputEl" className="label-el">
            Enter the phrase
          </label>
          <input
            type="text"
            id="inputEl"
            className="input"
            placeholder="Enter the phrase"
            onChange={this.onChangeLetters}
            value={userInput}
          />
          <p className="letters-count">No.of letters: {userInput.length}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
      </div>
    )
  }
}

export default LettersCalculator
