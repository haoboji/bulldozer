import { makeStyles } from "@material-ui/core";
import { deepEqual } from "mathjs";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../app/rootReducer";
import ActivityList from "./ActivityList";
import Bulldozer from "./Bulldozer";
import styles from "./BulldozerGame.styles";
import CommandList from "./CommandList";
import GameControl from "./ControlContainer";
import MapLegend from "./MapLegend";
import Site, { SiteProps } from "./Site";
import { uploadSiteMap } from "./state/siteActions";
import WelcomePage from "./WelcomePage";

const BulldozerGame = (): JSX.Element => {
  const classes = makeStyles(styles)();
  const dispatch = useDispatch();
  const game = useSelector((s: AppState) => s.game);
  const { map, bulldozer, commands, activities, totalCost } = game;
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
      {!map && (
        <WelcomePage
          className={classes.welcomePage}
          onChangeUploadMap={handleUpload}
        />
      )}
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
            <ActivityList activities={activities} totalCost={totalCost} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BulldozerGame;
