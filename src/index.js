import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
// const React = require('react')
import cups from './cups.json'

ReactDOM.render(<App cups={cups} />, document.querySelector('#root'))

// <div>Hello World</div> 