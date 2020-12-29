/**
 * Debug component
 */

import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, selectCount } from "./features/table/tableSlice";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2),
  },
}));

function Debug() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const count = useSelector(selectCount);

  return (
    <>
      <span>{count}</span>
      <Button
        variant="contained"
        className={classes.button}
        color={"primary"}
        onClick={() => dispatch(increment())}
      >
        Increment
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        color={"secondary"}
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </Button>
    </>
  );
}

export default Debug;
