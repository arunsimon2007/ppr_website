import React from "react"
import Grid from "@material-ui/core/Grid"
import Header from "./Header"
import Footer from "./Footer"
import PropTypes from "prop-types"
import { useLocation } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"

import styles from "./Layout.module.scss"

const Layout = ({ isHeader, isFooter, children }) => {
  const location = useLocation()
  const useStyles = makeStyles({
    appLayout: {},
  })

  const classes = useStyles()

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      {isHeader && (
        <Grid
          item
          xs={12}
          container
          direction="row"
          className={"appHeader"}
        >
          <Header />
        </Grid>
      )}
      <Grid item xs={12} className={"appContent"}>
        {children}
      </Grid>
      {isFooter && (
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
