import { Action, ActionDispatcher } from "..";

export enum ContentActionTypes {
}

export interface ContentAction extends Action<ContentActionTypes> {
  data: any;
}

export class ContentActionDispatcher extends ActionDispatcher<ContentActionTypes> {
}