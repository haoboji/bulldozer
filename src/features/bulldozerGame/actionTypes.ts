import { Rotation } from "./bulldozer";
import { SiteMap } from "./site";

export const SET_SITE_MAP = "SET_SITE_MAP";
export const ADVANCE_BULLDOZER = "ADVANCE_BULLDOZER";
export const ROTATE_BULLDOZER = "ROTATE_BULLDOZER";

export interface SetSiteMapAction {
  type: typeof SET_SITE_MAP;
  map: SiteMap;
}

export interface AdvanceBulldozerAction {
  type: typeof ADVANCE_BULLDOZER;
}

export interface RotateBulldozerAction {
  type: typeof ROTATE_BULLDOZER;
  rotation: Rotation;
}

export type BulldozerGameAction =
  | SetSiteMapAction
  | AdvanceBulldozerAction
  | RotateBulldozerAction;
