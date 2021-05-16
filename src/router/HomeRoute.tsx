import { getToken } from 'api/auth'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { Home } from 'screens'

const HomeRoute = () => {
    return (
        <Route path="/" exact render= {() => getToken() !== '' ?
          <Home/>
        :  <Redirect to={{ pathname: '/login'}}/>   
        }>
      </Route>
    )
}

export default HomeRoute