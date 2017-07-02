import jwtDecode from 'jwt-decode'

class Auth {
  static authenticateUser (token) {
    window.localStorage.setItem('token', token)
  }
  static isUserAuthenticated () {
    return window.localStorage.getItem('token') !== null
  }
  static deauthenticateUser () {
    window.localStorage.removeItem('token')
  }
  static getToken () {
    return window.localStorage.getItem('token')
  }
  static isUserAdmin () {
    this.getUser()
    const token = window.localStorage.getItem('token')
    if (token) {
      let decodedToken = jwtDecode(token)
      if (decodedToken) {
        let decodedUser = decodedToken._doc
        if (decodedUser && decodedUser.roles && decodedUser.roles.length) {
          return decodedUser.roles.includes('admin')
        }
      }
    }
    return false
  }
  static getUser () {
    const token = window.localStorage.getItem('token')
    if (token) {
      let decodedToken = jwtDecode(token)
      if (decodedToken) {
        let decodedUser = decodedToken._doc
        if (decodedUser) {
          return decodedUser
        }
      }
    }
    return {}
  }
  static getAuthHeader () {
    let token = this.getToken()
    if (token) {
      return {Authorization: token}
    }
    return {}
  }
}

export default Auth
