import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'

const mount = document.querySelector('#app-mount')
const locale = mount.getAttribute('lang')

ReactDom.render(<App locale={locale} />, mount)
