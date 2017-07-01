import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootswatch/paper/bootstrap.css'
import {Router} from 'react-router-dom'
import history from './history'

ReactDOM.render(<Router history={history}><App /></Router>, document.getElementById('root'))
registerServiceWorker()
