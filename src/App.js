import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1)
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Box border={1} borderColor="primary.main" p={4}>
      <Typography component="div">
        <Box border={1} borderColor="grey.200" fontSize="h6.fontSize" textAlign="left" m={1}>
          Azul Fell-awen akk!
        </Box>
        <Box textAlign="center" m={1}>
          Bonjour tout le monde!
        </Box>
      </Typography>
      <Box display="flex" justifyContent="space-between" m={1} p={1} bgcolor="background.paper">
        <Button variant="outlined" className={classes.button}>
          Default
        </Button>
        <Button variant="outlined" color="primary" className={classes.button}>
          Primary
        </Button>
        <Button variant="outlined" color="secondary" className={classes.button}>
          Secondary
        </Button>
      </Box>
    </Box>
  );
}

export default App;
