import React from 'react'
import ReactDom from 'react-dom'

import FirstFeature from './FirstFeature'

describe('FirstFeature', () => {
  let mount

  beforeEach(() => {
    document.body.innerHTML = '<div id="mount"></div>'
    mount = document.querySelector('#mount')

    ReactDom.render(<FirstFeature name="Blubber" />, mount)
  })

  it('renders content', () => {
    expect(mount.textContent).toBe('First feature is called “Blubber”')
  })
})
