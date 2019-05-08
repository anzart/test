import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1)
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <h1>Azul fell-awen</h1>
      <h1>Bonjour tout le monde</h1>
      <Button variant="outlined" className={classes.button}>
        Default
      </Button>
      <Button variant="outlined" color="primary" className={classes.button}>
        Primary
      </Button>
      <Button variant="outlined" color="secondary" className={classes.button}>
        Secondary
      </Button>
    </div>
  );
}

export default App;
