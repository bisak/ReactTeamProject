import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import StatsActions from '../actions/StatsActions'
import StatsStore from '../stores/StatsStore'
import Chart from 'chart.js'

class StatsComponent extends Component {
  constructor (props) {
    super(props)
    this.state = StatsStore.getState()
    this.onChange = this.onChange.bind(this)
    this.profileUsername = this.props.match.params.username
  }

  componentDidMount () {
    StatsStore.listen(this.onChange)
    StatsActions.getStats()
  }

  componentWillUnmount () {
    StatsStore.unlisten(this.onChange)
  }

  onChange (state) {
    this.setState(state)
    let stats = state.stats
    let usersChartElement = document.getElementById('usersChart')
    new Chart(usersChartElement, {
      type: 'line',
      data: {
        labels: stats.times,
        datasets: [{
          label: 'Users',
          data: stats.usersCount,
          fill: false,
          borderColor: [
            'rgba(63,127,191,1)'
          ],
          borderWidth: 3
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              stepSize: 3,
              beginAtZero: true
            }
          }]
        }
      }
    })

    let productsChartElement = document.getElementById('productsChart')
    new Chart(productsChartElement, {
      type: 'line',
      data: {
        labels: stats.times,
        datasets: [{
          label: 'Products',
          data: stats.componentsCount,
          fill: false,
          borderColor: [
            'rgba(63,191,65,1)'
          ],
          borderWidth: 3
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              stepSize: 3,
              beginAtZero: true
            }
          }]
        }
      }
    })

    let salesChartElement = document.getElementById('salesChart')
    new Chart(salesChartElement, {
      type: 'line',
      data: {
        labels: stats.times,
        datasets: [{
          label: 'Sales',
          data: stats.purchasesCount,
          fill: false,
          borderColor: [
            'rgba(191,127,63,1)'
          ],
          borderWidth: 3
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              stepSize: 3,
              beginAtZero: true
            }
          }]
        }
      }
    })
  }

  render () {
    return (
      <div className='container'>
        <h4 className='text-center'>Site usage statistics</h4>
        <hr />
        <hr className='no-margin no-padding' />
        <Row className='z-depth-1'>
          <h4 className='text-center'>Users</h4>
          <Col>
            <canvas id='usersChart' width='400' height='200' />
          </Col>
        </Row>
        <hr />
        <Row className='z-depth-1'>
          <h4 className='text-center'>Products</h4>
          <Col>
            <canvas id='productsChart' width='400' height='200' />
          </Col>
        </Row>
        <hr />
        <Row className='z-depth-1'>
          <h4 className='text-center'>Sales</h4>
          <Col>
            <canvas id='salesChart' width='400' height='200' />
          </Col>
        </Row>
      </div>
    )
  }
}
export default StatsComponent
