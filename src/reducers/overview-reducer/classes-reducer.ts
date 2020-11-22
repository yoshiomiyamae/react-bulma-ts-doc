import { ClassesAction, ClassesActionTypes } from "../../actions/overview/classes-action"

export interface ClassesState {
}

const initialState: ClassesState = {
}

export const classesReducer = (state: ClassesState = initialState, action: ClassesAction): ClassesState => {
  switch(action.type) {
    default: {
      return state;
    }
  }
}