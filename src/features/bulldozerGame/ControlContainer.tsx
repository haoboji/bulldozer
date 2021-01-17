import { makeStyles, ButtonProps, Button, Paper } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import styles from "./ControlContainer.styles";
import { advanceBulldozer, rotateBulldozer } from "./state/bulldozerActions";
import { Command, ROTATION_LEFT, ROTATION_RIGHT } from "./state/constant";
import { endSimuation } from "./state/siteActions";
import config from "../../app/config";

const GameControl = (): JSX.Element => {
  const classes = makeStyles(styles)();
  const dispatch = useDispatch();
  const handleAdvance = () => dispatch(advanceBulldozer());
  const handleLeft = () => dispatch(rotateBulldozer(ROTATION_LEFT));
  const handleRight = () => dispatch(rotateBulldozer(ROTATION_RIGHT));
  const handleQuit = () => dispatch(endSimuation());
  const buttonProps: ButtonProps = {
    variant: "outlined",
    color: "primary",
    className: classes.button,
  };
  return (
    <Paper className={classes.root} variant="outlined">
      <Button {...buttonProps} onClick={handleAdvance}>
        {config.commandName[Command.Advance]}
      </Button>
      <Button {...buttonProps} onClick={handleLeft}>
        {config.commandName[Command.Left]}
      </Button>
      <Button {...buttonProps} onClick={handleRight}>
        {config.commandName[Command.Right]}
      </Button>
      <Button {...buttonProps} onClick={handleQuit}>
        {config.commandName[Command.Quit]}
      </Button>
    </Paper>
  );
};

export default GameControl;
