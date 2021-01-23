import { ButtonProps, Button, Paper } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./ControlContainer.styles";
import {
  advanceBulldozer,
  endSimuation,
  rotateBulldozer,
} from "./state/bulldozerActions";
import {
  Command,
  GameStatus,
  ROTATION_LEFT,
  ROTATION_RIGHT,
} from "./state/constant";
import config from "../../app/config";
import { AppState } from "../../app/rootReducer";

const GameControl = (): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const status = useSelector((s: AppState) => s.game.status);
  const handleAdvance = () => dispatch(advanceBulldozer());
  const handleLeft = () => dispatch(rotateBulldozer(ROTATION_LEFT));
  const handleRight = () => dispatch(rotateBulldozer(ROTATION_RIGHT));
  const handleQuit = () => dispatch(endSimuation());
  const buttonProps: ButtonProps = {
    variant: "outlined",
    color: "primary",
    className: classes.button,
    disabled: status !== GameStatus.Started,
  };
  return (
    <Paper className={classes.root} variant="outlined">
      <Button
        {...buttonProps}
        disabled={status === GameStatus.Ended || status === GameStatus.Error}
        onClick={handleAdvance}
      >
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
