import { makeStyles, Paper } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import config from "../../app/config";
import styles from "./CommandList.styles";
import { Command } from "./state/constant";

export interface CommandListProps {
  commands: Command[];
}

const makeItems = (commands: CommandListProps["commands"]) => {
  const Row = (props: ListChildComponentProps) => {
    const { style, index } = props;
    const classes = makeStyles(styles)();
    const command = commands[index];

    return (
      <div style={style} className={classes.item}>
        {`${index + 1}. ${config.commandName[command]}`}
      </div>
    );
  };
  return Row;
};

const CommandList = (props: CommandListProps): JSX.Element => {
  const { commands } = props;
  const classes = makeStyles(styles)();

  return (
    <Paper variant="outlined" className={classes.root}>
      <div className={clsx(classes.item, classes.header)}>
        <b>Command List</b>
      </div>
      <FixedSizeList
        itemSize={36}
        width={150}
        height={460}
        itemCount={commands.length}
      >
        {makeItems(commands)}
      </FixedSizeList>
    </Paper>
  );
};

export default CommandList;
