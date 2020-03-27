function setToken (token) {
  localStorage.setItem('token', token)  
}

function isLoggedIn() {
  return !!localStorage.getItem('token')
}

function getToken() {
  return localStorage.getItem('token')
}

function getUserId() {
  const token = getToken()
  if (!token) return false
  const parts = token.split('.')
  return JSON.parse(atob(parts[1])).sub
}

function logout() {
  return localStorage.removeItem('token')
}

export default {
  setToken,
  isLoggedIn,
  getToken,
  getUserId,
  logout
}