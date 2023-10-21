import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import classes from "./BottomNavBar.module.css";

export default function BottomNavBar() {
  const [value, setValue] = React.useState(0);

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
          icon={<RestoreIcon className={classes.icons} />}
        />
        <BottomNavigationAction
          icon={<FavoriteIcon className={classes.icons} />}
        />
        <BottomNavigationAction
          icon={<LocationOnIcon className={classes.icons} />}
        />
      </BottomNavigation>
    </Box>
  );
}
