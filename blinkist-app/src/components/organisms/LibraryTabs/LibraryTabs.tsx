import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { BookGrid } from "../bookGrid/BookGrid";
import { TabPanel, a11yProps }  from "../../atoms/Tabs/Tabs";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
  TabHeading:{
    typographyVariant: "subtitle1",
  }
})

 

export default function LibraryTabs() {
  const [value, setValue] = React.useState(0);

  const classes = useStyles();

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%"}}>
      <Box sx={{ borderBottom: 2, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            className={classes.TabHeading}
            sx={{textTransform: "none", alignItems:"flex-start",}}
            style={{minWidth:"30%" }}
            label="Currently reading"
            {...a11yProps(0)}
          />
          <Tab
            className={classes.TabHeading}
            sx={{textTransform: "none", alignItems:"flex-start",}}
            style={{minWidth:"30%" }}
            label="Finished"
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} >
        <BookGrid tab="currentlyReading" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BookGrid tab="finished" />
      </TabPanel>
    </Box>
  );
}
