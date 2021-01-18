import { Paper, PaperProps } from "@material-ui/core";
import React from "react";
import { Terrain } from "./state/site";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./Land.styles";
import {
  CLEARED_LAND,
  PLAIN_LAND,
  PRESERVED_TREE,
  REMOVABLE_TREE,
  ROCKY_LAND,
} from "./state/constant";
import clsx from "clsx";

export interface LandProps extends PaperProps {
  terrain?: Terrain;
}

const Land = (props: LandProps): JSX.Element => {
  const { terrain, children, className, ...paperProps } = props;
  const classes = makeStyles(styles)();
  const classNames = clsx(
    classes.root,
    terrain === PRESERVED_TREE && classes.green,
    terrain === REMOVABLE_TREE && classes.lightgreen,
    terrain === ROCKY_LAND && classes.lightsteelblue,
    terrain === PLAIN_LAND && classes.lightgoldenrodyellow,
    terrain === CLEARED_LAND && classes.white,
    terrain === undefined && classes.invisible,
    className
  );

  return (
    <Paper
      role="img"
      aria-label={terrain}
      variant="outlined"
      className={classNames}
      {...paperProps}
    >
      {children}
    </Paper>
  );
};

export default Land;
