import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import classes from "./BottomNavBar.module.css";

export default function BottomNavBar() {
  const [value, setValue] = React.useState(0);
  const Navigate = useNavigate();
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: "15%",
        backgroundColor: "red",
        width: "70%",
      }}
    >
      <BottomNavigation
        showLabels={false}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className={classes.nav}
      >
        <BottomNavigationAction
          className={classes.bna}
          icon={<NoteAltIcon className={classes.icons} />}
          onClick={() => {
            Navigate("/");
          }}
        />
        <BottomNavigationAction
          icon={<LanguageIcon className={classes.icons} />}
          onClick={() => {
            Navigate("/issues");
          }}
        />
        <BottomNavigationAction
          icon={<AccountCircleIcon className={classes.icons} />}
          onClick={() => {
            Navigate("/issues/issue-details");
          }}
        />
      </BottomNavigation>
    </Box>
  );
}
