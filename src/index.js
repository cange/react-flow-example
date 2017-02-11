import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'

const mount = document.querySelector('#app-mount')

ReactDom.render(<App />, mount)
