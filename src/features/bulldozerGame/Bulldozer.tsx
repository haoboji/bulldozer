import React from "react";
import { ReactComponent as BulldozerIcon } from "../../common/assets/bulldozer.svg";
import { Direction } from "./state/bulldozer";
import {
  DIRECTION_EAST,
  DIRECTION_NORTH,
  DIRECTION_SOUTH,
  DIRECTION_WEST,
} from "./state/constant";

export interface BulldozerProps extends React.SVGProps<SVGSVGElement> {
  facing: Direction;
}

const getRotation = (f: Direction) => {
  switch (f) {
    case DIRECTION_EAST:
      return 0;
    case DIRECTION_SOUTH:
      return 90;
    case DIRECTION_WEST:
      return 180;
    case DIRECTION_NORTH:
      return 270;
    default:
      return 0;
  }
};

const Bulldozer = (props: BulldozerProps): JSX.Element => {
  const { facing, ...svgProps } = props;
  const rotation = getRotation(facing);

  return (
    <BulldozerIcon
      data-testid="bulldozer-icon"
      style={{ transform: `rotate(${rotation}deg)` }}
      {...svgProps}
    />
  );
};

export default Bulldozer;
