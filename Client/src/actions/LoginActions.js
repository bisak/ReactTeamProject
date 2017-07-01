import alt from '../alt'
import axios from 'axios'
import config from '../config'
import Auth from '../Auth'

class LoginActions {
  constructor () {
    this.generateActions(
      'loginSuccess',
      'loginError',
      'inputChange'
    )
  }

  loginUser (userData) {
    return axios.post(`${config.baseUrl}/users/login`, userData).then((response) => {
      Auth.authenticateUser(response.data.token)
      this.loginSuccess(response)
      return true
    }).catch((response) => {
      this.loginError(response)
      return true
    })
  }
}

export default alt.createActions(LoginActions)
