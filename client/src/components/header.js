import React from 'react'
import Button from './button'
import '../scss/app.scss'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="buttonBox">
          <Button
            label="Login"
            onClick={() => {
              console.log(`${this.props.label} button clicked!`)
            }}
          />
          <Button
            label="Sign Up"
            onClick={() => {
              console.log(`${this.props.label} button clicked!`)
            }}
          />
        </div>
      </div>
    )
  }
}

export default Header
