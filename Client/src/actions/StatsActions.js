import alt from '../alt'
import axios from 'axios'
import config from '../config'
import Auth from '../Auth'

class StatsActions {
  constructor () {
    this.generateActions(
      'getStatsSuccess',
      'getStatsError'
    )
  }

  getStats () {
    return axios.get(`${config.baseUrl}/stats/all`, {headers: Auth.getAuthHeader()}).then(response => {
      this.getStatsSuccess(response.data)
      return true
    }).catch(error => {
      this.getStatsError(error.response)
      return true
    })
  }
}

export default alt.createActions(StatsActions)
