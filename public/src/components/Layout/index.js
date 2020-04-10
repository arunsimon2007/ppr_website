import React from "react"
import Grid from "@material-ui/core/Grid"
import Header from "./Header"
import Footer from "./Footer"
import PropTypes from "prop-types"
import { useLocation } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import bgImage from "Static/img/background.jpg"
import socialBg from "Static/img/social_background.svg"

import styles from "./Layout.module.scss"

const Layout = (props) => {
  const location = useLocation()
  const useStyles = makeStyles({
    appLayout: {
      position: "relative",
      padding: "1.25em 1em 0em",
      backgroundImage: location.pathname == "/" ? `url(${bgImage})` : "",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  })

  const classes = useStyles()

  return (
    <Grid container direction="column" className={classes.appLayout}>
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
