import { Paper } from "@material-ui/core";
import clsx from "clsx";
import React, { useEffect, useRef } from "react";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import config from "../../app/config";
import useStyles from "./CommandList.styles";
import { Command } from "./state/constant";

export interface CommandListProps {
  commands: Command[];
}

const makeItems = (commands: CommandListProps["commands"]) => {
  const Row = (props: ListChildComponentProps) => {
    const { style, index } = props;
    const classes = useStyles();
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
  const last = commands.length - 1;
  const classes = useStyles();
  const listRef = useRef<null | FixedSizeList>(null);
  useEffect(() => {
    listRef?.current?.scrollToItem(last);
  }, [listRef, last]);

  return (
    <Paper variant="outlined" className={classes.root}>
      <div className={clsx(classes.item, classes.header)}>
        <b>Command List</b>
      </div>
      <FixedSizeList
        ref={listRef}
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
