import { Terrain } from "./site";
import { Location } from "./bulldozer";

export interface Activity {
  terrain: Terrain;
  location: Location;
}
