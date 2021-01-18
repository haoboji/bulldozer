import { makeStyles, Paper } from "@material-ui/core";
import clsx from "clsx";
import { sum } from "mathjs";
import React from "react";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import config from "../../app/config";
import styles from "./ActivityList.styles";
import { PRESERVED_TREE } from "./state/constant";
import { Activity } from "./state/report";

export interface ActivityListProps {
  activities: Activity[];
  totalCost?: number;
}

const ActivityHeader = () => {
  const classes = makeStyles(styles)();
  return (
    <div className={clsx(classes.item, classes.borderBottom, classes.header)}>
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
};

const TotalCostFooter = (props: ActivityListProps) => {
  const classes = makeStyles(styles)();
  const { activities, totalCost } = props;
  return (
    <div className={clsx(classes.item, classes.borderTop, classes.footer)}>
      <span className={classes.name}>
        <b>Total Cost</b>
      </span>
      <span className={classes.location}></span>
      <span className={classes.fuel}></span>
      <span className={classes.cost}>
        <b>
          {totalCost ??
            sum(
              activities.map((a) =>
                a.terrain === PRESERVED_TREE
                  ? 0
                  : config.fuelUsage[a.terrain] * config.itemCost.fuel
              )
            )}
        </b>
      </span>
    </div>
  );
};

const makeItems = (activities: ActivityListProps["activities"]) => {
  const Row = (props: ListChildComponentProps) => {
    const { style, index } = props;
    const classes = makeStyles(styles)();
    const { terrain, location } = activities[index];
    const { activityName, fuelUsage, itemCost } = config;
    const fuel = terrain !== PRESERVED_TREE ? fuelUsage[terrain] : 0;
    const cost = itemCost.fuel * fuel;

    return (
      <div
        style={style}
        className={clsx(classes.item, index > 0 && classes.borderTop)}
      >
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
  const { activities, totalCost } = props;
  const classes = makeStyles(styles)();

  return (
    <Paper variant="outlined" className={classes.root}>
      <ActivityHeader />
      <FixedSizeList
        itemSize={36}
        width={650}
        height={420}
        itemCount={activities.length}
      >
        {makeItems(activities)}
      </FixedSizeList>
      <TotalCostFooter activities={activities} totalCost={totalCost} />
    </Paper>
  );
};

export default ActivityList;
