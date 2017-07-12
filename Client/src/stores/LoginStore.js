import alt from '../alt'
import LoginActions from '../actions/LoginActions'
import history from '../history'
import toastr from 'toastr'

class LoginStore {
  constructor () {
    this.bindActions(LoginActions)
    this.user = {
      username: '',
      password: ''
    }
  }

  onInputChange (event) {
    const target = event.target
    const fieldName = target.name
    const value = target.value
    this.user[fieldName] = value
  }

  onLoginSuccess (response) {
    alt.recycle(this)
    history.push('/products')
    toastr.options.positionClass = 'toast-bottom-right'
    toastr.success('Welcome', 'Logged in.')
  }

  onLoginError (error) {
    if (error.response.status === 400) {
      toastr.options.positionClass = 'toast-bottom-right'
      return toastr.warning('Error', 'Wrong password or user doesn\'t exist')
    }
  }
}

export default alt.createStore(LoginStore)
