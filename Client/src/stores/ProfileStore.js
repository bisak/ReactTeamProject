import alt from '../alt'
import ProfileActions from '../actions/ProfileActions'

class ProfileStore {
  constructor () {
    this.bindActions(ProfileActions)
    this.user = {
      username: '',
      firstName: '',
      lastName: '',
      profilePic: ''
    }
    this.reviews = []
  }

  onGetProfileSuccess (data) {
    let userData = data.data.user
    this.user.username = userData.username
    this.user.firstName = userData.firstName
    this.user.lastName = userData.lastName
    this.user.profilePic = userData.profilePic
    this.reviews = data.data.reviews
  }

  onGetProfileError (data) {
    console.log(data)
  }
}

export default alt.createStore(ProfileStore)
