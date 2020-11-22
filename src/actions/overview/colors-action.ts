import { Action, ActionDispatcher } from "..";

export enum ColorsActionTypes {
}

export interface ColorsAction extends Action<ColorsActionTypes> {
  data: any;
}

export class ColorsActionDispatcher extends ActionDispatcher<ColorsActionTypes> {
}