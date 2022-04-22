import React from 'react'
import Button from './Button'
import '../scss/app.scss'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <span>Text Here</span>
        <div className="buttonBox">
          <Button
            label="Login"
            onClick={() => {
              console.log(`Login button clicked!`)
            }}
          />
          <Button
            label="Sign Up"
            onClick={() => {
              console.log(`Sign Up button clicked!`)
            }}
          />
        </div>
      </div>
    )
  }
}

export default Header
