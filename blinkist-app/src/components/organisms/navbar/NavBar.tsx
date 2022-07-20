import {
  AppBar,
  Container,
  Grid,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Images } from "../../atoms/Images/Images";
import SearchIcon from "@mui/icons-material/Search";
import { Avatars } from "../../atoms/Avatars/Avatars";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import PersonIcon from "@mui/icons-material/Person";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { ExtendedNav } from "../../molecules/extendedNav/ExtendedNav";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../../../assets/logo.png";
import { makeStyles } from "@mui/styles";

const ExploreBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  "&:hover": {
    borderBottom: 1,
    borderColor: "#2CE080",
  },
});

const useStyles = makeStyles({
  NavBar: {
    background: "white",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    height: 86,
    cursor: "pointer",
    paddingRight: "250px",
    paddingLeft: "250px",
    zIndex: 100,
  },
});

export const NavBar = () => {
  const { logout } = useAuth0();

  const classes = useStyles();

  let navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={11}>
          <AppBar position="static" className={classes.NavBar} elevation={0} color="inherit">
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <Stack direction="row" spacing={5.4} flexWrap="wrap">
                  <Images src={logo} alt="logo" />
                  <SearchIcon fontSize="medium" />
                  <div>
                    <ExploreBox onClick={() => setIsOpen(!isOpen)}>
                      <Typography variant="body2" color={"#03314B"}>
                        Explore
                      </Typography>
                      {!isOpen && <ExpandMoreIcon />}
                      {isOpen && <ExpandLessIcon />}
                    </ExploreBox>
                  </div>
                  <Typography
                    variant="body2"
                    color={"#03314B"}
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    My Library
                  </Typography>
                </Stack>
                <Stack
                  id="nav-button"
                  data-testid="dropdown"
                  onClick={handleClick}
                  aria-controls={open ? "nav-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  direction="row"
                  sx={{ flexGrow: 1, flexDirection: "row-reverse" }}
                >
                  <KeyboardArrowDownIcon
                    sx={{ alignContent: "center", paddingTop: "6px" }}
                  />
                  <Avatars>N</Avatars>
                </Stack>
                <Menu
                  id="'nav-menu"
                  open={open}
                  anchorEl={anchorEl}
                  MenuListProps={{ "aria-labelledby": "nav-button" }}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <MenuItem>
                    <ListItemIcon>
                      <PersonIcon fontSize="small" />
                    </ListItemIcon>
                    Account
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem onClick={() => logout()} data-testid="logout">
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </Toolbar>
            </Container>
          </AppBar>
        </Grid>
      </Grid>
      {isOpen && <ExtendedNav />}
    </>
  );
};
