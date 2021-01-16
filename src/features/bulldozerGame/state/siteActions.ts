import { SiteMap } from "./site";
import {
  EndSimulationAction,
  END_SIMULATION,
  SetSiteMapAction,
  SET_SITE_MAP,
} from "./actionTypes";

export const setSiteMap = (map: SiteMap): SetSiteMapAction => ({
  type: SET_SITE_MAP,
  map,
});

export const endSimuation = (): EndSimulationAction => ({
  type: END_SIMULATION,
});
