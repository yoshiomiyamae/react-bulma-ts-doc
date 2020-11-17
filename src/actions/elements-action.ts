import { Action, ActionDispatcher } from ".";

export enum ElementsActionTypes {
}

export interface ElementsAction extends Action<ElementsActionTypes> {
  data: any;
}

export class ElementsActionDispatcher extends ActionDispatcher<ElementsActionTypes> {
}