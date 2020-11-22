import React from "react";
import * as Bulma from "react-bulma-ts";
import { connect } from "react-redux";
import { ResponsiveHelpersState } from "../../reducers/modifiers-reducer/responsive-helpers-reducer";
import { ResponsiveHelpersActionDispatcher } from "../../actions/modifiers/responsive-helpers-action";
import Highlight from "react-highlight.js";
const bash = require("highlight.js/lib/languages/bash");
const typescript = require("highlight.js/lib/languages/typescript");

interface ResponsiveHelpersProps {
  actions?: ResponsiveHelpersActionDispatcher;
}

@(connect(
  (state: {
    modifiersReducer: ResponsiveHelpersState;
  }): ResponsiveHelpersProps => ({
    ...state.modifiersReducer,
  }),
  (dispatch) => ({ actions: new ResponsiveHelpersActionDispatcher(dispatch) })
) as any)
export default class ResponsiveHelpers extends React.Component<ResponsiveHelpersProps> {
  render() {
    return <div>
      <Bulma.Title titleType={Bulma.TitleType.Heading} level={3}>
        ResponsiveHelpers
      </Bulma.Title>
      <Bulma.Subtitle titleType={Bulma.TitleType.Heading} level={5}>
        <strong>Show/hide content</strong> depending on the width of the viewport
      </Bulma.Subtitle>
      <hr />
    </div>;
  }
}
