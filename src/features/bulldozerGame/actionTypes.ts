import { SiteMap } from "./site";

export const SET_SITE_MAP = "SET_SITE_MAP";

export interface SetSiteMapAction {
  type: typeof SET_SITE_MAP;
  map: SiteMap;
}

export type BulldozerGameAction = SetSiteMapAction;
