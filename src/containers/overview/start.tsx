import React from "react";
import * as Bulma from "react-bulma-ts";
import { connect } from "react-redux";
import { StartState } from "../../reducers/overview/start-reducer";
import { StartActionDispatcher } from "../../actions/overview/start-action";
import Highlight from "react-highlight.js";
const bash = require("highlight.js/lib/languages/bash");
const typescript = require("highlight.js/lib/languages/typescript");

interface StartProps {
  actions?: StartActionDispatcher;
}

@(connect(
  (state: {
    overviewReducer: StartState;
  }): StartProps => ({
    ...state.overviewReducer,
  }),
  (dispatch) => ({ actions: new StartActionDispatcher(dispatch) })
) as any)
export default class Start extends React.Component<StartProps> {
  render() {
    return <div>
      <Bulma.Title titleType={Bulma.TitleType.Heading} level={3}>
        Getting started
      </Bulma.Title>
      <Bulma.Subtitle titleType={Bulma.TitleType.Heading} level={5}>
        You only need 2 imports to use React Bulma TS
      </Bulma.Subtitle>
      <hr />
      <Bulma.Content>
        <p>
          There are two ways to <strong>get started</strong> with React Bulma TS. You can either:
        </p>
        <ol>
          <li>use <strong>yarn</strong> to install the React Bulma TS package</li>
          <li>use <strong>npm</strong> to install the React Bulma TS package</li>
          <li>use the <strong>GitHub repository</strong> to get the latest development version</li>
        </ol>
        <Bulma.Media>
          <Bulma.MediaLeft>
            <Bulma.Title titleType={Bulma.TitleType.Paragraph} level={5}>1</Bulma.Title>
          </Bulma.MediaLeft>
          <Bulma.MediaContent>
            <Bulma.Title titleType={Bulma.TitleType.Paragraph} level={5}>Use <strong>Yarn</strong><em>(recommended)</em></Bulma.Title>
            <Highlight language={bash}>
              yarn add react-bulma-ts
            </Highlight>
          </Bulma.MediaContent>
        </Bulma.Media>
        <Bulma.Media>
          <Bulma.MediaLeft>
            <Bulma.Title titleType={Bulma.TitleType.Paragraph} level={5}>2</Bulma.Title>
          </Bulma.MediaLeft>
          <Bulma.MediaContent>
            <Bulma.Title titleType={Bulma.TitleType.Paragraph} level={5}>Use <strong>NPM</strong></Bulma.Title>
            <Highlight language={bash}>
              npm install react-bulma-ts
            </Highlight>
          </Bulma.MediaContent>
        </Bulma.Media>
        <Bulma.Message options={[Bulma.Color.Info]}>
          <Bulma.MessageHeader>Font Awesome icons</Bulma.MessageHeader>
          <Bulma.MessageBody>
            <p>
              If you want to use icons with Bulma, don't forget to import <a href="https://fontawesome.com/how-to-use/on-the-web/using-with/react">React Font Awesome</a>
            </p>
            <Highlight language={bash}>
                yarn add @fortawesome/fontawesome-svg-core<br />
                yarn add @fortawesome/free-solid-svg-icons<br />
                yarn add @fortawesome/react-fontawesome<br />
            </Highlight>
          </Bulma.MessageBody>
        </Bulma.Message>
        <hr />
        <Bulma.Title titleType={Bulma.TitleType.Heading} level={4}>
          Starter template
        </Bulma.Title>
        <Bulma.Content>
          <p>
            If you want to get started <strong>right away</strong> you can use this <strong>TSX starter template</strong> Just copy/paste this code in a file and save it on your computer
          </p>
          <Highlight language={typescript}>
{`
import React from 'react';
import * as Bulma from "react-bulma-ts";

interface SampleProps {

}

export default class Sample extends React.Component<SampleProps> {
  render () {
    return <Bulma.Section>
      <Bulma.Container>
        <Bulma.Title titleType={Bulma.TitleType.Heading} level={1}>
          Hello World
        </Bulma.Title>
        <Bulma.Subtitle titleType={Bulma.TitleType.Paragraph} level={3}>
          My first website with <strong>React Bulma TS</strong>!
        </Bulma.Subtitle>
      </Bulma.Container>
    </Bulma.Section>;
  }
}
`}
          </Highlight>
        </Bulma.Content>
      </Bulma.Content>
    </div>;
  }
}
