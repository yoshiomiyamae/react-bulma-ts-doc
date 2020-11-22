import React from "react";
import * as Bulma from "react-bulma-ts";
import { connect } from "react-redux";
import { ModifiersState } from "../reducers/modifiers-reducer";
import { ModifiersActionDispatcher } from "../actions/modifiers-action";
import { Route, Switch } from "react-router-dom";
import Syntax from "./modifiers/syntax";
import Helpers from "./modifiers/helpers";
import ResponsiveHelpers from "./modifiers/responsive-helpers";
import TypographyHelpers from "./modifiers/typography-helpers";


interface ModifiersProps {
  actions?: ModifiersActionDispatcher;
}

@(connect(
  (state: {
    modifiersReducer: ModifiersState;
  }): ModifiersProps => ({
    ...state.modifiersReducer,
  }),
  (dispatch) => ({ actions: new ModifiersActionDispatcher(dispatch) })
) as any)
export default class Modifiers extends React.Component<ModifiersProps> {
  render() {
    return [
      <Bulma.Container>
        <Bulma.Tabs>
          <Bulma.Tab
            options={[document.location.pathname.startsWith('/react-bulma-ts/modifiers/syntax') ? Bulma.State.Active : null]}
            href="/react-bulma-ts/modifiers/syntax"
            >
            Syntax
          </Bulma.Tab>
          <Bulma.Tab
            options={[document.location.pathname.startsWith('/react-bulma-ts/modifiers/helpers') ? Bulma.State.Active : null]}
            href="/react-bulma-ts/modifiers/helpers"
            >
            Helpers
          </Bulma.Tab>
          <Bulma.Tab
            options={[document.location.pathname.startsWith('/react-bulma-ts/modifiers/responsive-helpers') ? Bulma.State.Active : null]}
            href="/react-bulma-ts/modifiers/responsive-helpers"
            >
            Responsive helpers
          </Bulma.Tab>
          <Bulma.Tab
            options={[document.location.pathname.startsWith('/react-bulma-ts/modifiers/typograhy-helpers') ? Bulma.State.Active : null]}
            href="/react-bulma-ts/modifiers/typograhy-helpers"
            >
            Typography helpers
          </Bulma.Tab>
        </Bulma.Tabs>
        <Switch>
          <Route path="/react-bulma-ts/modifiers/syntax" exact={false} component={Syntax} />
          <Route path="/react-bulma-ts/modifiers/helpers" exact={false} component={Helpers}  />
          <Route path="/react-bulma-ts/modifiers/responsive-helpers" exact={false} component={ResponsiveHelpers} />
          <Route path="/react-bulma-ts/modifiers/typograhy-helpers" exact={false} component={TypographyHelpers} />
        </Switch>
      </Bulma.Container>
    ];
  }
}
