import React from 'react'
import ReactDom from 'react-dom'

import App from './App'
import I18n from 'i18n-js'

describe('App', () => {
  let mount

  beforeEach(() => {
    document.body.innerHTML = '<div id="mount"></div>'
    mount = document.querySelector('#mount')
  })

  describe('When locale exists', () => {
    beforeEach(() => {
      ReactDom.render(<App />, mount)
    })

    it('defines default locale on global object', () => {
      expect(I18n.locale).toBe('en')
    })
  })

  describe('When local given', () => {
    beforeEach(() => {
      ReactDom.render(<App locale="de" />, mount)
    })

    it('defines given locale as global', () => {
      expect(I18n.locale).toBe('de')
    })
  })
})
