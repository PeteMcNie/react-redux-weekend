import React from 'react'

import Title from './Title'
import FootballRequest from './FootballRequest'
import FootballData from './FootballData'
// import WaitIndicator from './WaitIndicator'

const App = () => {
  return (
    <>
      <Title />
      <FootballRequest>
        {/* <WaitIndicator /> */}
      </FootballRequest>
      <FootballData />
    </>
  )
}

export default App
