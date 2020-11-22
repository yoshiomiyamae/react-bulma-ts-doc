export * from './content-reducer';

import { ElementsAction, ElementsActionTypes } from "../../actions/elements-action"

export interface ElementsState {
}

const initialState: ElementsState = {
}

export const elementsReducer = (state: ElementsState = initialState, action: ElementsAction): ElementsState => {
  switch(action.type) {
    default: {
      return state;
    }
  }
}