import alt from '../alt'
import HomeActions from '../actions/HomeActions'

class HomeStore {
  constructor () {
    this.bindActions(HomeActions)
    this.stats = {
      users: 0,
      allComponents: 0,
      purchases: 0
    }
  }

  onGetHomeStatsSuccess (response) {
    this.stats.users = response.data.usersCount
    this.stats.allComponents = response.data.componentsCount
    this.stats.purchases = response.data.purchasesCount
  }
}

export default alt.createStore(HomeStore)
