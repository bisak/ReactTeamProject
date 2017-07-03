import alt from '../alt'
import ProfileActions from '../actions/ProfileActions'
import history from '../history'

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

  onGetProfileError (error) {
    if (error.response.status === 404) {
      history.replace('/not-found')
    }
    console.log(error.response)
  }
}

export default alt.createStore(ProfileStore)
