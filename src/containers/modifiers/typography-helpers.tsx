import React from "react";
import * as Bulma from "react-bulma-ts";
import { connect } from "react-redux";
import { TypographyHelpersState } from "../../reducers/modifiers-reducer/typography-helpers-reducer";
import { TypographyHelpersActionDispatcher } from "../../actions/modifiers/typography-helpers-action";
import Highlight from "react-highlight.js";
const bash = require("highlight.js/lib/languages/bash");
const typescript = require("highlight.js/lib/languages/typescript");

interface TypographyHelpersProps {
  actions?: TypographyHelpersActionDispatcher;
}

@(connect(
  (state: {
    modifiersReducer: TypographyHelpersState;
  }): TypographyHelpersProps => ({
    ...state.modifiersReducer,
  }),
  (dispatch) => ({ actions: new TypographyHelpersActionDispatcher(dispatch) })
) as any)
export default class TypographyHelpers extends React.Component<TypographyHelpersProps> {
  render() {
    return <div>
      <Bulma.Title titleType={Bulma.TitleType.Heading} level={3}>
        TypographyHelpers
      </Bulma.Title>
      <Bulma.Subtitle titleType={Bulma.TitleType.Heading} level={5}>
        Change the <strong>size</strong> and <strong>color</strong> of the text for one or multiple viewport width
      </Bulma.Subtitle>
      <hr />
    </div>;
  }
}
