import { createAppStore } from "../../../app/store";
import { PLAIN_LAND } from "./constant";
import { SiteMap } from "./site";
import { setSiteMap, uploadSiteMap } from "./siteActions";

test("Set site map", () => {
  const s = createAppStore();
  const map: SiteMap = Array(3).fill(Array(3).fill(PLAIN_LAND));
  s.dispatch(setSiteMap(map));
  expect(s.getState().game.map).toEqual(map);
});

test("Upload file", async () => {
  const s = createAppStore();
  const fileList = ([new File(["oo\noo"], "a.txt")] as unknown) as FileList;
  await uploadSiteMap(s.dispatch, fileList);
  expect(s.getState().game.map).toEqual([
    ["o", "o"],
    ["o", "o"],
  ]);
});
