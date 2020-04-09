import React from "react"
import Grid from "@material-ui/core/Grid"
import Header from "./Header"
import Footer from "./Footer"
import PropTypes from "prop-types"

import styles from "./Layout.module.scss"

const Layout = (props) => {
  return (
    <Grid container direction="column" className={"appLayout"}>
      {props.isHeader && (
        <Grid item xs={12} container direction="row" className={"appHeader"}>
          <Header />
        </Grid>
      )}
      <Grid item xs={12} className="appContent">
        {props.children}
      </Grid>
      {props.isFooter && (
        <Grid
          item
          xs={12}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Footer />
        </Grid>
      )}
    </Grid>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHeader: PropTypes.bool.isRequired,
  isFooter: PropTypes.bool.isRequired,
}
export default Layout
