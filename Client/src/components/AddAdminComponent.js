import React, { Component } from 'react'
import ListUserComponent from './sub-components/ListUserComponent'
import UsersActions from '../actions/UsersActions'
import UsersStore from '../stores/UsersStore'

class AddAdminComponent extends Component {
  constructor (props) {
    super(props)
    this.state = UsersStore.getState()
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount () {
    UsersStore.listen(this.onChange)
    UsersActions.getNonAdminUsers()
  }

  componentWillUnmount () {
    UsersStore.unlisten(this.onChange)
  }

  onChange (state) {
    this.setState(state)
  }

  render () {
    let users = this.state.users.map(user => {
      return (<ListUserComponent onAdminAdd={UsersActions.addAdmin} addAdmin key={user._id} user={user} />)
    })
    return (
      <div>
        <div className='container remove-navbar-margin'>
          <h4 className='text-center'>Add admin</h4>
          {users}
        </div>
      </div>
    )
  }
}
export default AddAdminComponent
