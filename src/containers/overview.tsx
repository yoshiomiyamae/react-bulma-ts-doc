import React from "react";
import * as Bulma from "react-bulma-ts";
import { connect } from "react-redux";
import { OverviewState } from "../reducers/overview-reducer";
import { OverviewActionDispatcher } from "../actions/overview-action";
import { Route, Switch } from "react-router-dom";
import Start from "./overview/start";
import Classes from "./overview/classes";
import Responsiveness from "./overview/responsiveness";


interface OverviewProps {
  actions?: OverviewActionDispatcher;
}

@(connect(
  (state: {
    overviewReducer: OverviewState;
  }): OverviewProps => ({
    ...state.overviewReducer,
  }),
  (dispatch) => ({ actions: new OverviewActionDispatcher(dispatch) })
) as any)
export default class Overview extends React.Component<OverviewProps> {
  render() {
    return [
      <Bulma.Container>
        <Bulma.Tabs>
          <Bulma.Tab
            options={[document.location.pathname.startsWith('/react-bulma-ts/overview/start') ? Bulma.State.Active : null]}
            href="/react-bulma-ts/overview/start"
            >
            Start
          </Bulma.Tab>
          {/* <Bulma.Tab
            options={[document.location.pathname.startsWith('/react-bulma-ts/overview/customize') ? Bulma.State.Active : null]}
            href="/react-bulma-ts/overview/customize"
            >
            Customize
          </Bulma.Tab> */}
          <Bulma.Tab
            options={[document.location.pathname.startsWith('/react-bulma-ts/overview/classes') ? Bulma.State.Active : null]}
            href="/react-bulma-ts/overview/classes"
            >
            Classes
          </Bulma.Tab>
          {/* <Bulma.Tab
            options={[document.location.pathname.startsWith('/react-bulma-ts/overview/modular') ? Bulma.State.Active : null]}
            href="/react-bulma-ts/overview/modular"
            >
            Modular
          </Bulma.Tab> */}
          <Bulma.Tab
            options={[document.location.pathname.startsWith('/react-bulma-ts/overview/responsiveness') ? Bulma.State.Active : null]}
            href="/react-bulma-ts/overview/responsiveness"
            >
            Responsiveness
          </Bulma.Tab>
          <Bulma.Tab
            options={[document.location.pathname.startsWith('/react-bulma-ts/overview/variables') ? Bulma.State.Active : null]}
            href="/react-bulma-ts/overview/variables"
            >
            Variables
          </Bulma.Tab>
          <Bulma.Tab
            options={[document.location.pathname.startsWith('/react-bulma-ts/overview/colors') ? Bulma.State.Active : null]}
            href="/react-bulma-ts/overview/colors"
            >
            Colors
          </Bulma.Tab>
          <Bulma.Tab
            options={[document.location.pathname.startsWith('/react-bulma-ts/overview/functions') ? Bulma.State.Active : null]}
            href="/react-bulma-ts/overview/functions"
            >
            Functions
          </Bulma.Tab>
          <Bulma.Tab
            options={[document.location.pathname.startsWith('/react-bulma-ts/overview/mixins') ? Bulma.State.Active : null]}
            href="/react-bulma-ts/overview/mixins"
            >
            Mixins
          </Bulma.Tab>
        </Bulma.Tabs>
        <Switch>
          <Route path="/react-bulma-ts/overview/start" exact={false} component={Start} />
          {/* <Route path="/react-bulma-ts/overview/customize" exact={false} render={() =><div></div>} /> */}
          <Route path="/react-bulma-ts/overview/classes" exact={false} component={Classes}  />
          {/* <Route path="/react-bulma-ts/overview/modular" exact={false} render={() =><div></div>} /> */}
          <Route path="/react-bulma-ts/overview/responsiveness" exact={false} component={Responsiveness} />
          <Route path="/react-bulma-ts/overview/variables" exact={false} render={() =><div></div>} />
          <Route path="/react-bulma-ts/overview/colors" exact={false} render={() =><div></div>} />
          <Route path="/react-bulma-ts/overview/functions" exact={false} render={() =><div></div>} />
        </Switch>
      </Bulma.Container>
    ];
  }
}
