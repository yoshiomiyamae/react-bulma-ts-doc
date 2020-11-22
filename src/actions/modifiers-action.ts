import { Action, ActionDispatcher } from ".";

export enum ModifiersActionTypes {
}

export interface ModifiersAction extends Action<ModifiersActionTypes> {
  data: any;
}

export class ModifiersActionDispatcher extends ActionDispatcher<ModifiersActionTypes> {
}