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
    history.push('/products')
    toastr.options.positionClass = 'toast-bottom-right'
    toastr.success('Welcome', 'Logged in.')
  }

  onLoginError () {

  }
}

export default alt.createStore(LoginStore)
