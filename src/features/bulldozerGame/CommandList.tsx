import { makeStyles, Paper } from "@material-ui/core";
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
    const command = commands[index - 1];

    return (
      <div style={style} className={classes.item}>
        {index === 0 && <b>Command List</b>}
        {index > 0 && `${index}. ${config.commandName[command]}`}
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
      <FixedSizeList
        itemSize={36}
        width={150}
        height={420}
        itemCount={commands.length + 1}
      >
        {makeItems(commands)}
      </FixedSizeList>
    </Paper>
  );
};

export default CommandList;
