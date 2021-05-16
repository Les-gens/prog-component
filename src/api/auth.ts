
async function login(credentials:{ username: string, password: string }){
//   return fetch('http://localhost:8080/login', {
//    method: 'POST',
//    headers: {
//      'Content-Type': 'application/json'
//    },
//    body: JSON.stringify(credentials)
//  })
//    .then(data => data.json())
  const token = 'token123'
  // sessionStorage.setItem('token', JSON.stringify(token))
  return token
}

async function signup(credentials:{ username: string, password: string }) {
  return 'token123'

}

function logout(setToken:any){
  setToken('')
  sessionStorage.clear()
}

function setStorageToken(token: any):void{
  console.log('settoken')
  sessionStorage.setItem('token', JSON.stringify(token))
  console.log(getToken())
}

function getToken(): string{
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString || '{}');
  return userToken?.token
  // return userToken
}

export {login, logout, signup, setStorageToken, getToken}