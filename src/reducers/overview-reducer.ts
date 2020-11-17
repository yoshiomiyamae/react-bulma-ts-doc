import { OverviewAction, OverviewActionTypes } from "../actions/overview-action"

export interface OverviewState {
}

const initialState: OverviewState = {
}

export const overviewReducer = (state: OverviewState = initialState, action: OverviewAction): OverviewState => {
  switch(action.type) {
    default: {
      return state;
    }
  }
}