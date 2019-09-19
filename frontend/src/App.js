import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const HomePage = React.lazy(() => import('./pages/Home'))

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<>Loading...</>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NoMatch} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  )
}

function NoMatch() {
  return (
    <>
      Route Not Found
    </>
  )
}

export default App
