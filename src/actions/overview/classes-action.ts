import { Action, ActionDispatcher } from "..";

export enum ClassesActionTypes {
}

export interface ClassesAction extends Action<ClassesActionTypes> {
  data: any;
}

export class ClassesActionDispatcher extends ActionDispatcher<ClassesActionTypes> {
}