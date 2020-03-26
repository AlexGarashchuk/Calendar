import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

export function CalendarNavigation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
      <p>Calendar View</p>
        <Button variant="contained" color="primary">
          Today
        </Button>
        <Button variant="contained" color="secondary">
          Back
        </Button>
        <Button variant="contained" color="secondary">
          Next
        </Button>
      </div>
    </div>
  );
}
