export * from './syntax-reducer';
export * from './helpers-reducer';
export * from './responsive-helpers-reducer';
export * from './typography-helpers-reducer';

import { ModifiersAction, ModifiersActionTypes } from "../../actions/modifiers-action"

export interface ModifiersState {
}

const initialState: ModifiersState = {
}

export const modifiersReducer = (state: ModifiersState = initialState, action: ModifiersAction): ModifiersState => {
  switch(action.type) {
    default: {
      return state;
    }
  }
}