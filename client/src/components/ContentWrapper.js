import React from 'react'
import axios from 'axios'
import Button from './Button'

class ContentWrapper extends React.Component {
  render() {
    return (
      <div className="contentWrapper">
        <Button label="TestDB" onClick={this.testInsert} />
      </div>
    )
  }

  testInsert() {
    axios
      .post('/users/test', {
        name: 'test name',
        password: 'test password',
      })
      .then(res =>
        console.log(
          `Request returned with status: ${
            res.status
          }\nResponse: ${JSON.stringify(res.data)}`
        )
      )
      .catch(err => console.log(err))
  }
}

export default ContentWrapper
