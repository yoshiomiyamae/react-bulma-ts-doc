import { ContentAction, ContentActionTypes } from "../../actions/elements/content-action"

export interface ContentState {
}

const initialState: ContentState = {
}

export const contentReducer = (state: ContentState = initialState, action: ContentAction): ContentState => {
  switch(action.type) {
    default: {
      return state;
    }
  }
}