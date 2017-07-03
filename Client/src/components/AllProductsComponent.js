import React, { Component } from 'react'
import {Pagination, Row, Col} from 'react-bootstrap'
import ListProductComponent from './sub-components/ListProductComponent'
import alt from '../alt'
import AllProductsStore from '../stores/AllProductsStore'
import AllProductsActions from '../actions/AllProductsActions'
import queryString from 'query-string'
import history from '../history'
import SingleProductActions from '../actions/SingleProductActions'
import SearchForm from './sub-components/SearchForm'

class AllProductsComponent extends Component {
  constructor (props) {
    super(props)
    this.state = AllProductsStore.getState()
    this.onChange = this.onChange.bind(this)
    this.page = Number(queryString.parse(history.location.search).page) || 1
  }

  componentDidMount () {
    AllProductsStore.listen(this.onChange)
    AllProductsActions.getOnePageProducts(this.page)
  }

  componentWillUnmount () {
    alt.recycle(AllProductsStore)
    AllProductsStore.unlisten(this.onChange)
  }

  onChange (state) {
    this.setState(state)
  }

  handleSelect (page) {
    if (history.location.search !== `?page=${page}`) {
      history.push(`?page=${page}`)
      AllProductsActions.getOnePageProducts(page)
    }
  }

  render () {
    let products = this.state.products.map(product => {
      return (<ListProductComponent onDelete={SingleProductActions.deleteProduct} key={product._id} product={product} />)
    })

    if (!products.length) {
      return (
        <div className='container'>
          <h3 className='text-center'>Unfortunately there are no products in our store</h3>
        </div>
      )
    }
    return (
      <div className='container'>
        <h3 className='text-center'>Our products</h3>
        <Row>
          <div className='center-block'>
            <SearchForm/>
            </div>
        
        </Row>
        {products}
        <Row>
          <Col xs={10} sm={8} md={6} xsOffset={1} smOffset={2} mdOffset={3}>
            <Pagination
              prev
              next
              first
              last
              ellipsis
              boundaryLinks
              items={this.state.pagesCount}
              maxButtons={3}
              activePage={this.state.activePage}
              onSelect={this.handleSelect} />
          </Col>
        </Row>
      </div>
    )
  }
}
export default AllProductsComponent
