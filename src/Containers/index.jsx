import React from "react";
import {useStyles} from "./style";
import {  withStyles } from "@material-ui/core/styles";
import {AppointmentFormContainer} from "./AppointmentForm"

import {
  Paper,
  Tabs,
  Tab,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Fab,
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";

import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  Toolbar,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  TodayButton,
  DateNavigator,
  AllDayPanel,
  EditRecurrenceMenu,
  DragDropProvider,
  MonthView,
  WeekView,
  DayView
} from "@devexpress/dx-react-scheduler-material-ui";

import { appointments } from "../data/data";



const CustomNavigationButtonBase = props => {
  return <DateNavigator.NavigationButton {...props} className="btnNav" />;
};

const cancelDelete = () => {
  console.log("i close the dialog");
};

const toggleConfirmationVisable = () => {
  console.log("toggle confirmation visable");
};

const commitDeleteAppointment = () => {
  console.log("Commit delete appointment");
};

const toggleEditingFormVisibility = () => {
  console.log("toggle Editing Form Visibility");
};

const onEditingAppointmentChange = () => {
  console.log("on editing appointment change");
};

const CustomNavigationButton = withStyles(useStyles, { name: "DayScaleCell" })(
  CustomNavigationButtonBase
);


export const Calendar = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState("Month");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [anchorEl, setAnchorEl] = React.useState(false);

  const handleClick = event => {
    setAnchorEl(!anchorEl);
  };

  const [state, setState] = React.useState({ editingFormVisible: false });
  const updateState = state => {
    setState(state);
  };


  return (
    <Paper>
      <Scheduler height={660} data={appointments}>
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
        <EditingState />
        <DayView startDayHour="6" />
        <WeekView />
        <MonthView />
        <AllDayPanel />
        <EditRecurrenceMenu />
        <Appointments onChange={() => console.log(1)} />
        <AppointmentTooltip showCloseButton showOpenButton showDeleteButton />
        <Toolbar />
        <DateNavigator navigationButtonComponent={CustomNavigationButton} />
        <TodayButton />

        <AppointmentForm
          overlayComponent={() => AppointmentFormContainer(state)}
          // visible={false}
          onVisibilityChange={toggleEditingFormVisibility}
        />
        <DragDropProvider />
      </Scheduler>

      <Dialog open={false} onClose={() => cancelDelete}>
        <DialogTitle> Delete Appointment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {" "}
            Are you sure you want to delete this appointment?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleConfirmationVisable} color="primary">
            Cancel
          </Button>
        </DialogActions>
        <DialogActions>
          <Button onClick={commitDeleteAppointment} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Fab
        color="secondary"
        className={classes.addButton}
        onClick={() => updateState({ editingFormVisible: true })}
        // onClick={() => console.log("Open update form")}
      >
        <AddIcon />
      </Fab>
    </Paper>
  );
}
