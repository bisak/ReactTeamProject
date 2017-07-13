import React, { Component } from 'react'
import ListUserComponent from './sub-components/ListUserComponent'
import UsersActions from '../actions/UsersActions'
import UsersStore from '../stores/UsersStore'

class BanUserComponent extends Component {
  constructor (props) {
    super(props)
    this.state = UsersStore.getState()
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount () {
    UsersStore.listen(this.onChange)
    UsersActions.getAllUsers()
  }

  componentWillUnmount () {
    UsersStore.unlisten(this.onChange)
  }

  onChange (state) {
    this.setState(state)
  }

  render () {
    let users = this.state.users.map(user => {
      if (!user.banned)
        return (<ListUserComponent onBanUser={UsersActions.banUser} banUser key={user._id} user={user} />)
    })
    return (
      <div className='container remove-navbar-margin'>
        <h4 className='text-center'>Ban users</h4>
        {users}
      </div>
    )
  }
}
export default BanUserComponent
