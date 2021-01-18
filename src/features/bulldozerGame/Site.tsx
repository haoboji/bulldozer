import React from "react";
import {
  FixedSizeGrid,
  FixedSizeGridProps,
  GridChildComponentProps,
} from "react-window";
import Land from "./Land";
import { Location, Map } from "./state/bulldozer";
import { makeStyles, Paper } from "@material-ui/core";
import styles from "./Site.styles";

export interface SiteProps extends Partial<FixedSizeGridProps> {
  map: Map;
  TileChildren?: (props: { location: Location }) => JSX.Element;
}

const makeTiles = (
  map: SiteProps["map"],
  TileChildren: SiteProps["TileChildren"]
) => {
  const Tile = (props: GridChildComponentProps) => {
    const { columnIndex, rowIndex } = props;
    return (
      <div data-testid="tile" style={props.style}>
        <Land terrain={map[props.rowIndex - 1]?.[props.columnIndex - 1]}>
          {TileChildren && (
            <TileChildren location={[columnIndex - 1, -rowIndex + 1]} />
          )}
        </Land>
      </div>
    );
  };
  return Tile;
};

const Site = (props: SiteProps): JSX.Element => {
  const { map, TileChildren, ...otherProps } = props;
  const classes = makeStyles(styles)();
  const children = makeTiles(map, TileChildren);
  const rootProps: FixedSizeGridProps = {
    columnCount: map[0].length + 2,
    rowCount: map.length + 2,
    columnWidth: 64,
    rowHeight: 64,
    width: 768,
    height: map.length > 768 ? 768 : (map.length + 2) * 64,
    children,
  };

  return (
    <Paper variant="outlined" className={classes.root}>
      <FixedSizeGrid {...rootProps} {...otherProps} />
    </Paper>
  );
};

export default Site;
