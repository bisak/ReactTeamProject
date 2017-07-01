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
    this.redirectTo = ''
  }

  onInputChange (event) {
    const target = event.target
    const fieldName = target.name
    const value = target.value
    let user = this.user
    user[fieldName] = value
    this.setState({user})
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
