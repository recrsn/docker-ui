import React, { useState } from 'react'
import Sidebar from './sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import Containers from '../pages/containers'
import Images from '../pages/images'
import Volumes from '../pages/volumes'
import Networks from '../pages/networks'
import Monitor from '../pages/monitor'
import Preferences from '../pages/preferences'
import { DockerError } from '../services/docker'
import ErrorView from '../pages/error-view'

const Main = styled.main`
  background: #1b1d1e;
  flex-grow: 1;
  padding: 0.5rem 2rem 4rem;
  padding-top: var(--header-height);
  overflow-y: auto;
`

function App() {
  const [error, setError] = useState<DockerError | null>()

  return (
    <>
      {error ? (
        <ErrorView dismiss={() => setError(null)}>{error.message}</ErrorView>
      ) : (
        <Router>
          <Sidebar />
          <Main>
            <Switch>
              <Route path="/containers">
                <Containers error={setError} />
              </Route>
              <Route path="/images">
                <Images error={setError} />
              </Route>
              <Route path="/volumes">
                <Volumes error={setError} />
              </Route>
              <Route path="/networks">
                <Networks error={setError} />
              </Route>
              <Route path="/monitor">
                <Monitor error={setError} />
              </Route>
              <Route path="/preferences">
                <Preferences error={setError} />
              </Route>
            </Switch>
          </Main>
        </Router>
      )}
    </>
  )
}

export default App
