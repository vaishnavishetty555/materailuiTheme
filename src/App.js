import React from "react";
import ReactDOM from "react-dom";
import { Button, createMuiTheme, Typography } from "@material-ui/core";
import { makeStyles, ThemeProvider, useTheme } from "@material-ui/core/styles";
import TypographyDemo from "./TypographyDemo";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    background: "linear-gradient(45deg,#FE6B8B 30%,#FF8E53 90%)"
  },
  button: {
    background: "blue",
    [theme.breakpoints.up("sm")]: {
      background: "cyan"
    }
  }
}));
const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: "5em"
    }
  },
  palette: {
    primary: {
      main: "#CCCCCC"
    }
  }
});
export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button className={classes.button} color="primary" variant="contained">
        This is a button
      </Button>
      <ThemeProvider theme={theme}>
        <TypographyDemo />
      </ThemeProvider>
    </div>
  );
}
