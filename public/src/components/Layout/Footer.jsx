import React from "react"
import Grid from "@material-ui/core/Grid"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"
import EmailIcon from "@material-ui/icons/Email"
const Footer = () => {
  return (
    <Grid container item>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <FacebookIcon />
        </Grid>
        <Grid item>
          <InstagramIcon />
        </Grid>
        <Grid item>
          <TwitterIcon />
        </Grid>
        <Grid item>
          <EmailIcon />
        </Grid>
      </Grid>

      <Grid container item direction="row" justify="center" alignItems="center">
        <Grid item>&copy; Priya Peggy Romal 2021</Grid>
      </Grid>
    </Grid>
  )
}
export default Footer
