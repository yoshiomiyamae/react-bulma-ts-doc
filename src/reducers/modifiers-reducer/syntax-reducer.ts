import { SyntaxAction, SyntaxActionTypes } from "../../actions/modifiers/syntax-action"

export interface SyntaxState {
}

const initialState: SyntaxState = {
}

export const syntaxReducer = (state: SyntaxState = initialState, action: SyntaxAction): SyntaxState => {
  switch(action.type) {
    default: {
      return state;
    }
  }
}