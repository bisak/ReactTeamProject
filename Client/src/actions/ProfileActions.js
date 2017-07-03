import alt from '../alt'
import axios from 'axios'
import config from '../config'
import Auth from '../Auth'

class ProfileActions {
  constructor () {
    this.generateActions(
      'getProfileSuccess',
      'getProfileError'
    )
  }

  getProfile (username) {
    return axios.get(`${config.baseUrl}/users/${username}`, { headers: Auth.getAuthHeader() }).then(response => {
      this.getProfileSuccess(response.data)
      return true
    }).catch(error => {
      this.getProfileError(error)
      return true
    })
  }
}

export default alt.createActions(ProfileActions)
