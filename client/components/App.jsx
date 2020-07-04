import React from 'react'

import Title from './Title'
import FootballRequest from './FootballRequest'
import FootballData from './FootballData'
import WaitIndicator from './WaitIndicator'
import ErrorMessage from './ErrorMessage'

const App = () => {
  return (
    <div>
      <Title />
      <FootballRequest>
        <WaitIndicator />
      </FootballRequest>
      <ErrorMessage />
      <FootballData />
    </div>
  )
}

export default App
