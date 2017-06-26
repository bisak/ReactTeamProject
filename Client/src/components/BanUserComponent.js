import React, { Component } from 'react'
import ListUserComponent from './sub-components/ListUserComponent'

// Admin only
class BanUserComponent extends Component {
  render () {
    return (
      <div className='container'>
        <h3 className='text-center'>Ban User</h3>
        <ListUserComponent />
        <ListUserComponent />
        <ListUserComponent />
      </div>
    )
  }
}
export default BanUserComponent
