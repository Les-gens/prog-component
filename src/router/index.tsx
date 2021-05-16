import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home, Profile, Signup, Login } from 'screens/'
import Error from 'screens/Errors/error'

function setToken(token: any):void{
  sessionStorage.setItem('token', JSON.stringify(token))
}

function getToken(): string{
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString || '');
  return userToken?.token
}

function App() {
  // const [token, setToken] = useState<string>()
  // setToken('')
  // sessionStorage.clear()
  const token = getToken()
  // if(!token){
  //   return <Login setToken={setToken} />
  // }

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
