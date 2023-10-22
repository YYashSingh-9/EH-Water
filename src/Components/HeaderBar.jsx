import classes from "./HeaderBar.module.css";
import { AppBar, Box } from "@mui/material";
import Logo from "../assets/Images/finalLogo1.png";
import g20Logo from "../assets/Images/g20.png";
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
            <span className={classes.betaTag}>Beta</span>
            <img src={g20Logo} className={classes.g20Img} />
          </Box>
        </AppBar>
      </Box>
    </>
  );
};

export default HeaderBar;
