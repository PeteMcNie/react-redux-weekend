import React from 'react'
import { Route } from 'react-router-dom'

import Title from './Title'
import FootballRequest from './FootballRequest'
import FootballData from './FootballData'
import WaitIndicator from './WaitIndicator'
import ErrorMessage from './ErrorMessage'
import AccessDataBase from './AccessDataBase'
import PostedData from './PostedData'
import Links from './Links'
import Players from './Players'


const App = () => {
  // HOW DO I MAKE A COMPONENT A CHILD WHEN USING ROUTES??
  return (
    <div> 
      <Route path='/' component={Title} />
      {/* USING THE RENDER FUNCTION HERE ENABLES THE WAITINDICATOR TO BE A CHILD OF THE FOOTBALL COMPONENT WHEN USING ROUTES */}
      <Route path='/' render={() => {
        return  <FootballRequest>
                  <WaitIndicator />
                </FootballRequest>
      }} />
      <Route path='/' component={ErrorMessage} />
      <Route path='/' component={FootballData} />
      <Route exact path='/' render={() => {
        return  <AccessDataBase>
                  <WaitIndicator />
                </AccessDataBase>
      }} />
      <Route exact path='/' component={PostedData} />
      <Route path='/' component={Links} />
      <Route path='/players' component={Players} />
    </div>
  )
}

export default App
