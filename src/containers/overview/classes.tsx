import React from "react";
import * as Bulma from "react-bulma-ts";
import { connect } from "react-redux";
import { ClassesState } from "../../reducers/overview/classes-reducer";
import { ClassesActionDispatcher } from "../../actions/overview/classes-action";
import Highlight from "react-highlight.js";
const bash = require("highlight.js/lib/languages/bash");
const typescript = require("highlight.js/lib/languages/typescript");

interface ClassesProps {
  actions?: ClassesActionDispatcher;
}

@(connect(
  (state: {
    overviewReducer: ClassesState;
  }): ClassesProps => ({
    ...state.overviewReducer,
  }),
  (dispatch) => ({ actions: new ClassesActionDispatcher(dispatch) })
) as any)
export default class Classes extends React.Component<ClassesProps> {
  render() {
    return <div>
      <Bulma.Title titleType={Bulma.TitleType.Heading} level={3}>
        Classes
      </Bulma.Title>
      <Bulma.Subtitle titleType={Bulma.TitleType.Heading} level={5}>
        Bulma is simply a <strong>collection</strong> of CSS classes. Write the HTML code you want.
      </Bulma.Subtitle>
      <hr />
      <Bulma.Content>
        <p>
          Bulma is a <strong>CSS</strong> framework, meaning that the end result is simply a <strong>single</strong><code>.css</code> file:<br />
          <a href="https://github.com/jgthms/bulma/blob/master/css/bulma.css">https://github.com/jgthms/bulma/blob/master/css/bulma.css</a>
        </p>
        <p>
          Because Bulma solely comprises CSS classes, the HTML code you write has <strong>no impact</strong> on the styling of your page. That's why <code>.input</code> exists as a class, so you can choose which <code>{`<input type="text">`}</code> elements you want to style.
        </p>
        <p>
          Bulma only styles <strong>generic</strong> tags directly <strong>twice</strong>:
        </p>
        <ul>
          <li><code>generic.sass</code> to define a basic style for your page</li>
          <li>the <a href="/react-bluma-ts/elements/content"><code>.content</code> class</a> to use for <em>any</em> textual content, like WYSIWYG</li>
        </ul>
      </Bulma.Content>
    </div>;
  }
}
