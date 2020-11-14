import { StartAction, StartActionTypes } from "../../actions/overview/start-action"

export interface StartState {
}

const initialState: StartState = {
}

export const startReducer = (state: StartState = initialState, action: StartAction): StartState => {
  switch(action.type) {
    default: {
      return state;
    }
  }
}