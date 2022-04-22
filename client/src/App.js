import React from 'react'
import Header from './components/Header'
import ContentWrapper from './components/ContentWrapper'
import './scss/app.scss'

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ContentWrapper />
      </>
    )
  }
}

export default App
