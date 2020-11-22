import { Action, ActionDispatcher } from "..";

export enum SyntaxActionTypes {
}

export interface SyntaxAction extends Action<SyntaxActionTypes> {
  data: any;
}

export class SyntaxActionDispatcher extends ActionDispatcher<SyntaxActionTypes> {
}