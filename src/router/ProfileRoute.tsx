import { getToken } from 'api/auth'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { Profile } from 'screens'

const ProfileRoute = () => {
    return (
      <Route path="/me" exact render= {() => getToken() !== '' ?
          <Profile/>
        :  <Redirect to={{ pathname: '/login'}}/>   
        }>
      
      </Route>
    )
}

export default ProfileRoute