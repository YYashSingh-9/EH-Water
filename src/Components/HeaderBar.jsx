import classes from "./HeaderBar.module.css";
import { AppBar, Box } from "@mui/material";
import Logo from "../assets/Images/finalLogo1.png";

const HeaderBar = () => {
  return (
    <>
      <Box>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            alignItems: "center",
          }}
          className={classes.appbar}
        >
          <Box className={classes.logoDiv}>
            <img src={Logo} />
          </Box>
        </AppBar>
      </Box>
    </>
  );
};

export default HeaderBar;
