import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  Toolbar,
  DateNavigator,
  Appointments,
  AppointmentTooltip
} from "@devexpress/dx-react-scheduler-material-ui";
import {
  MonthView,
  WeekView,
  DayView
} from "@devexpress/dx-react-scheduler-material-ui";
import { CalendarNavigation } from "./CalendarNavigation";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";

const data = [
  {
    startDate: "2020-03-12 10:00",
    endDate: "2020-03-12 12:00",
    title: "Meeting"
  },
  {
    startDate: "2020-03-12 10:00",
    endDate: "2020-03-12 12:00",
    title: "Watching"
  },
  {
    startDate: "2020-03-12 10:00",
    endDate: "2020-03-12 12:00",
    title: "Shopping"
  },
  {
    startDate: "2020-03-15 18:00",
    endDate: "2020-03-15 19:00",
    title: "Go to a gym"
  },
  {
    startDate: "2020-03-26 18:00",
    endDate: "2020-03-27 19:00",
    title: "Go to a home"
  }
];

const periods = ["Month", "Week", "Day", "Agenda"];
const useStyles = makeStyles(theme => ({
  root: {
    width: "auro",
    minHeight: "100vh",
    backgroundColor: "#f2f3f4"
  }
}));

export function Calendar() {
  const classes = useStyles();

  const [value, setValue] = useState("Month");

  const onChangeValue = value => {
    setValue(value);
    console.log(value);
  };

  return (
    <div className={classes.root}>
      <h2>Calendar</h2>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <CalendarNavigation />
        <div>
          {periods.map(period => (
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                // debugger;
                onChangeValue(period);
              }}
              value={period}
            >
              {period}
            </Button>
          ))}
        </div>
      </Grid>

      <Scheduler data={data}>
        

        <ViewState
          currentDate="2020-03-27"
          onCurrentDateChange={() => console.log(1)}
        />
        {value === "Week" && <WeekView />}
        {value === "Month" && <MonthView />}
        {value === "Day" && <DayView />}
        <Toolbar />
        <DateNavigator />
        <Appointments />
        <AppointmentTooltip />
      </Scheduler>
    </div>
  );
}
