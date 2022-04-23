import React from 'react'
import Button from './Button'
import '../scss/app.scss'
import { ReactComponent as BurgerMenu } from './Hamburger_icon_white.svg'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <BurgerMenu
          id="burgerMenu"
          onClick={() => {
            console.log('Hamburger menu clicked!')
          }}
        />
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
