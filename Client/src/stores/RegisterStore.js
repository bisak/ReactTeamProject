import alt from '../alt'
import RegisterActions from '../actions/RegisterActions'
import history from '../history'
import toastr from 'toastr'

class RegisterStore {
  constructor () {
    this.bindActions(RegisterActions)
    this.user = {
      username: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      profilePic: '',
      email: ''
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

  onRegisterSuccess (response) {
    history.push('/login')
    toastr.options.positionClass = 'toast-bottom-right'
    toastr.success('You can log in now.', 'Registered')
  }

  onRegisterError (response) {
    console.log(response)
  }
}

export default alt.createStore(RegisterStore)
