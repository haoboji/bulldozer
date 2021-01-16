import {
  AdvanceBulldozerAction,
  ADVANCE_BULLDOZER,
  RotateBulldozerAction,
  ROTATE_BULLDOZER,
} from "./actionTypes";
import { Rotation } from "./bulldozer";

export const advanceBulldozer = (): AdvanceBulldozerAction => ({
  type: ADVANCE_BULLDOZER,
});

export const rotateBulldozer = (rotation: Rotation): RotateBulldozerAction => ({
  type: ROTATE_BULLDOZER,
  rotation,
});
