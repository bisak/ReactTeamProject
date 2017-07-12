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
  }

  onInputChange (event) {
    const target = event.target
    const fieldName = target.name
    const value = target.value
    this.user[fieldName] = value
  }

  onRegisterSuccess (response) {
    history.push('/login')
    toastr.options.positionClass = 'toast-bottom-right'
    toastr.success('You can log in now.', 'Registered')
  }

  onRegisterError (error) {
    if (error.response.status === 409) {
      toastr.options.positionClass = 'toast-bottom-right'
      return toastr.warning('Error', 'This user already exists.')
    }
    toastr.options.positionClass = 'toast-bottom-right'
    return toastr.warning('An error occured.')
  }
}

export default alt.createStore(RegisterStore)
