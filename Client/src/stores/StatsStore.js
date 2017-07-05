import alt from '../alt'
import StatsActions from '../actions/StatsActions'

class StatsStore {
  constructor () {
    this.bindActions(StatsActions)
    this.stats = []
  }

  onGetStatsSuccess (response) {
    this.stats = response.data
  }

  onGetStatsError (error) {
    console.log(error)
  }
}

export default alt.createStore(StatsStore)
