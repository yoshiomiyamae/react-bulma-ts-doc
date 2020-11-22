import { HelpersAction, HelpersActionTypes } from "../../actions/modifiers/helpers-action"

export interface HelpersState {
}

const initialState: HelpersState = {
}

export const helpersReducer = (state: HelpersState = initialState, action: HelpersAction): HelpersState => {
  switch(action.type) {
    default: {
      return state;
    }
  }
}