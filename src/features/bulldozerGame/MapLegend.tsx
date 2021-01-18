import { makeStyles, Paper } from "@material-ui/core";
import React from "react";
import styles from "./MapLegend.styles";
import Land from "./Land";
import { Terrain } from "./state/constant";
import config from "../../app/config";
import Bulldozer from "./Bulldozer";

const MapLegend = (): JSX.Element => {
  const classes = makeStyles(styles)();
  return (
    <Paper className={classes.root} variant="outlined">
      <div className={classes.header}>
        <b>Map Legend</b>
      </div>
      {Object.values(Terrain).map((t) => (
        <div key={t} className={classes.legend}>
          <Land terrain={t} />
          <span className={classes.text}>{config.terrainName[t]}</span>
        </div>
      ))}
      <div className={classes.legend}>
        <Land style={{ visibility: "hidden" }}>
          <Bulldozer style={{ visibility: "visible" }} />
        </Land>
        <span className={classes.text}>Bulldozer</span>
      </div>
    </Paper>
  );
};

export default MapLegend;
