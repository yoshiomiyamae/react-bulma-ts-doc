import { Action, ActionDispatcher } from "..";

export enum StartActionTypes {
}

export interface StartAction extends Action<StartActionTypes> {
  data: any;
}

export class StartActionDispatcher extends ActionDispatcher<StartActionTypes> {
}