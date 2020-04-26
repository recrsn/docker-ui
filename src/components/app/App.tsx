import React from 'react'
import Sidebar from '../lib/sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import Containers from '../pages/containers'
import Images from '../pages/images'
import Volumes from '../pages/volumes'
import Networks from '../pages/networks'
import Monitor from '../pages/monitor'
import Preferences from '../pages/preferences'

const Main = styled.main`
  background: #1b1d1e;
  flex-grow: 1;
  padding: 0.5rem 2rem 4rem;
  padding-top: var(--header-height);
  overflow-y: auto;
`

function App() {
  return (
    <Router>
      <Sidebar />
      <Main>
        <Switch>
          <Route path="/containers">
            <Containers />
          </Route>
          <Route path="/images">
            <Images />
          </Route>
          <Route path="/volumes">
            <Volumes />
          </Route>
          <Route path="/networks">
            <Networks />
          </Route>
          <Route path="/monitor">
            <Monitor />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </Main>
    </Router>
  )
}

export default App
