import React, { useState } from "react";
import './style.css';
import ReactDOM from 'react-dom';
// import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import { ViewState } from "@devexpress/dx-react-scheduler";
import { fade } from "@material-ui/core/styles/colorManipulator";
import {
  Scheduler,
  Toolbar,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  TodayButton,
  DateNavigator
} from "@devexpress/dx-react-scheduler-material-ui";
import {
  MonthView,
  WeekView,
  DayView
} from "@devexpress/dx-react-scheduler-material-ui";
import { Paper, Tabs, Tab, Grid, Button } from "@material-ui/core";

const CustomNavigationButtonBase = props => {
 
  return <DateNavigator.NavigationButton {...props} className="btnNav"/>;
};

const style = theme => ({
  btnNav: {
    width: 230,
    // '&:hover': {
    //   backgroundColor: fade(theme.palette.primary.main, 0.14),
    // },
    '&:focus': {
      backgroundColor: '#000',
    },
  },
});

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
  }
];

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: "auro",
//     minHeight: "100vh",
//     backgroundColor: "#f2f3f4"
//   }
// }));

function MyElement(){
  return(
    <div>
      <Scheduler>
      <Appointments onChange={()=> console.log(1)}/>
      <AppointmentTooltip visible showCloseButton showOpenButton />
      </Scheduler>
     
    </div>
  )

}

const CustomNavigationButton = withStyles(style, { name: 'DayScaleCell' })(CustomNavigationButtonBase);

export function Calendar() {
  // const classes = useStyles();

  const [value, setValue] = React.useState("Month");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [anchorEl, setAnchorEl] = React.useState(false);

  const handleClick = (event) => {
    console.log(1)
    setAnchorEl(!anchorEl);
  };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };



  return (
    <Paper>
      <Scheduler height={660} data={data}>
        <Button onClick={handleClick} anchorEl={anchorEl}>Create event</Button>
        <Grid 
        container
        direction="row"
        justify="flex-end"
        alignItems="flex-end"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Day" value="Day" />
            <Tab label="Week" value="Week" />
            <Tab label="Month" value="Month" />
          </Tabs>
        </Grid>

        <ViewState defaultCurrentViewName="Month" currentViewName={value} />
        <DayView />
        <WeekView />
        <MonthView />
        <Toolbar />
        <DateNavigator navigationButtonComponent={CustomNavigationButton} />
        <TodayButton />
        <Appointments onChange={()=> console.log(1)}/>
        <AppointmentTooltip showCloseButton showOpenButton />
        {/* {anchorEl? 
         <div>
         <Appointments onChange={()=> console.log(1)}/>
         <AppointmentTooltip visible showCloseButton showOpenButton />
         <AppointmentForm
            readOnly
          />
       </div> : false
        } */}
       
        <AppointmentForm />
      </Scheduler>
    </Paper>
  );
}
