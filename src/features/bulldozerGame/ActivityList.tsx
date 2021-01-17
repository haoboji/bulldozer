import { makeStyles, Paper } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import config from "../../app/config";
import styles from "./ActivityList.styles";
import { PRESERVED_TREE } from "./state/constant";
import { Activity } from "./state/report";

export interface ActivityListProps {
  activities: Activity[];
}

const makeItems = (activities: ActivityListProps["activities"]) => {
  const Row = (props: ListChildComponentProps) => {
    const { style, index } = props;
    const classes = makeStyles(styles)();
    if (index === 0) {
      return (
        <div style={style} className={classes.item}>
          <span className={classes.name}>
            <b>Activity</b>
          </span>
          <span className={classes.location}>
            <b>Location ([x,y])</b>
          </span>
          <span className={classes.fuel}>
            <b>Fuel Usage (fuel unit)</b>
          </span>
          <span className={classes.cost}>
            <b>Cost (credit)</b>
          </span>
        </div>
      );
    }
    const activity = activities[index - 1];
    const { terrain, location } = activity;
    const { activityName, fuelUsage, itemCost } = config;
    const fuel = terrain !== PRESERVED_TREE ? fuelUsage[terrain] : 0;
    const cost = itemCost.fuel * fuel;

    return (
      <div style={style} className={clsx(classes.item, classes.borderTop)}>
        <span className={classes.name}>{activityName[terrain]}</span>
        <span className={classes.location}>{`[${location.join(",")}]`}</span>
        <span className={classes.fuel}>{fuel > 0 && fuel}</span>
        <span className={classes.cost}>{cost > 0 && cost}</span>
      </div>
    );
  };
  return Row;
};

const ActivityList = (props: ActivityListProps): JSX.Element => {
  const { activities } = props;
  const classes = makeStyles(styles)();

  return (
    <Paper variant="outlined" className={classes.root}>
      <FixedSizeList
        itemSize={36}
        width={650}
        height={420}
        itemCount={activities.length + 1}
      >
        {makeItems(activities)}
      </FixedSizeList>
    </Paper>
  );
};

export default ActivityList;
