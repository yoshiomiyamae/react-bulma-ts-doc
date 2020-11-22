import { navigationReducer } from "./navigation-reducer";
import * as overview from "./overview-reducer";
import { contentReducer } from "./elements/content-reducer";

export default {
  navigationReducer,
  contentReducer,
  ...overview,
};