import React, {Component} from 'react';

class Password extends Component {
  constructor(props) {
    super(props)
    this.state = { password: 'p@ssw0rd'}
  }

  generatePassword() {
    console.log("Generating password")
  }

  render() {
    return (
      <div>
        <div>{this.state.password}</div>
        <div>
          <button onClick={(e) => {
            this.generatePassword()
          }}>Generate</button>
        </div>
      </div>
    )
  }
}

export default Password
