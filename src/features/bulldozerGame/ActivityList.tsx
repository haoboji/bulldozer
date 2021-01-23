import { Paper } from "@material-ui/core";
import clsx from "clsx";
import React, { useEffect, useRef } from "react";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import config from "../../app/config";
import useStyles from "./ActivityList.styles";
import { Activity } from "./state/bulldozer";
import { Terrain } from "./state/constant";

export interface ActivityListProps {
  activities: Activity[];
  unclearedCost?: number;
  totalCost?: number;
}

const ActivityHeader = () => {
  const classes = useStyles();
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

interface ActivityFooterProps {
  name: string;
  cost: number;
}

const ActivityFooter = (props: ActivityFooterProps) => {
  const classes = useStyles();
  const { name, cost } = props;
  return (
    <div className={clsx(classes.item, classes.borderTop, classes.footer)}>
      <span className={classes.name}>
        <b>{name}</b>
      </span>
      <span className={classes.location}></span>
      <span className={classes.fuel}></span>
      <span className={classes.cost}>
        <b>{cost}</b>
      </span>
    </div>
  );
};

const makeItems = (activities: ActivityListProps["activities"]) => {
  const Row = (props: ListChildComponentProps) => {
    const { style, index } = props;
    const classes = useStyles();
    const { terrain, location } = activities[index];
    const { activityName, fuelUsage, itemCost } = config;
    const fuel = terrain !== Terrain.ProtectedTree ? fuelUsage[terrain] : 0;
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
  const { activities, unclearedCost, totalCost } = props;
  const classes = useStyles();
  const last = activities.length - 1;
  const listRef = useRef<null | FixedSizeList>(null);
  useEffect(() => {
    listRef?.current?.scrollToItem(last);
  }, [listRef, last]);

  return (
    <Paper variant="outlined" className={classes.root}>
      <ActivityHeader />
      <FixedSizeList
        ref={listRef}
        itemSize={36}
        width={650}
        height={420}
        itemCount={activities.length}
      >
        {makeItems(activities)}
      </FixedSizeList>
      {unclearedCost !== undefined && (
        <ActivityFooter name="Cost of uncleared squares" cost={unclearedCost} />
      )}
      {totalCost !== undefined && (
        <ActivityFooter name="Total Cost" cost={totalCost} />
      )}
    </Paper>
  );
};

export default ActivityList;
