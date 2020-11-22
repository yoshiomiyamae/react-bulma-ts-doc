import { ColorsAction, ColorsActionTypes } from "../../actions/overview/colors-action"

export interface ColorsState {
}

const initialState: ColorsState = {
}

export const colorsReducer = (state: ColorsState = initialState, action: ColorsAction): ColorsState => {
  switch(action.type) {
    default: {
      return state;
    }
  }
}