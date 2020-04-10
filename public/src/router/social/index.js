import React from "react"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import Facebook from "Static/img/social/facebook.svg"
import Instagram from "Static/img/social/instagram.svg"
import Twitter from "Static/img/social/twitter.svg"
import Layout from "Components/Layout/"

import styles from "./Social.module.scss"

const useStyles = makeStyles({
  title: {
    padding: "1.25em",
    fontWeight: "bold",
    textDecoration: "underline",
    fontSize: "1.25rem",
  },
})

const Social = () => {
  const classes = useStyles()
  return (
    <Layout isHeader={true} isFooter={true}>
      <Typography
        component="h1"
        color="primary"
        align="center"
        className={classes.title}
      >
        SOCIAL MEDIA
      </Typography>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={2} />
        <Grid item xs={2}>
          <Card className={"cardRoot"}>
            <CardContent>
              <CardMedia
                className={"cardMedia"}
                image={Facebook}
                title="Facebook"
              ></CardMedia>
              <Typography component="h2" align="center">
                Likes : 00
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Follow
              </Button>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card className={"cardRoot"}>
            <CardContent>
              <CardMedia
                className={"cardMedia"}
                image={Instagram}
                title="Instagram"
              ></CardMedia>
              <Typography component="h2" align="center">
                Followers : 00
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Follow
              </Button>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card className={"cardRoot"}>
            <CardContent>
              <CardMedia
                className={"cardMedia"}
                image={Twitter}
                title="Twitter"
              ></CardMedia>
              <Typography component="h2" align="center">
                Followers : 00
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Follow
              </Button>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </Layout>
  )
}
export default Social
