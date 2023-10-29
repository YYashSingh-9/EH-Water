import classes from "./HeaderBar.module.css";
import { AppBar, Box, Grid } from "@mui/material";
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
            <Grid
              container
              direction={"row"}
              justifyContent={"flex-end"}
              alignItems={"center"}
              sx={{ maxHeight: "10rem" }}
            >
              <Grid item lg={8} md={6} sm={6} textAlign={"center"}>
                <Box className={classes.logos}>
                  <img src={Logo} />
                  <span className={classes.betaTag}>Beta</span>
                </Box>
              </Grid>
              <Grid item lg={4} md={6} sm={6} textAlign={"right"}>
                <img src={g20Logo} className={classes.g20Img} />
              </Grid>
            </Grid>
          </Box>
        </AppBar>
      </Box>
    </>
  );
};

export default HeaderBar;
