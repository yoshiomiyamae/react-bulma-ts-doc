import { Action, ActionDispatcher } from "..";

export enum HelpersActionTypes {
}

export interface HelpersAction extends Action<HelpersActionTypes> {
  data: any;
}

export class HelpersActionDispatcher extends ActionDispatcher<HelpersActionTypes> {
}