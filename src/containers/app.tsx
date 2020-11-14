import React from "react";
import * as Bulma from 'react-bulma-ts';
import { Switch, Route, Redirect, Link } from "react-router-dom";
import Navigation from "./navigation";
import "react-bulma-ts/dist/main.css";
import { connect } from "react-redux";
import Overview from "./overview";
import "highlight.js/styles/vs.css";

interface AppProps {
}

@(connect(
  (() => {}),
  (dispatch) => ({})
) as any)
export default class App extends React.Component<AppProps> {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path="/react-bulma-ts/overview" exact={false} component={Overview} />
          <Route path="/react-bulma-ts/modifiers" exact={false} render={() =><div></div>} />
        </Switch>
        <Bulma.Section>
          <Bulma.Container>
            <p className="has-text-centered has-text-gray-light">
              This page is <strong className="has-text-gray">open source</strong> Noticed a typo? Or something unclear? <a className="has-text-gray" href="https://github.com/yoshiomiyamae/react-bulma-ts-doc">Improve this page on GitHub</a>
            </p>
          </Bulma.Container>
        </Bulma.Section>
        <Bulma.Footer>
          <Bulma.Container>
            <Bulma.Columns>
              <Bulma.Column options={[Bulma.ColumnSize.Three]}>
                <Bulma.Content>
                  <strong>Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a><br />
                  <strong>React Bulma TS</strong> by <a href="http://github.com/yoshiomiyamae">Yoshio Miyamae</a>
                  <p><a href="https://bulma.io/alternative-to-bootstrap/">An alternative to Bootstrap</a></p>
                  <p>
                    Source code licensed <a href="https://opensource.org/licenses/mit-license.php">MIT</a><br />
                    Website content licensed <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>
                  </p>
                </Bulma.Content>
              </Bulma.Column>
            </Bulma.Columns>
          </Bulma.Container>
        </Bulma.Footer>
      </div>
    );
  }
}
