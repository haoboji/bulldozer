import { Typography } from "@material-ui/core";
import { deepEqual } from "mathjs";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../app/rootReducer";
import ActivityList from "./ActivityList";
import Bulldozer from "./Bulldozer";
import useStyles from "./BulldozerGame.styles";
import CommandList from "./CommandList";
import GameControl from "./ControlContainer";
import MapLegend from "./MapLegend";
import Site, { SiteProps } from "./Site";
import { GameStatus } from "./state/constant";
import { uploadSiteMap } from "./state/siteActions";
import UploadMap from "./UploadMap";

const BulldozerGame = (): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const game = useSelector((s: AppState) => s.game);
  const { map, bulldozer } = game;
  const { status, commands, activities, totalCost, unclearedCost } = game;
  const gameOver = status === GameStatus.Ended || status === GameStatus.Error;
  const handleUpload = (fileList: FileList | null) => {
    if (fileList) {
      uploadSiteMap(dispatch, fileList);
    }
  };
  const BulldozerRenderer: SiteProps["TileChildren"] = ({ location }) => {
    if (deepEqual(location, bulldozer.location)) {
      return (
        <Bulldozer
          facing={bulldozer.direction}
          style={{ visibility: "visible" }}
        />
      );
    }
    return <></>;
  };

  return (
    <div className={classes.root}>
      <div className={classes.title} style={{ flexGrow: map ? 0 : 0.2 }}>
        <Typography variant="h4" align="center">
          {gameOver ? "Game Over !!!" : "Site Clearing Simulation"}
        </Typography>
        <div
          className={classes.description}
          style={{ maxHeight: gameOver ? 100 : 0 }}
        >
          <Typography variant="h6" align="center">
            The simulation has ended and new bulldozer commands are no longer
            accepted.
          </Typography>
          <Typography variant="h6" align="center">
            Please review the final list of commands and itemised report
            including the cost of uncleared squares.
          </Typography>
          <Typography variant="h6" align="center">
            To start a new simulation session, please refresh this page.
          </Typography>
        </div>
      </div>
      {!map && <UploadMap onChangeUploadMap={handleUpload} />}
      {map && (
        <div className={classes.main}>
          <div>
            <MapLegend />
          </div>
          <div className={classes.column}>
            <Site map={map} TileChildren={BulldozerRenderer} />
            <GameControl />
          </div>
          <div>
            <CommandList commands={commands} />
          </div>
          <div>
            <ActivityList
              activities={activities}
              totalCost={totalCost}
              unclearedCost={unclearedCost}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BulldozerGame;
