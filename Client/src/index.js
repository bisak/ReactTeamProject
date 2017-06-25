import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootswatch/paper/bootstrap.css'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))
registerServiceWorker()
