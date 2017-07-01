import alt from '../alt'
import axios from 'axios'
import config from '../config'

class RegisterActions {
  constructor () {
    this.generateActions(
      'registerSuccess',
      'registerError',
      'inputChange'
    )
  }

  registerUser (userData) {
    return axios.post(`${config.baseUrl}/users/register`, userData).then((response) => {
      this.registerSuccess(response)
      return true
    }).catch((response) => {
      this.registerError(response)
      return true
    })
  }
}

export default alt.createActions(RegisterActions)
