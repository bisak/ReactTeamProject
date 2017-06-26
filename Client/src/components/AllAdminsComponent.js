import React, { Component } from 'react'
import ListUserComponent from './sub-components/ListUserComponent'

// Admin only
class AllAdminsComponent extends Component {
  render () {
    return (
      <div className='container'>
        <h3 className='text-center'>All admins</h3>
        <ListUserComponent />
        <ListUserComponent />
      </div>
    )
  }
}
export default AllAdminsComponent
