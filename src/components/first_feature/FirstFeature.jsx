import React, {
  Component,
  PropTypes
} from 'react'

class FirstFeature extends Component {
  render() {
    const { name } = this.props

    return (
      <h2>First feature is called “{name}”</h2>
    )
  }
}

FirstFeature.propTypes = {
  name: PropTypes.string
}

export default FirstFeature
