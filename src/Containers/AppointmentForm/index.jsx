import React from "react";

import MomentUtils from "@date-io/moment";

import { Button, TextField, IconButton } from "@material-ui/core";

import {
  KeyboardDateTimePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";

import Close from "@material-ui/icons/Close";
import Create from "@material-ui/icons/Create";
import CalendarToday from "@material-ui/icons/CalendarToday";
import LocationOn from "@material-ui/icons/LocationOn";
import Notes from "@material-ui/icons/Notes";
import {
  AppointmentForm,
  DateNavigator
} from "@devexpress/dx-react-scheduler-material-ui";
import { useStyles } from "../style.js";

export const AppointmentFormContainer = state => {
  const { editingFormVisible } = state;
  // debugger;
  const classes = useStyles();

  const textEditorProps = field => ({
    variant: "outlined",
    onChange: ({ target: change }) =>
      this.changeAppointment({
        field: [field],
        changes: change.value
      }),
    value: "Title",
    label: field[0].toUpperCase() + field.slice(1),
    className: classes.textField
  });
  const pickerEditorProps = field => ({
    className: classes.picker,
    // keyboard: true,
    ampm: false,
    onChange: date =>
      this.changeAppointment({
        field: [field],
        changes: date ? date.toDate() : false
      }),
    inputVariant: "outlined",
    format: "DD/MM/YYYY HH:mm",
    onError: () => null
  });

  //Open event edition
  const [view, setView] = React.useState({ editingFormVisible: false });
  const cancelChanges = () => {
    setView(!view);
    console.log("Close this window");

    //  visibleChange();
    //  cancelAppointment();
  };

  const isNewAppointment = false; //appointmentData.id === undefined;

  return (
    <AppointmentForm.Overlay
      visible={view.editingFormVisible}
      target={<div></div>}
      fullSize
    >
      <div>
        <div className={classes.header}>
          <IconButton
            className={classes.closeButton}
            onClick={() => cancelChanges(view)}
          >
            <Close color="action" />
          </IconButton>
        </div>
        <div className={classes.content}>
          <div className={classes.wrapper}>
            <Create className={classes.icon} color="action" />
            <TextField {...textEditorProps("title")} />
          </div>
          <div className={classes.wrapper}>
            <CalendarToday className={classes.icon} color="action" />
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <KeyboardDateTimePicker
                label="Start Date"
                {...pickerEditorProps("startDate")}
              />
              <KeyboardDateTimePicker
                label="End Date"
                {...pickerEditorProps("endDate")}
              />
            </MuiPickersUtilsProvider>
          </div>
          <div className={classes.wrapper}>
            <LocationOn className={classes.icon} color="action" />
            <TextField {...textEditorProps("location")} />
          </div>
          <div className={classes.wrapper}>
            <Notes className={classes.icon} color="action" />
            <TextField {...textEditorProps("notes")} multiline rows="6" />
          </div>
        </div>
        <div className={classes.buttonGroup}>
          {!isNewAppointment && (
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
              onClick={() => {
                console.log("Something delete event");
                // visibleChange();
                // this.commitAppointment("deleted");
              }}
            >
              Delete
            </Button>
          )}
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={() => {
              console.log("On click");
              // visibleChange();
              // applyChanges();
            }}
          >
            {isNewAppointment ? "Create" : "Save"}
          </Button>
        </div>
      </div>
    </AppointmentForm.Overlay>
  );
};
