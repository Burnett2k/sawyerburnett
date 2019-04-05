import React from "react";
import { withSiteData } from "react-static";
import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Typography,
  Grid
} from "@material-ui/core";
import CardContainer from "../containers/Card";
import whitney from "../images/whitney-summit.jpg";

export default withSiteData(() => (
  <CardContainer>
    <Grid container justify="center">
      <Grid item>
        <Card>
          <CardHeader title="Intro" />
          <CardContent>
            <Typography component="p">
              I am a programmer currently working on React and Node JS
              applications, but I do enjoy dabbling in other technologies quite
              often. Some of my current interests are material design, page
              rendering performance, user experience, unit testing, and solving
              problems.
            </Typography>
            <CardMedia image={whitney} title="Mt Whitney Summit" />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </CardContainer>
));
