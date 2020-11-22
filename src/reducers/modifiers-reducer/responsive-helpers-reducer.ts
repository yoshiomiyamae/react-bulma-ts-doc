import { ResponsiveHelpersAction, ResponsiveHelpersActionTypes } from "../../actions/modifiers/responsive-helpers-action"

export interface ResponsiveHelpersState {
}

const initialState: ResponsiveHelpersState = {
}

export const responsiveHelpersReducer = (state: ResponsiveHelpersState = initialState, action: ResponsiveHelpersAction): ResponsiveHelpersState => {
  switch(action.type) {
    default: {
      return state;
    }
  }
}