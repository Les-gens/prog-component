import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import { Home, Profile } from "screens/"
function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/me" component={Profile} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
