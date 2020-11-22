import React from "react";
import * as Bulma from "react-bulma-ts";
import { connect } from "react-redux";
import { HelpersState } from "../../reducers/modifiers-reducer/helpers-reducer";
import { HelpersActionDispatcher } from "../../actions/modifiers/helpers-action";
import Highlight from "react-highlight.js";
const bash = require("highlight.js/lib/languages/bash");
const typescript = require("highlight.js/lib/languages/typescript");

interface HelpersProps {
  actions?: HelpersActionDispatcher;
}

@(connect(
  (state: {
    modifiersReducer: HelpersState;
  }): HelpersProps => ({
    ...state.modifiersReducer,
  }),
  (dispatch) => ({ actions: new HelpersActionDispatcher(dispatch) })
) as any)
export default class Helpers extends React.Component<HelpersProps> {
  render() {
    return <div>
      <Bulma.Title titleType={Bulma.TitleType.Heading} level={3}>
        Helpers
      </Bulma.Title>
      <Bulma.Subtitle titleType={Bulma.TitleType.Heading} level={5}>
      You can apply <strong>responsive helper classes</strong> to almost any element, in order to alter its style based upon the browser's width.
      </Bulma.Subtitle>
      <hr />
      <Bulma.Table options={[Bulma.TableModifiers.Bordered]}>
        <Bulma.TableBody>
          <Bulma.TableRow>
            <Bulma.TableHeaderCell rowspan="3">Float</Bulma.TableHeaderCell>
            <Bulma.TableCell><code>Bulma.Helpers.Float.ClearFix</code></Bulma.TableCell>
            <Bulma.TableCell>Fixes an element's floating children</Bulma.TableCell>
          </Bulma.TableRow>
          <Bulma.TableRow>
            <Bulma.TableCell><code>Bulma.Helpers.Float.PulledLeft</code></Bulma.TableCell>
            <Bulma.TableCell>Moves an element to the left</Bulma.TableCell>
          </Bulma.TableRow>
          <Bulma.TableRow>
            <Bulma.TableCell><code>Bulma.Helpers.Float.PulledRight</code></Bulma.TableCell>
            <Bulma.TableCell>Moves an element to the right</Bulma.TableCell>
          </Bulma.TableRow>
          <Bulma.TableRow>
            <Bulma.TableHeaderCell rowspan="2">Spacing</Bulma.TableHeaderCell>
            <Bulma.TableCell><code>Bulma.Helpers.Spacing.MarginLess</code></Bulma.TableCell>
            <Bulma.TableCell>Removes any <strong>margin</strong></Bulma.TableCell>
          </Bulma.TableRow>
          <Bulma.TableRow>
            <Bulma.TableCell><code>Bulma.Helpers.Spacing.PaddingLess</code></Bulma.TableCell>
            <Bulma.TableCell>Removes any <strong>padding</strong></Bulma.TableCell>
          </Bulma.TableRow>
          <Bulma.TableRow>
            <Bulma.TableHeaderCell rowspan="6">Other</Bulma.TableHeaderCell>
            <Bulma.TableCell><code>Bulma.Helpers.Other.Overlay</code></Bulma.TableCell>
            <Bulma.TableCell>Completely covers the first positioned parent</Bulma.TableCell>
          </Bulma.TableRow>
            <Bulma.TableRow><Bulma.TableCell><code>Bulma.Helpers.Other.Clipped</code></Bulma.TableCell>
            <Bulma.TableCell>Adds overflow <strong>hidden</strong></Bulma.TableCell>
          </Bulma.TableRow>
          <Bulma.TableRow>
            <Bulma.TableCell><code>Bulma.Helpers.Other.RadiusLess</code></Bulma.TableCell>
            <Bulma.TableCell>Removes any <strong>radius</strong></Bulma.TableCell>
          </Bulma.TableRow>
          <Bulma.TableRow>
            <Bulma.TableCell><code>Bulma.Helpers.Other.ShadowLess</code></Bulma.TableCell>
            <Bulma.TableCell>Removes any <strong>shadow</strong></Bulma.TableCell>
          </Bulma.TableRow>
          <Bulma.TableRow>
            <Bulma.TableCell><code>Bulma.Helpers.Other.UnSelectable</code></Bulma.TableCell>
            <Bulma.TableCell>Prevents the text from being <strong>selectable</strong></Bulma.TableCell>
          </Bulma.TableRow>
          <Bulma.TableRow>
            <Bulma.TableCell><code>Bulma.Helpers.Other.Invisible</code></Bulma.TableCell>
            <Bulma.TableCell>Adds visibility <strong>hidden</strong></Bulma.TableCell>
          </Bulma.TableRow>
        </Bulma.TableBody>
      </Bulma.Table>
    </div>;
  }
}
