import React from "react";
import { Typography } from "@material-ui/core";
import Card from "../containers/Card.js";

export default () => (
  <div>
    <Card>
      <Typography variant="h5" component="h3">
        Consulting Work
      </Typography>
      <Typography component="p">
        I am open to occasional consulting and side projects related to agile
        React, or NodeJS.
      </Typography>
    </Card>
  </div>
);
