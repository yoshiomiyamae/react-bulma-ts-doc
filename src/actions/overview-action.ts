import { Action, ActionDispatcher } from ".";
import { OverviewMenu } from "../models/overview-model";

export enum OverviewActionTypes {
  setMenu = "overview-set-menu",
}

export interface OverviewAction extends Action<OverviewActionTypes> {
  data: any;
}

export class OverviewActionDispatcher extends ActionDispatcher<OverviewActionTypes> {
  setMenu = this.dispatcher((menu: OverviewMenu): OverviewAction => ({
    type: OverviewActionTypes.setMenu,
    data: menu,
  }));
}