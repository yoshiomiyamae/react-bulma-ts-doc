import { Action, ActionDispatcher } from "..";

export enum ResponsivenessActionTypes {
}

export interface ResponsivenessAction extends Action<ResponsivenessActionTypes> {
  data: any;
}

export class ResponsivenessActionDispatcher extends ActionDispatcher<ResponsivenessActionTypes> {
}