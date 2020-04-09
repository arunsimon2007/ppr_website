import React, { Fragment } from "react"
import Grid from "@material-ui/core/Grid"
import { Link } from "react-router-dom"
import styles from "./Header.module.scss"

const Header = () => {
  return (
    <Fragment>
      <Grid item xs={1} className={"headerLogo"}>
        Logo
      </Grid>
      <Grid item xs={7} />
      <Grid item xs={1} className={"headerLink"}>
        <Link to="/">
          <span className={"hedearLinkItem"}>Home</span>
        </Link>
      </Grid>
      <Grid item xs={1} className={"headerLink"}>
        <Link to="/gallery">
          <span className={"hedearLinkItem"}>Gallery</span>
        </Link>
      </Grid>
      <Grid item xs={1} className={"headerLink"}>
        <Link to="/social">
          <span className={"hedearLinkItem"}>Social</span>
        </Link>
      </Grid>
      <Grid item xs={1} className={"headerLink"}>
        <Link to="/contact">
          <span className={"hedearLinkItem"}>Contact</span>
        </Link>
      </Grid>
    </Fragment>
  )
}
export default Header
