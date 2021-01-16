import { SiteMap } from "./site";

export const SET_SITE_MAP = "SET_SITE_MAP";
export const ADVANCE_BULLDOZER = "ADVANCE_BULLDOZER";

export interface SetSiteMapAction {
  type: typeof SET_SITE_MAP;
  map: SiteMap;
}

export interface AdvanceBulldozerAction {
  type: typeof ADVANCE_BULLDOZER;
}

export type BulldozerGameAction = SetSiteMapAction | AdvanceBulldozerAction;
