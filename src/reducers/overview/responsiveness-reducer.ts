import { ResponsivenessAction, ResponsivenessActionTypes } from "../../actions/overview/responsiveness-action"

export interface ResponsivenessState {
}

const initialState: ResponsivenessState = {
}

export const responsivenessReducer = (state: ResponsivenessState = initialState, action: ResponsivenessAction): ResponsivenessState => {
  switch(action.type) {
    default: {
      return state;
    }
  }
}