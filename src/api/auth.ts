async function login(credentials:{ username: string, password: string }){
//   return fetch('http://localhost:8080/login', {
//    method: 'POST',
//    headers: {
//      'Content-Type': 'application/json'
//    },
//    body: JSON.stringify(credentials)
//  })
//    .then(data => data.json())
  return 'token123'
}

async function signup(credentials:{ username: string, password: string }) {
  return 'token123'

}

function logout(){
  sessionStorage.clear()
}

export {login, signup}