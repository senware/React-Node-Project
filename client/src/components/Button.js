import React from 'react'
import '../scss/app.scss'

class Button extends React.Component {
  render() {
    return (
      <button className="buttonComponent" onClick={this.props.onClick}>
        {this.props.label}
      </button>
    )
  }
}

export default Button
