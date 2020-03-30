import React, { Component } from "react"
import { connect } from "react-redux"

import * as actions from "../../redux/spinner/actions"
class Gallery extends Component {
  componentDidMount = () => {
    this.props.showSpinner()
  }
  render() {
    return <p>gallery page..1.</p>
  }
}

const mapStateToProps = state => ({
  displaySpinner: state.displaySpinner
})
export default connect(mapStateToProps, {
  showSpinner: actions.showSpinner,
  hideSpinner: actions.hideSpinner
})(Gallery)
