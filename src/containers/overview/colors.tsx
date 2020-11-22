import React from "react";
import * as Bulma from "react-bulma-ts";
import { connect } from "react-redux";
import { ColorsState } from "../../reducers/overview-reducer/colors-reducer";
import { ColorsActionDispatcher } from "../../actions/overview/colors-action";
import Highlight from "react-highlight.js";
const bash = require("highlight.js/lib/languages/bash");
const typescript = require("highlight.js/lib/languages/typescript");

interface ColorsProps {
  actions?: ColorsActionDispatcher;
}

@(connect(
  (state: {
    overviewReducer: ColorsState;
  }): ColorsProps => ({
    ...state.overviewReducer,
  }),
  (dispatch) => ({ actions: new ColorsActionDispatcher(dispatch) })
) as any)
export default class Colors extends React.Component<ColorsProps> {
  render() {
    return <div>
    <Bulma.Title titleType={Bulma.TitleType.Heading} level={3}>Colors</Bulma.Title>
    <Bulma.Subtitle titleType={Bulma.TitleType.Heading} level={5}>The <strong>colors</strong> that <strong>style</strong> most Bulma elements and components</Bulma.Subtitle>
    <hr />
    <Bulma.Content>
      <p>
        Most elements and components have color variations thanks to <strong>modifiers</strong> with syntax <code>Bulma.Color</code>, like <code>Bulma.Color.Primary</code> or <code>Bulma.Color.Dark</code>.
      </p>
      {/* <p>
        This is thanks to the <code>$colors</code> <strong>Sass map</strong>, through which Bulma cycles to grab all the colors and their inverts.
      </p> */}
    </Bulma.Content>
    <Bulma.Table>
      <Bulma.TableHeader>
        <Bulma.TableRow>
          <Bulma.TableHeaderCell>Color</Bulma.TableHeaderCell>
          {/* <Bulma.TableHeaderCell>Variable</Bulma.TableHeaderCell> */}
          {/* <Bulma.TableHeaderCell>Value</Bulma.TableHeaderCell> */}
          <Bulma.TableHeaderCell>Computed value</Bulma.TableHeaderCell>
          {/* <Bulma.TableHeaderCell>Invert value</Bulma.TableHeaderCell> */}
          {/* <Bulma.TableHeaderCell>Computed invert value</Bulma.TableHeaderCell> */}
        </Bulma.TableRow>
      </Bulma.TableHeader>
      <Bulma.TableBody>
        <Bulma.TableRow>
          <Bulma.TableCell>
            <strong>White</strong>
          </Bulma.TableCell>
          {/* <Bulma.TableCell>
            <code>$white</code>
          </Bulma.TableCell>
          <Bulma.TableCell>
            <code>$white</code>
          </Bulma.TableCell> */}
          <Bulma.TableCell>
            <span className="bd-color" style={{background: 'hsl(0, 0%, 100%)'}}></span>
            <code>hsl(0, 0%, 100%)</code>
          </Bulma.TableCell>
          {/* <Bulma.TableCell>
            <code>$black</code>
          </Bulma.TableCell>
          <Bulma.TableCell>
            <span className="bd-color" style={{background: 'hsl(0, 0%, 4%)'}}></span>
            <code>hsl(0, 0%, 4%)</code>
          </Bulma.TableCell> */}
        </Bulma.TableRow>
        <Bulma.TableRow>
          <Bulma.TableCell>
            <strong>Black</strong>
          </Bulma.TableCell>
          {/* <Bulma.TableCell>
            <code>$black</code>
          </Bulma.TableCell>
          <Bulma.TableCell>
            <code>$black</code>
          </Bulma.TableCell> */}
          <Bulma.TableCell>
            <span className="bd-color" style={{background: 'hsl(0, 0%, 4%)'}}></span>
            <code>hsl(0, 0%, 4%)</code>
          </Bulma.TableCell>
          {/* <Bulma.TableCell>
            <code>$white</code>
          </Bulma.TableCell>
          <Bulma.TableCell>
            <span className="bd-color" style={{background: 'hsl(0, 0%, 100%)'}}></span>
            <code>hsl(0, 0%, 100%)</code>
          </Bulma.TableCell> */}
        </Bulma.TableRow>
        <Bulma.TableRow>
          <Bulma.TableCell>
            <strong>Light</strong>
          </Bulma.TableCell>
          {/* <Bulma.TableCell>
            <code>$light</code>
          </Bulma.TableCell>
          <Bulma.TableCell>
            <code>$white-ter</code>
          </Bulma.TableCell> */}
          <Bulma.TableCell>
            <span className="bd-color" style={{background: 'hsl(0, 0%, 96%)'}}></span>
            <code>hsl(0, 0%, 96%)</code>
          </Bulma.TableCell>
          {/* <Bulma.TableCell>
            <code>$grey-darker</code>
          </Bulma.TableCell>
          <Bulma.TableCell>
            <span className="bd-color" style={{background: 'hsl(0, 0%, 21%)'}}></span>
            <code>hsl(0, 0%, 21%)</code>
          </Bulma.TableCell> */}
        </Bulma.TableRow>
        <Bulma.TableRow>
          <Bulma.TableCell>
            <strong>Dark</strong>
          </Bulma.TableCell>
          {/* <Bulma.TableCell>
            <code>$dark</code>
          </Bulma.TableCell>
          <Bulma.TableCell>
            <code>$grey-darker</code>
          </Bulma.TableCell> */}
          <Bulma.TableCell>
            <span className="bd-color" style={{background: 'hsl(0, 0%, 21%)'}}></span>
            <code>hsl(0, 0%, 21%)</code>
          </Bulma.TableCell>
          {/* <Bulma.TableCell>
            <code>$white-ter</code>
          </Bulma.TableCell>
          <Bulma.TableCell>
            <span className="bd-color" style={{background: 'hsl(0, 0%, 96%);'}}></span>
            <code>hsl(0, 0%, 96%)</code>
          </Bulma.TableCell> */}
        </Bulma.TableRow>
        <Bulma.TableRow>
          <Bulma.TableCell>
            <strong>Primary</strong>
          </Bulma.TableCell>
          {/* <Bulma.TableCell>
            <code>$primary</code>
          </Bulma.TableCell>
          <Bulma.TableCell>
            <code>$turquoise</code>
          </Bulma.TableCell> */}
          <Bulma.TableCell>
            <span className="bd-color" style={{background: 'hsl(171, 100%, 41%)'}}></span>
            <code>hsl(171, 100%, 41%)</code>
          </Bulma.TableCell>
          {/* <Bulma.TableCell>
            <code>#fff</code>
          </Bulma.TableCell>
          <Bulma.TableCell>
            <span className="bd-color" style={{background: '#fff'}}></span>
            <code>#fff</code>
          </Bulma.TableCell> */}
        </Bulma.TableRow>
        <Bulma.TableRow>
          <Bulma.TableCell>
            <strong>Link</strong>
          </Bulma.TableCell>
          {/* <Bulma.TableCell>
            <code>$link</code>
          </Bulma.TableCell>
          <Bulma.TableCell>
            <code>$blue</code>
          </Bulma.TableCell> */}
          <Bulma.TableCell>
            <span className="bd-color" style={{background: 'hsl(217, 71%, 53%)'}}></span>
            <code>hsl(217, 71%, 53%)</code>
          </Bulma.TableCell>
          {/* <Bulma.TableCell>
            <code>#fff</code>
          </Bulma.TableCell>
          <Bulma.TableCell>
            <span className="bd-color" style={{background: '#fff'}}></span>
            <code>#fff</code>
          </Bulma.TableCell> */}
        </Bulma.TableRow>
        <Bulma.TableRow>
          <Bulma.TableCell>
            <strong>Info</strong>
          </Bulma.TableCell>
          {/* <Bulma.TableCell>
            <code>$info</code>
          </Bulma.TableCell>
          <Bulma.TableCell>
            <code>$cyan</code>
          </Bulma.TableCell> */}
          <Bulma.TableCell>
            <span className="bd-color" style={{background: 'hsl(204, 86%, 53%)'}}></span>
            <code>hsl(204, 86%, 53%)</code>
          </Bulma.TableCell>
          {/* <Bulma.TableCell>
            <code>#fff</code>
          </Bulma.TableCell>
          <Bulma.TableCell>
            <span className="bd-color" style={{background: '#fff'}}></span>
            <code>#fff</code>
          </Bulma.TableCell> */}
        </Bulma.TableRow>
        <Bulma.TableRow>
          <Bulma.TableCell>
            <strong>Success</strong>
          </Bulma.TableCell>
          {/* <Bulma.TableCell>
            <code>$success</code>
          </Bulma.TableCell>
          <Bulma.TableCell>
            <code>$green</code>
          </Bulma.TableCell> */}
          <Bulma.TableCell>
            <span className="bd-color" style={{background: 'hsl(141, 71%, 48%)'}}></span>
            <code>hsl(141, 71%, 48%)</code>
          </Bulma.TableCell>
          {/* <Bulma.TableCell>
            <code>#fff</code>
          </Bulma.TableCell>
          <Bulma.TableCell>
            <span className="bd-color" style={{background: '#fff'}}></span>
            <code>#fff</code>
          </Bulma.TableCell> */}
        </Bulma.TableRow>
        <Bulma.TableRow>
          <Bulma.TableCell>
            <strong>Warning</strong>
          </Bulma.TableCell>
          {/* <Bulma.TableCell>
            <code>$warning</code>
          </Bulma.TableCell>
          <Bulma.TableCell>
            <code>$yellow</code>
          </Bulma.TableCell> */}
          <Bulma.TableCell>
            <span className="bd-color" style={{background: 'hsl(48, 100%, 67%)'}}></span>
            <code>hsl(48, 100%, 67%)</code>
          </Bulma.TableCell>
          {/* <Bulma.TableCell>
            <code>rgba(0, 0, 0, 0.7)</code>
          </Bulma.TableCell>
          <Bulma.TableCell>
            <span className="bd-color" style={{background: 'rgba(0, 0, 0, 0.7)'}}></span>
            <code>rgba(0, 0, 0, 0.7)</code>
          </Bulma.TableCell> */}
        </Bulma.TableRow>
        <Bulma.TableRow>
          <Bulma.TableCell>
            <strong>Danger</strong>
          </Bulma.TableCell>
          {/* <Bulma.TableCell>
            <code>$danger</code>
          </Bulma.TableCell>
          <Bulma.TableCell>
            <code>$red</code>
          </Bulma.TableCell> */}
          <Bulma.TableCell>
            <span className="bd-color" style={{background: 'hsl(348, 100%, 61%)'}}></span>
            <code>hsl(348, 100%, 61%)</code>
          </Bulma.TableCell>
          {/* <Bulma.TableCell>
            <code>#fff</code>
          </Bulma.TableCell>
          <Bulma.TableCell>
            <span className="bd-color" style={{background: '#fff'}}></span>
            <code>#fff</code>
          </Bulma.TableCell> */}
        </Bulma.TableRow>
      </Bulma.TableBody>
    </Bulma.Table>
  </div>;
  }
}
