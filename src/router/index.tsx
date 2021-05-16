import { getToken, logout } from 'api/auth'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import { Home, Profile, Signup, Login } from 'screens/'
import Error from 'screens/Errors/error'

function App() {
  // const [token, setToken] = useState<string>()
  const [token, setToken] = useState<any>(getToken())
  useEffect(()=>{}, [token])
  console.log('token :',  token)
  return (
    <BrowserRouter>
      <div>
        
          {getToken() !== '' && getToken() !== undefined ? 
            <Switch>
              <Route path="/logout" exact >
                {()=>{
                  logout(setToken)
                  return <Redirect to={{ pathname: '/home'}}/>
                }}
              </Route>
              <Route path="/me" exact component={Profile} />
              <Route path="/home" exact component={Home} />
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
          :
            <Switch>
              <Route path="/signup" exact  >
                <Signup setTokenState={setToken} />
              </Route>
              <Route path="/" exact>
                <Login setTokenState={setToken} />
              </Route>
              <Route path="*" exact>
                <Login setTokenState={setToken} />
              </Route>
            </Switch>

          }
      </div>
    </BrowserRouter>
  )
}

export default App
