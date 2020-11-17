import React from "react";
import * as Bulma from "react-bulma-ts";
import { connect } from "react-redux";
import { ElementsState } from "../reducers/elements-reducer";
import { ElementsActionDispatcher } from "../actions/elements-action";
import { Route, Switch } from "react-router-dom";
import Content from "./elements/content";


interface ElementsProps {
  actions?: ElementsActionDispatcher;
}

@(connect(
  (state: {
    elementsReducer: ElementsState;
  }): ElementsProps => ({
    ...state.elementsReducer,
  }),
  (dispatch) => ({ actions: new ElementsActionDispatcher(dispatch) })
) as any)
export default class Elements extends React.Component<ElementsProps> {
  render() {
    return [
      <Bulma.Container>
        <Bulma.Tabs>
          <Bulma.Tab
            options={[document.location.pathname.startsWith('/react-bulma-ts/elements/box') ? Bulma.State.Active : null]}
            href="/react-bulma-ts/elements/box"
            >
            Box
          </Bulma.Tab>
          <Bulma.Tab
            options={[document.location.pathname.startsWith('/react-bulma-ts/elements/button') ? Bulma.State.Active : null]}
            href="/react-bulma-ts/elements/button"
            >
            Button
          </Bulma.Tab>
          <Bulma.Tab
            options={[document.location.pathname.startsWith('/react-bulma-ts/elements/content') ? Bulma.State.Active : null]}
            href="/react-bulma-ts/elements/content"
            >
            Content
          </Bulma.Tab>
          <Bulma.Tab
            options={[document.location.pathname.startsWith('/react-bulma-ts/elements/delete') ? Bulma.State.Active : null]}
            href="/react-bulma-ts/elements/delete"
            >
            Delete
          </Bulma.Tab>
          <Bulma.Tab
            options={[document.location.pathname.startsWith('/react-bulma-ts/elements/icon') ? Bulma.State.Active : null]}
            href="/react-bulma-ts/elements/icon"
            >
            Icon
          </Bulma.Tab>
          <Bulma.Tab
            options={[document.location.pathname.startsWith('/react-bulma-ts/elements/image') ? Bulma.State.Active : null]}
            href="/react-bulma-ts/elements/image"
            >
            Image
          </Bulma.Tab>
          <Bulma.Tab
            options={[document.location.pathname.startsWith('/react-bulma-ts/elements/notification') ? Bulma.State.Active : null]}
            href="/react-bulma-ts/elements/notification"
            >
            Notification
          </Bulma.Tab>
          <Bulma.Tab
            options={[document.location.pathname.startsWith('/react-bulma-ts/elements/progress') ? Bulma.State.Active : null]}
            href="/react-bulma-ts/elements/progress"
            >
            Progress
          </Bulma.Tab>
          <Bulma.Tab
            options={[document.location.pathname.startsWith('/react-bulma-ts/elements/table') ? Bulma.State.Active : null]}
            href="/react-bulma-ts/elements/table"
            >
            Table
          </Bulma.Tab>
          <Bulma.Tab
            options={[document.location.pathname.startsWith('/react-bulma-ts/elements/tag') ? Bulma.State.Active : null]}
            href="/react-bulma-ts/elements/tag"
            >
            Tag
          </Bulma.Tab>
          <Bulma.Tab
            options={[document.location.pathname.startsWith('/react-bulma-ts/elements/title') ? Bulma.State.Active : null]}
            href="/react-bulma-ts/elements/title"
            >
            Title
          </Bulma.Tab>
        </Bulma.Tabs>
        <Switch>
          <Route path="/react-bulma-ts/elements/box" exact={false} render={() =><div></div>} />
          <Route path="/react-bulma-ts/elements/button" exact={false} render={() =><div></div>}  />
          <Route path="/react-bulma-ts/elements/content" exact={false} component={Content} />
          <Route path="/react-bulma-ts/elements/delete" exact={false} render={() =><div></div>} />
          <Route path="/react-bulma-ts/elements/icon" exact={false} render={() =><div></div>} />
          <Route path="/react-bulma-ts/elements/image" exact={false} render={() =><div></div>} />
          <Route path="/react-bulma-ts/elements/notification" exact={false} render={() =><div></div>} />
          <Route path="/react-bulma-ts/elements/progress" exact={false} render={() =><div></div>} />
          <Route path="/react-bulma-ts/elements/table" exact={false} render={() =><div></div>} />
          <Route path="/react-bulma-ts/elements/tag" exact={false} render={() =><div></div>} />
          <Route path="/react-bulma-ts/elements/title" exact={false} render={() =><div></div>} />
        </Switch>
      </Bulma.Container>
    ];
  }
}
