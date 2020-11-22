import { Action, ActionDispatcher } from "..";

export enum ResponsiveHelpersActionTypes {
}

export interface ResponsiveHelpersAction extends Action<ResponsiveHelpersActionTypes> {
  data: any;
}

export class ResponsiveHelpersActionDispatcher extends ActionDispatcher<ResponsiveHelpersActionTypes> {
}