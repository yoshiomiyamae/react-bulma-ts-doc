import React from "react";
import * as Bulma from "react-bulma-ts";
import { connect } from "react-redux";
import { NavigationState } from "../reducers/navigation-reducer";
import { NavigationActionDispatcher } from "../actions/navigation-action";
import { Dispatch } from "redux";
import { ReactBulmaTSLogo } from "../image";


interface NavigationProps {
  isBurgerActive?: boolean;
  actions?: NavigationActionDispatcher;
}

@(connect(
  (state: {
    navigationReducer: NavigationState;
  }): NavigationProps => ({
    ...state.navigationReducer,
  }),
  (dispatch) => ({ actions: new NavigationActionDispatcher(dispatch) })
) as any)
export default class Navigation extends React.Component<NavigationProps> {
  render() {
    return [
      <Bulma.Navbar
        navbarType={Bulma.NavbarType.Nav}
        options={[Bulma.Color.Light]}
      >
        <Bulma.NavbarBrand>
          <Bulma.NavbarItem itemType={Bulma.NavbarItemType.Anchor}>
            <ReactBulmaTSLogo height={34} width={261} style={{ maxHeight: "34px" }} />
          </Bulma.NavbarItem>
          <Bulma.NavbarBurger
            onClick={() => this.props.actions?.toggleBurger()}
            options={[this.props.isBurgerActive ? Bulma.State.Active : null]}
          />
        </Bulma.NavbarBrand>
        <Bulma.NavbarMenu
          options={[this.props.isBurgerActive ? Bulma.State.Active : null]}
        >
        </Bulma.NavbarMenu>
      </Bulma.Navbar>,
      <Bulma.Hero options={[Bulma.Color.Link]}>
        <Bulma.HeroBody>
          <Bulma.Container>
            <Bulma.Title level={3} titleType={Bulma.TitleType.Heading}>
              Documentation
            </Bulma.Title>
            <Bulma.Subtitle level={5} titleType={Bulma.TitleType.Heading}>
              Everything you need to <strong>create a website</strong> with Bulma
            </Bulma.Subtitle>
          </Bulma.Container>
        </Bulma.HeroBody>
        <Bulma.HeroFooter>
          <Bulma.Container>
            <Bulma.Tabs options={[Bulma.Style.Boxed]}>
              <Bulma.Tab
                options={[document.location.pathname.startsWith('/react-bulma-ts/overview') ? Bulma.State.Active : null]}
                href="/react-bulma-ts/overview/start"
                >
                Overview
              </Bulma.Tab>
              <Bulma.Tab
                options={[document.location.pathname.startsWith('/react-bulma-ts/modifiers') ? Bulma.State.Active : null]}
                href="/react-bulma-ts/modifiers/syntax"
                >
                Modifiers
              </Bulma.Tab>
              <Bulma.Tab
                options={[document.location.pathname.startsWith('/react-bulma-ts/columns') ? Bulma.State.Active : null]}
                href="/react-bulma-ts/columns/basics"
                >
                Columns
              </Bulma.Tab>
              <Bulma.Tab
                options={[document.location.pathname.startsWith('/react-bulma-ts/layout') ? Bulma.State.Active : null]}
                href="/react-bulma-ts/layout/container"
                >
                Layout
              </Bulma.Tab>
              <Bulma.Tab
                options={[document.location.pathname.startsWith('/react-bulma-ts/form') ? Bulma.State.Active : null]}
                href="/react-bulma-ts/form/general"
                >
                Form
              </Bulma.Tab>
              <Bulma.Tab
                options={[document.location.pathname.startsWith('/react-bulma-ts/elements') ? Bulma.State.Active : null]}
                href="/react-bulma-ts/elements/box"
                >
                Elements
              </Bulma.Tab>
              <Bulma.Tab
                options={[document.location.pathname.startsWith('/react-bulma-ts/components') ? Bulma.State.Active : null]}
                href="/react-bulma-ts/components/breadcrumb"
                >
                Components
              </Bulma.Tab>
            </Bulma.Tabs>
          </Bulma.Container>
        </Bulma.HeroFooter>
      </Bulma.Hero>
    ];
  }
}
