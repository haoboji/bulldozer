import { Rotation, SiteMap } from "./bulldozer";

export const SET_SITE_MAP = "SET_SITE_MAP";
export const ADVANCE_BULLDOZER = "ADVANCE_BULLDOZER";
export const ROTATE_BULLDOZER = "ROTATE_BULLDOZER";
export const END_SIMULATION = "END_SIMULATION";

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

export interface EndSimulationAction {
  type: typeof END_SIMULATION;
}

export type BulldozerGameAction =
  | SetSiteMapAction
  | AdvanceBulldozerAction
  | RotateBulldozerAction
  | EndSimulationAction;
