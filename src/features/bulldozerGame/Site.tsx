import React from "react";
import { SiteMap } from "./state/site";
import {
  FixedSizeGrid,
  FixedSizeGridProps,
  GridChildComponentProps,
} from "react-window";
import Land from "./Land";

export interface SiteProps extends Partial<FixedSizeGridProps> {
  map: SiteMap;
}

const makeTiles = (map: SiteMap) => {
  const Tile = (props: GridChildComponentProps) => (
    <div data-testid="tile" style={props.style}>
      <Land terrain={map[props.columnIndex][props.rowIndex]} />
    </div>
  );
  return Tile;
};

const Site = (props: SiteProps): JSX.Element => {
  const { map, ...otherProps } = props;
  const children = makeTiles(map);
  const rootProps: FixedSizeGridProps = {
    columnCount: map.length,
    rowCount: map[0].length,
    columnWidth: 64,
    rowHeight: 64,
    width: 640,
    height: 640,
    children,
  };

  return <FixedSizeGrid {...rootProps} {...otherProps} />;
};

export default Site;
