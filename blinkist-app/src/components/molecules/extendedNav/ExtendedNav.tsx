import { Box, Divider, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { navList } from "../../../utils/Constants";
import { NavItem } from "../navItems/NavItem";
import science from "../../../assets/science.svg";
import economics from "../../../assets/economics.svg";
import bin from "../../../assets/bin.svg";
import brain from "../../../assets/brain.svg";
import leaf from "../../../assets/leaf.png";
import building from "../../../assets/building.svg";
import hospital from "../../../assets/hospital.svg";
import bulb from "../../../assets/bulb.svg";
import time2 from "../../../assets/time2.svg";
import target from "../../../assets/target.svg";
import graph from "../../../assets/graph.svg";
import block from "../../../assets/block.svg";
import chat from "../../../assets/chat.svg";
import file from "../../../assets/file.svg";
import love from "../../../assets/love.svg";
import edu from "../../../assets/edu.svg";
import bag from "../../../assets/bag.svg";

const useStyles = makeStyles({
  NavBox: {
    width: "100%",
    backgroundColor: "#F1F6F4",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    zIndex: 100,
    cursor: "pointer",
    position: "fixed",
  },
  line: {
    height: "1px",
    background: "#042330",
    margin: "10px 0px 10px 0px",
  },
});

export const ExtendedNav = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Box className={classes.NavBox}>
      <Box
        sx={{
          width: "100%",
          marginTop: "30px",
        }}
      >
        <Grid container spacing={1} justifyContent="flex-start" pl={"250px"}>
          <Grid item xs={3}>
            <List>
              <ListItem>
                <Typography variant="body1" color={"#116BE9"}>
                  {navList[0]}
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={3}>
            <List>
              <ListItem>
                <Typography variant="body1" color={"#6D787E"}>
                  {navList[1]}
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={3}>
            <List>
              <ListItem>
                <Typography variant="body1" color={"#6D787E"}>
                  {navList[2]}
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundColor: "#F1F6F4",
          width: "100%",
        }}
      >
        <Grid container justifyContent="center">
          <Grid item xs={3}>
            <Divider
              sx={{
                height: "1px",
                background: "#042330",
                margin: "10px 0px 10px 0px",
              }}
            />
            <List>
              <ListItem>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    "&:hover": { color: "#0365F2" },
                  }}
                >
                  <NotificationsNoneOutlinedIcon sx={{ paddingRight: "5px" }} />
                  <Typography
                    variant="body2"
                    onClick={() => {
                      navigate("/entrepreneurship");
                    }}
                    sx={{ color: "#6D787E", "&:hover": { color: "#0365F2" } }}
                  >
                    Entrepreneurship
                  </Typography>
                </Box>
              </ListItem>
              <ListItem>
                <NavItem
                  navName="Science"
                  imageSrc={science}
                  alternative="logo"
                ></NavItem>
              </ListItem>
              <ListItem>
                <NavItem
                  navName="Economics"
                  imageSrc={economics}
                  alternative="logo"
                ></NavItem>
              </ListItem>
              <ListItem>
                <NavItem
                  navName="Corporate Culture"
                  imageSrc={bag}
                  alternative="logo"
                ></NavItem>
              </ListItem>
              <ListItem>
                <NavItem
                  navName="Psychology"
                  imageSrc={brain}
                  alternative="logo"
                ></NavItem>
              </ListItem>
              <ListItem>
                <NavItem
                  navName="Nature & Environment"
                  imageSrc={leaf}
                  alternative="logo"
                ></NavItem>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={3}>
            <Divider
              sx={{
                height: "1px",
                background: "#042330",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
            <List>
              <ListItem>
                <NavItem
                  navName="Politics"
                  imageSrc={building}
                  alternative="logo"
                ></NavItem>
              </ListItem>
              <ListItem>
                <NavItem
                  navName="Health & Nutrition"
                  imageSrc={hospital}
                  alternative="logo"
                ></NavItem>
              </ListItem>
              <ListItem>
                <NavItem
                  navName="History"
                  imageSrc={bin}
                  alternative="logo"
                ></NavItem>
              </ListItem>
              <ListItem>
                <NavItem
                  navName="Motivation & Inspiration"
                  imageSrc={bulb}
                  alternative="logo"
                ></NavItem>
              </ListItem>
              <ListItem>
                <NavItem
                  navName="productivity"
                  imageSrc={time2}
                  alternative="logo"
                ></NavItem>
              </ListItem>
              <ListItem>
                <NavItem
                  navName="Career & Success"
                  imageSrc={target}
                  alternative="logo"
                ></NavItem>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={3}>
            <Divider
              sx={{
                height: "1px",
                background: "#042330",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
            <List>
              <ListItem>
                <NavItem
                  navName="Marketing & Sales"
                  imageSrc={graph}
                  alternative="logo"
                ></NavItem>
              </ListItem>
              <ListItem>
                <NavItem
                  navName="Personal Development"
                  imageSrc={block}
                  alternative="logo"
                ></NavItem>
              </ListItem>
              <ListItem>
                <NavItem
                  navName="Communication Skills"
                  imageSrc={chat}
                  alternative="logo"
                ></NavItem>
              </ListItem>
              <ListItem>
                <NavItem
                  navName="Money & Investments"
                  imageSrc={file}
                  alternative="logo"
                ></NavItem>
              </ListItem>
              <ListItem>
                <NavItem
                  navName="Sex & Relationship"
                  imageSrc={love}
                  alternative="logo"
                ></NavItem>
              </ListItem>
              <ListItem>
                <NavItem
                  navName="Education"
                  imageSrc={edu}
                  alternative="logo"
                ></NavItem>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
