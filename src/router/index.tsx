import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home, Profile } from 'screens/'
import Error from 'screens/Errors/error'
function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/me" exact component={Profile} />
          <Route path="/" exact component={Home} />
          <Route
            component={() => (
              <Error
                errorCode={404}
                errorTitle={`Oops page not found!`}
                errorDescription={`Oops ! The page you're trying to see has either been moved/deleted or does not exist`}
              ></Error>
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
