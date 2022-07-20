import React from "react";
import { List, ListItem, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { footerList } from "../../../utils/Constants";

const useStyles = makeStyles({
  listBox1: {
    width: "132px",
    height: "224px",
    paddingLeft: "0px",
    paddingRight: "0px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: "0px",
  },

  listBox2: {
    width: "132px",
    height: "184px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: "0px",
  },
  listBox3: {
    width: "214px",
    display: "flex",
    flexDirection: "column",
    paddingTop: "0px",
  },
});

const Lists = () => {
  const classes = useStyles();

  return (
    <div>
      <List
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-start",
          width: "542px",
        }}
      >
        <List
         className={classes.listBox3}
        >
          <ListItem sx={{ paddingTop: "0px" }}>
            <Typography variant="body1" color={"#03314B"}>
              {footerList[0]}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body2" color={"#6D787E"}>
              {footerList[1]}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body2" color={"#6D787E"}>
              {footerList[2]}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body2" color={"#6D787E"}>
              {footerList[3]}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body2" color={"#6D787E"}>
              {footerList[4]}
            </Typography>
          </ListItem>
        </List>
        <List className={classes.listBox1}>
          <ListItem sx={{ paddingLeft: "0px", paddingTop: "0px" }}>
            <Typography variant="body1" color={"#03314B"}>
              {footerList[5]}
            </Typography>
          </ListItem>
          <ListItem sx={{ paddingLeft: "0px" }}>
            <Typography variant="body2" color={"#6D787E"}>
              {footerList[6]}
            </Typography>
          </ListItem>
          <ListItem sx={{ paddingLeft: "0px", paddingRight: "0px" }}>
            <Typography
              variant="body2"
              sx={{ marginRight: "0px" }}
              color={"#6D787E"}
            >
              {footerList[7]}
            </Typography>
          </ListItem>
          <ListItem sx={{ paddingLeft: "0px" }}>
            <Typography variant="body2" color={"#6D787E"}>
              {footerList[8]}
            </Typography>
          </ListItem>
          <ListItem sx={{ paddingLeft: "0px", paddingRight: "0px" }}>
            <Typography variant="body2" color={"#6D787E"}>
              {footerList[9]}
            </Typography>
          </ListItem>
          <ListItem sx={{ paddingLeft: "0px" }}>
            <Typography variant="body2" color={"#6D787E"}>
              {footerList[10]}
            </Typography>
          </ListItem>
        </List>
        <List className={classes.listBox2}>
          <ListItem sx={{ paddingLeft: "0px", paddingTop: "0px" }}>
            <Typography variant="body1" color={"#03314B"}>
              {footerList[11]}
            </Typography>
          </ListItem>
          <ListItem sx={{ paddingLeft: "0px" }}>
            <Typography variant="body2" color={"#6D787E"}>
              {footerList[12]}
            </Typography>
          </ListItem>
          <ListItem sx={{ paddingLeft: "0px" }}>
            <Typography variant="body2" color={"#6D787E"}>
              {footerList[13]}
            </Typography>
          </ListItem>
          <ListItem sx={{ paddingLeft: "0px" }}>
            <Typography variant="body2" color={"#6D787E"}>
              {footerList[14]}
            </Typography>
          </ListItem>
          <ListItem sx={{ paddingLeft: "0px", paddingRight: "0px" }}>
            <Typography variant="body2" color={"#6D787E"}>
              {footerList[15]}
            </Typography>
          </ListItem>
        </List>
      </List>
    </div>
  );
};

export default Lists;
