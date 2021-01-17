import { makeStyles, Paper } from "@material-ui/core";
import { deepEqual } from "mathjs";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../app/rootReducer";
import ActivityList from "./ActivityList";
import Bulldozer from "./Bulldozer";
import styles from "./BulldozerGame.styles";
import CommandList from "./CommandList";
import GameControl from "./ControlContainer";
import Site, { SiteProps } from "./Site";
import { uploadSiteMap } from "./state/siteActions";
import WelcomePage from "./WelcomePage";

const BulldozerGame = (): JSX.Element => {
  const classes = makeStyles(styles)();
  const dispatch = useDispatch();
  const game = useSelector((s: AppState) => s.game);
  const { map, bulldozer, commands, activities } = game;
  const handleUpload = (fileList: FileList | null) => {
    if (fileList) {
      uploadSiteMap(dispatch, fileList);
    }
  };
  const BulldozerRenderer: SiteProps["TileChildren"] = ({ location }) => {
    if (deepEqual(location, bulldozer.location)) {
      return <Bulldozer facing={bulldozer.direction} />;
    }
    return <></>;
  };

  return (
    <div className={classes.root}>
      {!map && (
        <WelcomePage
          className={classes.welcomePage}
          onChangeUploadMap={handleUpload}
        />
      )}
      {map && (
        <div className={classes.main}>
          <div className={classes.column}>
            <Paper className={classes.map} variant="outlined">
              <Site map={map} TileChildren={BulldozerRenderer} />
            </Paper>
            <GameControl />
          </div>
          <div>
            <CommandList commands={commands} />
          </div>
          <div>
            <ActivityList activities={activities} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BulldozerGame;
