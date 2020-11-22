import { navigationReducer } from "./navigation-reducer";
import * as overview from "./overview-reducer";
import * as elements from "./elements-reducer";
import * as modifiers from './modifiers-reducer';

export default {
  navigationReducer,
  ...elements,
  ...overview,
  ...modifiers,
};