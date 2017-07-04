import alt from '../alt'
import axios from 'axios'
import config from '../config'
import Auth from '../Auth'

class UsersActions {
  constructor () {
    this.generateActions(
      'getNonAdminUsersSuccess',
      'getNonAdminUsersError',
      'banUserSuccess',
      'addAdminSuccess',
      'removeAdminSuccess',
      'banUserError',
      'addAdminError',
      'removeAdminError'
    )
  }

  getNonAdminUsers () {
    return axios.get(`${config.baseUrl}/users/non-admins`, {headers: Auth.getAuthHeader()}).then(response => {
      this.getNonAdminUsersSuccess(response.data)
      return true
    }).catch(error => {
      this.getNonAdminUsersError(error.response)
      return true
    })
  }

  getAllUsers () {
    return axios.get(`${config.baseUrl}/users`, {headers: Auth.getAuthHeader()}).then(response => {
      this.getNonAdminUsersSuccess(response.data)
      return true
    }).catch(error => {
      this.getNonAdminUsersError(error.response)
      return true
    })
  }

  getAdminUsers () {
    return axios.get(`${config.baseUrl}/users/admins`, {headers: Auth.getAuthHeader()}).then(response => {
      this.getNonAdminUsersSuccess(response.data)
      return true
    }).catch(error => {
      this.getNonAdminUsersError(error.response)
      return true
    })
  }

  //

  addAdmin (username) {
    return axios.post(`${config.baseUrl}/users/${username}/make-admin`, {}, {headers: Auth.getAuthHeader()}).then(response => {
      this.addAdminSuccess(response.data)
      return true
    }).catch(error => {
      this.addAdminError(error.response)
      return true
    })
  }

  removeAdmin (username) {
    return axios.post(`${config.baseUrl}/users/${username}/remove-admin`, {}, {headers: Auth.getAuthHeader()}).then(response => {
      this.removeAdminSuccess(response.data)
      return true
    }).catch(error => {
      this.removeAdminError(error.response)
      return true
    })
  }

  banUser (username) {
    return axios.post(`${config.baseUrl}/users/${username}/ban`, {}, {headers: Auth.getAuthHeader()}).then(response => {
      this.banUserSuccess(response.data)
      return true
    }).catch(error => {
      this.banUserError(error.response)
      return true
    })
  }
}

export default alt.createActions(UsersActions)
