import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) =>  ({}));
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Island</h1>
    </div>
  );
}


