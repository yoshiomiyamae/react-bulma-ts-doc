import { TypographyHelpersAction, TypographyHelpersActionTypes } from "../../actions/modifiers/typography-helpers-action"

export interface TypographyHelpersState {
}

const initialState: TypographyHelpersState = {
}

export const typographyHelpersReducer = (state: TypographyHelpersState = initialState, action: TypographyHelpersAction): TypographyHelpersState => {
  switch(action.type) {
    default: {
      return state;
    }
  }
}