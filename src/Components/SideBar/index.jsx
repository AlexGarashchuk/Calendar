import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core/";

let menuItems = [
  "Home",
  "Dashboard",
  "Inbox",
  "Products",
  "Invoices",
  "Customers",
  "ChatRoom",
  "Calendar",
  "Help Center",
  "Settings"
];

const useStyles = makeStyles(theme => ({
  root: {
    width: "240px",
    height: "100vh",
    backgroundColor: "#43425D",
    color: "#fff"
  }
}));
export const SideBarList = () => {
  const classes = useStyles();

  return (
    <div>
      <List className={classes.root}>
        {menuItems.map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
