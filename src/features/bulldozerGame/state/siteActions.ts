import { SiteMap } from "./site";
import {
  EndSimulationAction,
  END_SIMULATION,
  SetSiteMapAction,
  SET_SITE_MAP,
} from "./actionTypes";
import { parseFile, parseMap } from "./helper";
import { Dispatch } from "redux";

export const setSiteMap = (map: SiteMap): SetSiteMapAction => ({
  type: SET_SITE_MAP,
  map,
});

export const endSimuation = (): EndSimulationAction => ({
  type: END_SIMULATION,
});

export const uploadSiteMap = async (
  dispatch: Dispatch,
  files: FileList
): Promise<void> => {
  try {
    const content = await parseFile(files[0]);
    const map = parseMap(content);
    dispatch(setSiteMap(map));
  } catch (e) {
    alert(e.message);
  }
};
