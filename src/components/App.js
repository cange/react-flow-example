import React, {
  Component,
  PropTypes
} from 'react'
import I18n from 'i18n-js'
// internal
import FirstFeature from './first_feature/FirstFeature'

class App extends Component {
  constructor(props) {
    super(props)
    I18n.defaultLocale = props.locale
    I18n.locale = props.locale
  }

  render() {
    return (
      <div>
        <FirstFeature name="Blubber" />
      </div>
    )
  }
}

App.propTypes = {
  locale: PropTypes.string
}

App.defaultProps = {
  locale: 'en'
}

export default App
