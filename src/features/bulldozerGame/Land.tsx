import { Paper, PaperProps } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./Land.styles";
import { Terrain } from "./state/constant";
import clsx from "clsx";

export interface LandProps extends PaperProps {
  terrain?: Terrain;
}

const Land = (props: LandProps): JSX.Element => {
  const { terrain, children, className, ...paperProps } = props;
  const classes = makeStyles(styles)();
  const classNames = clsx(
    classes.root,
    terrain === Terrain.ProtectedTree && classes.green,
    terrain === Terrain.RemovableTree && classes.lightgreen,
    terrain === Terrain.RockyLand && classes.lightsteelblue,
    terrain === Terrain.PlainLand && classes.lightgoldenrodyellow,
    terrain === Terrain.ClearedLand && classes.white,
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
