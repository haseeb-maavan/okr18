const CLIENT_ID = 'client_token';

export function getClientId(){
  return localStorage.getItem(CLIENT_ID);
}

export function login(){
  return localStorage.setItem(CLIENT_ID,'dae48dd5d2b8dd0b7a3b381a7b51ebf2');
}

export function logout(){
  localStorage.removeItem(CLIENT_ID);
}

export function isLoggedIn() {
  const idToken = getClientId();
  return !!idToken;
}
