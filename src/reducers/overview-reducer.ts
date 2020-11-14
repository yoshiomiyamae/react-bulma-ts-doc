import { OverviewAction, OverviewActionTypes } from "../actions/overview-action"
import { OverviewMenu } from "../models/overview-model";

export interface OverviewState {
  selectedMenu: OverviewMenu;
}

const initialState: OverviewState = {
  selectedMenu: OverviewMenu.Start,
}

export const overviewReducer = (state: OverviewState = initialState, action: OverviewAction): OverviewState => {
  switch(action.type) {
    case OverviewActionTypes.setMenu: {
      return <OverviewState>{
        ...state,
        selectedMenu: action.data,
      }
    }
    default: {
      return state;
    }
  }
}