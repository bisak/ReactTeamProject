import alt from '../alt'
import UsersActions from '../actions/UsersActions'
import toastr from 'toastr'

class UsersStore {
  constructor () {
    this.bindActions(UsersActions)
    this.users = []
  }

  onGetNonAdminUsersSuccess (response) {
    this.users = response.data
  }

  onGetNonAdminUsersError (error) {
    console.log(error)
  }

  onBanUserSuccess (response) {
    this.users = this.users.filter(user => user._id !== response.data._id)
    toastr.options.positionClass = 'toast-bottom-right'
    toastr.success(`${response.data.username} is now banned.`)
  }

  onAddAdminSuccess (response) {
    this.users = this.users.filter(user => user._id !== response.data._id)
    toastr.options.positionClass = 'toast-bottom-right'
    toastr.success(`${response.data.username} is now an admin.`)
  }

  onRemoveAdminSuccess (response) {
    this.users = this.users.filter(user => user._id !== response.data._id)
    toastr.options.positionClass = 'toast-bottom-right'
    toastr.success(`${response.data.username} is no longer an admin.`)
  }

  onBanUserError (error) {
    console.log(error)
  }

  onAddAdminError (error) {
    console.log(error)
  }

  onRemoveAdminError (error) {
    console.log(error)
  }
}

export default alt.createStore(UsersStore)
