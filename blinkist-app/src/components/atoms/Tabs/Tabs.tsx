import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { bookTabContent } from "../../../utils/Constants";

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BookTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{
              color: "#22C870",
              typographyVariant: "subtitle1",
              textTransform: "none",
              alignItems: "flex-start",
            }}
            style={{ minWidth: "30%" }}
            label="Synopsis"
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              color: "#22C870",
              typographyVariant: "subtitle1",
              textTransform: "none",
              alignItems: "flex-start",
            }}
            style={{ minWidth: "30%" }}
            label="Who is it for?"
            {...a11yProps(1)}
          />
          <Tab
            sx={{
              color: "#22C870",
              typographyVariant: "subtitle1",
              textTransform: "none",
              alignItems: "flex-start",
            }}
            style={{ minWidth: "30%" }}
            label="About the author"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Typography variant="body2" color={"#03314B"}>{bookTabContent}</Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Typography variant="body2" color={"#03314B"}>{bookTabContent}</Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Typography variant="body2" color={"#03314B"}>{bookTabContent}</Typography>
      </TabPanel>
    </Box>
  );
}
