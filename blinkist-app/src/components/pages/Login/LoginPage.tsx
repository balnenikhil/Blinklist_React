import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Images } from "../../atoms/Images/Images";

export const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Box>
      <Box position={"absolute"} paddingTop={"10%"} width={"100%"} height={"100%"} sx={{ background: "#F1F6F4" }}>
        <Box display={"flex"} justifyContent="center">
          <Box width={"60%"}>
            <Box width={"80%"} padding={"5% 10%"}>
              <Typography variant="h1" sx={{ marginBottom: "3rem" }}>
                Understand books & podcasts in 15 minutes
              </Typography>
              <Typography variant="h3">
                Perfect for curious people who love to learn, busy people who
                dont have time to read, and even people who are not into
                reading.
              </Typography>
            </Box>
            <Box display={"flex"} justifyContent={"center"} padding={"30px"}>
                <Button variant="contained" onClick={() => loginWithRedirect()}>Login</Button>
            </Box>
          </Box>
          <Box width={"40%"} display={"flex"} >
            <Images src="login.png" alt="login"></Images>
        </Box>
        </Box>
      </Box>
    </Box>
  );
};
