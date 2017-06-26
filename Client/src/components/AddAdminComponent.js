import React, { Component } from 'react'
import ListUserComponent from './sub-components/ListUserComponent'

// Admin only
class AddAdminComponent extends Component {
  render () {
    return (
      <div>
        <div className='container'>
          <h3 className='text-center'>Add admin</h3>
          <ListUserComponent />
        </div>
      </div>
    )
  }
}
export default AddAdminComponent
