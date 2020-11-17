import { Action, ActionDispatcher } from ".";

export enum OverviewActionTypes {
}

export interface OverviewAction extends Action<OverviewActionTypes> {
  data: any;
}

export class OverviewActionDispatcher extends ActionDispatcher<OverviewActionTypes> {
}