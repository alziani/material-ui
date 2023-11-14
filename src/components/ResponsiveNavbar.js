import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Box,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import React from "react";
import DrawerNav from "./DrawerNav";

const ResponsiveNavbar = ({ links }) => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (e, val) => {
    setValue(val);
  };
  return (
    <AppBar
      sx={{
        backgroundImage:
          "linear-gradient(90deg, rgba(36,0,36,0.6671918767507004) 17%, rgba(121,9,49,0.3086484593837535) 44%, rgba(111,8,39,0.6363795518207283) 70%, rgba(0,9,255,0.6531862745098039) 100%)",
      }}
    >
      <Toolbar>
        {isMatch ? (
          <DrawerNav />
        ) : (
          <Grid container sx={{ placeItems: "center" }}>
            <Grid item xs={2}>
              <Typography>
                <ShoppingBasketIcon />
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="inherit"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
              >
                {links.map((link, index) => (
                  <Tab key={index} label={link} />
                ))}
              </Tabs>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={3}>
              <Box display={"flex"}>
                <Button
                  sx={{
                    marginLeft: "auto",
                    background: "rgba(121,9,49,0.3)",
                  }}
                  variant="contained"
                >
                  Login
                </Button>
                <Button
                  sx={{
                    marginLeft: 1,
                    background: "rgba(121,9,49,0.3)",
                  }}
                  variant="contained"
                >
                  Sign Up
                </Button>
              </Box>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default ResponsiveNavbar;
