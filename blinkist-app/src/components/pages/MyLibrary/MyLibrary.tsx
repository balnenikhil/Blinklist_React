import { Typography } from "@mui/material";
import React from "react";
import LibraryTabs from "../../organisms/LibraryTabs/LibraryTabs";
import { Template } from "../../template/Template";

export const MyLibrary = () => (
    <div>
      <Template
        bodyContent={
          <>
            <Typography
              variant="h1"
              color={"#03314B"}
              sx={{ marginBottom: "3.5rem" }}
            >
              My Library
            </Typography>
            <LibraryTabs/>
          </>
        }
      ></Template>
    </div>
);
