import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import serviceWorker from './serviceWorker'
import App from './App'

process.env.NODE_ENV === 'production' && serviceWorker()

ReactDOM.render(<App />, document.getElementById('root'))
