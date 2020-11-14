import React from "react";
import * as Bulma from "react-bulma-ts";
import { connect } from "react-redux";
import { OverviewState } from "../reducers/overview-reducer";
import { OverviewActionDispatcher } from "../actions/overview-action";
import { Dispatch } from "redux";
import { OverviewMenu } from "../models/overview-model";
import { Route, Switch } from "react-router-dom";
import Start from "./overview/start";


interface OverviewProps {
  selectedMenu?: OverviewMenu;
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
            options={[this.props.selectedMenu === OverviewMenu.Start ? Bulma.State.Active : null]}
            // onClick={() => this.props.actions?.setMenu(OverviewMenu.Start)}
            href="/react-bulma-ts/overview/start"
            >
            Start
          </Bulma.Tab>
          <Bulma.Tab
            options={[this.props.selectedMenu === OverviewMenu.Customize ? Bulma.State.Active : null]}
            onClick={() => this.props.actions?.setMenu(OverviewMenu.Customize)}
            >
            Customize
          </Bulma.Tab>
          <Bulma.Tab
            options={[this.props.selectedMenu === OverviewMenu.Classes ? Bulma.State.Active : null]}
            onClick={() => this.props.actions?.setMenu(OverviewMenu.Classes)}
            >
            Classes
          </Bulma.Tab>
          <Bulma.Tab
            options={[this.props.selectedMenu === OverviewMenu.Modular ? Bulma.State.Active : null]}
            onClick={() => this.props.actions?.setMenu(OverviewMenu.Modular)}
            >
            Modular
          </Bulma.Tab>
          <Bulma.Tab
            options={[this.props.selectedMenu === OverviewMenu.Responsiveness ? Bulma.State.Active : null]}
            onClick={() => this.props.actions?.setMenu(OverviewMenu.Responsiveness)}
            >
            Responsiveness
          </Bulma.Tab>
          <Bulma.Tab
            options={[this.props.selectedMenu === OverviewMenu.Variables ? Bulma.State.Active : null]}
            onClick={() => this.props.actions?.setMenu(OverviewMenu.Variables)}
            >
            Variables
          </Bulma.Tab>
          <Bulma.Tab
            options={[this.props.selectedMenu === OverviewMenu.Colors ? Bulma.State.Active : null]}
            onClick={() => this.props.actions?.setMenu(OverviewMenu.Colors)}
            >
            Colors
          </Bulma.Tab>
          <Bulma.Tab
            options={[this.props.selectedMenu === OverviewMenu.Functions ? Bulma.State.Active : null]}
            onClick={() => this.props.actions?.setMenu(OverviewMenu.Functions)}
            >
            Functions
          </Bulma.Tab>
          <Bulma.Tab
            options={[this.props.selectedMenu === OverviewMenu.Mixins ? Bulma.State.Active : null]}
            onClick={() => this.props.actions?.setMenu(OverviewMenu.Mixins)}
            >
            Mixins
          </Bulma.Tab>
        </Bulma.Tabs>
        <Switch>
          <Route path="/react-bulma-ts/overview/start" exact={false} component={Start} />
          <Route path="/react-bulma-ts/modifiers" exact={false} render={() =><div></div>} />
        </Switch>
      </Bulma.Container>
    ];
  }
}
