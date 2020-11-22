import { Action, ActionDispatcher } from "..";

export enum TypographyHelpersActionTypes {
}

export interface TypographyHelpersAction extends Action<TypographyHelpersActionTypes> {
  data: any;
}

export class TypographyHelpersActionDispatcher extends ActionDispatcher<TypographyHelpersActionTypes> {
}