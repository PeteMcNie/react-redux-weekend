import React from 'react'

import Title from './Title'
import FootballRequest from './FootballRequest'
import FootballData from './FootballData'
import WaitIndicator from './WaitIndicator'
import ErrorMessage from './ErrorMessage'
import AccessDataBase from './AccessDataBase'
import PostedData from './PostedData'

const App = () => {
  return (
    <div>
      <Title />
      <FootballRequest>
        <WaitIndicator />
      </FootballRequest>
      <ErrorMessage />
      <FootballData />
      <AccessDataBase>
        <WaitIndicator />
      </AccessDataBase>
      <PostedData />
    </div>
  )
}

export default App
