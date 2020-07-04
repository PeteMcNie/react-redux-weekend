import React from 'react'
import { Route } from 'react-router-dom'

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
      <Route path='/' component={Title} />
      <Route path='/' component={FootballRequest} />
      <Route path='/' component={WaitIndicator} />
      {/* </FootballRequest> */}
      <Route path='/' component={ErrorMessage} />
      <Route path='/' component={FootballData} />
      <Route path='/' component={AccessDataBase} />
        <WaitIndicator />
      {/* </AccessDataBase> */}
      <Route path='/' component={PostedData} />
      {/* <Route path='/' component={Links} /> */}
    </div>
  )
}

export default App
