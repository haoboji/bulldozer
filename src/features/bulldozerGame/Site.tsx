import React from "react";
import { SiteMap } from "./state/site";
import {
  FixedSizeGrid,
  FixedSizeGridProps,
  GridChildComponentProps,
} from "react-window";
import Land from "./Land";
import { Location } from "./state/bulldozer";

export interface SiteProps extends Partial<FixedSizeGridProps> {
  map: SiteMap;
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
        <Land terrain={map[props.rowIndex][props.columnIndex]}>
          {TileChildren && (
            <TileChildren location={[columnIndex, map.length - 1 - rowIndex]} />
          )}
        </Land>
      </div>
    );
  };
  return Tile;
};

const Site = (props: SiteProps): JSX.Element => {
  const { map, TileChildren, ...otherProps } = props;
  const children = makeTiles(map, TileChildren);
  const rootProps: FixedSizeGridProps = {
    columnCount: map[0].length,
    rowCount: map.length,
    columnWidth: 64,
    rowHeight: 64,
    width: 640,
    height: map.length > 640 ? 640 : map.length * 64,
    children,
  };

  return <FixedSizeGrid {...rootProps} {...otherProps} />;
};

export default Site;
