import React, { Component } from "react"
import { connect } from "react-redux"

import * as actions from "../../redux/spinner/actions"
import Layout from "Components/Layout/"
class Gallery extends Component {
  componentDidMount = () => {
    this.props.showSpinner()
  }
  render() {
    return (
      <Layout isHeader={true} isFooter={true}>
        gallery page..
      </Layout>
    )
  }
}

const mapStateToProps = (state) => ({
  displaySpinner: state.displaySpinner,
})
export default connect(mapStateToProps, {
  showSpinner: actions.showSpinner,
  hideSpinner: actions.hideSpinner,
})(Gallery)
