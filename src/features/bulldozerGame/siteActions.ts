import { SiteMap } from "./site";
import { SetSiteMapAction, SET_SITE_MAP } from "./actionTypes";

export const setSiteMap = (map: SiteMap): SetSiteMapAction => ({
  type: SET_SITE_MAP,
  map,
});
