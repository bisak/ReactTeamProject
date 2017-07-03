import alt from '../alt'
import axios from 'axios'
import config from '../config'

class HomeActions {
  constructor () {
    this.generateActions(
      'getHomeStatsSuccess'
    )
  }

  getHomeStats () {
    return axios.get(`${config.baseUrl}/home/stats`).then((response) => {
      this.getHomeStatsSuccess(response.data)
      return true
    }).catch((error) => {
      console.log(error)
      return true
    })
  }
}

export default alt.createActions(HomeActions)
