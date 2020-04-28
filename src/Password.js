import React, {Component} from 'react';

class Password extends Component {
  constructor(props) {
    super(props)
    this.state = { password: 'p@ssw0rd'}
    this.description = {description: ''}
  }

  generatePassword() {
    let ret = ""
    for (var i = 0; i < 5; i++) {
      const letter = this.getRandomLetter()
      ret = ret.concat(letter)
    }
    for (var i = 0; i < 5; i++) {
      const digit = this.getRandomDigit()
      ret = ret.concat(digit)
    }
    for (var i = 0; i < 2; i++) {
      const letter = this.getRandomLetter()
      ret = ret.concat(letter)
    }
    console.log(ret)
    return ret
  }

  getRandomDigit() {
    return Math.floor(Math.random() * 10)
  }

  getRandomLetter() {
    const ledger = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    return ledger.charAt(Math.floor(Math.random() * ledger.length))
  }

  render() {
    return (
      <div>
        <div>{this.state.password}</div>
        <div>
          <button onClick={(e) => {
            const new_password = this.generatePassword()
            this.setState({ password: new_password })
            // value={this.state.password}
          }}>Generate</button>
        </div>
        <div>
          <input
            onChange={(e) => {this.setState({ password: e.target.value })}}
            value={this.state.password}
          />
        </div>
        <div>
          <input
            onChange={(e) => {
              this.setState({ description: e.target.value })
              console.log(this.state.description)
            }}
            value={this.state.description}
          />
        </div>
      </div>
    )
  }
}

export default Password
