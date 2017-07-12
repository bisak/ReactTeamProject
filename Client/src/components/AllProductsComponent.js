import React, { Component } from 'react'
import { Pagination, Row, Col } from 'react-bootstrap'
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
    this.search = queryString.parse(history.location.search).search || ''
  }

  componentDidMount () {
    AllProductsStore.listen(this.onChange)
    AllProductsActions.getOnePageProducts(this.page, this.search)
  }

  componentWillUnmount () {
    alt.recycle(AllProductsStore)
    AllProductsStore.unlisten(this.onChange)
  }

  onChange (state) {
    this.setState(state)
  }

  handlePageSelect (page) {
    this.page = page
    history.push(`?page=${this.page}&search=${this.search}`)
    AllProductsActions.getOnePageProducts(this.page, this.search)
  }

  handleSearch () {
    this.search = this.state.search
    this.page = 1
    history.push(`?page=${this.page}&search=${this.search}`)
    AllProductsActions.getOnePageProducts(this.page, this.search)
  }

  render () {
    let products = this.state.products.map(product => {
      return (<ListProductComponent onDelete={SingleProductActions.deleteProduct} key={product._id} product={product} />)
    })

    if (this.state.noProductsAvailable) {
      products = (
        <div className='container'>
          <h3 className='text-center'>There are no such products in our store.</h3>
        </div>
      )
    }

    return (
      <div className='container remove-navbar-margin'>
        <h4 className='text-center'>Our products</h4>
        <hr/>
        <Row>
          <Col className='center-block fit-content'>
            <SearchForm search={this.state.search} onSearch={this.handleSearch.bind(this)} onInput={AllProductsActions.inputChange} />
          </Col>
        </Row>
        {products}
        <Row>
          <div className='fit-content center-block'>
            <Pagination
              prev next first last ellipsis boundaryLinks
              items={this.state.pagesCount}
              maxButtons={3}
              activePage={this.state.activePage}
              onSelect={this.handlePageSelect.bind(this)} />
          </div>
        </Row>
      </div>
    )
  }
}
export default AllProductsComponent
