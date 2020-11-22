import React from "react";
import * as Bulma from "react-bulma-ts";
import { connect } from "react-redux";
import { ResponsivenessState } from "../../reducers/overview-reducer/responsiveness-reducer";
import { ResponsivenessActionDispatcher } from "../../actions/overview/responsiveness-action";
import Highlight from "react-highlight.js";
const bash = require("highlight.js/lib/languages/bash");
const typescript = require("highlight.js/lib/languages/typescript");

interface ResponsivenessProps {
  actions?: ResponsivenessActionDispatcher;
}

@(connect(
  (state: {
    overviewReducer: ResponsivenessState;
  }): ResponsivenessProps => ({
    ...state.overviewReducer,
  }),
  (dispatch) => ({ actions: new ResponsivenessActionDispatcher(dispatch) })
) as any)
export default class Responsiveness extends React.Component<ResponsivenessProps> {
  render() {
    return <div>
      <Bulma.Title titleType={Bulma.TitleType.Heading} level={3}>
        Responsiveness
      </Bulma.Title>
      <Bulma.Subtitle titleType={Bulma.TitleType.Heading} level={5}>
        Bulma is a <strong>mobile-first</strong> framework
      </Bulma.Subtitle>
      <hr />
      <Bulma.Title titleType={Bulma.TitleType.Heading} level={4}>Vertical by default</Bulma.Title>
      <Bulma.Content>
        <p>
          Every element in Bulma is <strong>mobile-first</strong> and optimizes for <strong>vertical reading</strong>, so by default on mobile:
        </p>
        <ul>
          <li><code>columns</code> are stacked vertically</li>
          <li>the <code>level</code> component will show its children stacked vertically</li>
          <li>the <code>nav</code> menu will be hidden</li>
      </ul>
      <p>For example, you can enforce the <strong>horizontal</strong> layout for both <code>columns</code> or <code>nav</code> by appending the <code>is-mobile</code> modifier.</p>
      </Bulma.Content>
      <hr />
      <Bulma.Title titleType={Bulma.TitleType.Heading} level={4}>Breakpoint</Bulma.Title>
      <Bulma.Content>
        <p>Bulma has 5 breakpoints:</p>
        <ul>
          <li><code>mobile</code>: up to <code>768px</code></li>
          <li><code>tablet</code>: from <code>769px</code></li>
          <li><code>desktop</code>: from <code>1008px</code></li>
          <li><code>widescreen</code>: from <code>1200px</code></li>
          <li><code>fullhd</code>: from <code>1392px</code></li>
        </ul>
        <p>Bulma uses 9 responsive mixins:</p>
        <ul>
          <li>
            <code>=mobile</code><br />
            until <code>768px</code>
          </li>
          <li>
            <code>=tablet</code><br />
            from <code>769px</code>
          </li>
          <li>
            <code>=tablet-only</code><br />
            from <code>769px</code> and until <code>1007px</code>
          </li>
          <li>
            <code>=touch</code><br />
            until <code>1007px</code>
          </li>
          <li>
            <code>=desktop</code><br />
            from <code>1008px</code>
          </li>
          <li>
            <code>=desktop-only</code><br />
            from <code>1008px</code> and until <code>1199px</code>
          </li>
          <li>
            <code>=widescreen</code><br />
            from <code>1200px</code>
          </li>
          <li>
            <code>=widescreen-only</code><br />
            from <code>1200px</code> and until <code>1391px</code>
          </li>
          <li>
            <code>=fullhd</code><br />
            from <code>1392px</code>
          </li>
        </ul>
      </Bulma.Content>
      <Bulma.Table options={[Bulma.TableModifiers.Bordered]}>
        <Bulma.TableHeader>
          <Bulma.TableRow>
            <Bulma.TableHeaderCell style={{width: "20%"}}>
              Mobile<br />
              Up to <code>768px</code>
            </Bulma.TableHeaderCell>
            <Bulma.TableHeaderCell style={{width: "20%"}}>
              Tablet<br />
              Between <code>769px</code> and <code>1007px</code>
            </Bulma.TableHeaderCell>
            <Bulma.TableHeaderCell style={{width: "20%"}}>
              Desktop<br />
              Between <code>1008px</code> and <code>1199px</code>
            </Bulma.TableHeaderCell>
            <Bulma.TableHeaderCell style={{width: "20%"}}>
              Widescreen<br />
              Between <code>1200px</code> and <code>1391px</code>
            </Bulma.TableHeaderCell>
            <Bulma.TableHeaderCell style={{width: "20%"}}>
              FullHD<br />
              <code>1392px</code> and above
            </Bulma.TableHeaderCell>
          </Bulma.TableRow>
        </Bulma.TableHeader>
        <Bulma.TableBody>
          <Bulma.TableRow>
            <Bulma.TableCell>
              <Bulma.Notification options={[Bulma.Color.Success]}>mobile</Bulma.Notification>
            </Bulma.TableCell>
            <Bulma.TableCell colSpan="4">
              <Bulma.Notification>-</Bulma.Notification>
            </Bulma.TableCell>
          </Bulma.TableRow>
          <Bulma.TableRow>
            <Bulma.TableCell>
              <Bulma.Notification>-</Bulma.Notification>
            </Bulma.TableCell>
            <Bulma.TableCell colSpan="4">
              <Bulma.Notification options={[Bulma.Color.Success]}>tablet</Bulma.Notification>
            </Bulma.TableCell>
          </Bulma.TableRow>
          <Bulma.TableRow>
            <Bulma.TableCell colSpan="2">
              <Bulma.Notification>-</Bulma.Notification>
            </Bulma.TableCell>
            <Bulma.TableCell colSpan="3">
              <Bulma.Notification options={[Bulma.Color.Success]}>desktop</Bulma.Notification>
            </Bulma.TableCell>
          </Bulma.TableRow>
          <Bulma.TableRow>
            <Bulma.TableCell colSpan="3">
              <Bulma.Notification>-</Bulma.Notification>
            </Bulma.TableCell>
            <Bulma.TableCell colSpan="2">
              <Bulma.Notification options={[Bulma.Color.Success]}>widescreen</Bulma.Notification>
            </Bulma.TableCell>
          </Bulma.TableRow>
          <Bulma.TableRow>
            <Bulma.TableCell colSpan="4">
              <Bulma.Notification>-</Bulma.Notification>
            </Bulma.TableCell>
            <Bulma.TableCell>
              <Bulma.Notification options={[Bulma.Color.Success]}>fullhd</Bulma.Notification>
            </Bulma.TableCell>
          </Bulma.TableRow>
          <Bulma.TableRow>
            <Bulma.TableCell>
              <Bulma.Notification>-</Bulma.Notification>
            </Bulma.TableCell>
            <Bulma.TableCell>
              <Bulma.Notification options={[Bulma.Color.Success]}>tablet-only</Bulma.Notification>
            </Bulma.TableCell>
            <Bulma.TableCell colSpan="3">
              <Bulma.Notification>-</Bulma.Notification>
            </Bulma.TableCell>
          </Bulma.TableRow>
          <Bulma.TableRow>
            <Bulma.TableCell colSpan="2">
              <Bulma.Notification>-</Bulma.Notification>
            </Bulma.TableCell>
            <Bulma.TableCell>
              <Bulma.Notification options={[Bulma.Color.Success]}>desktop-only</Bulma.Notification>
            </Bulma.TableCell>
            <Bulma.TableCell colSpan="2">
              <Bulma.Notification>-</Bulma.Notification>
            </Bulma.TableCell>
          </Bulma.TableRow>
          <Bulma.TableRow>
            <Bulma.TableCell colSpan="3">
              <Bulma.Notification>-</Bulma.Notification>
            </Bulma.TableCell>
            <Bulma.TableCell>
              <Bulma.Notification options={[Bulma.Color.Success]}>widescreen-only</Bulma.Notification>
            </Bulma.TableCell>
            <Bulma.TableCell>
              <Bulma.Notification>-</Bulma.Notification>
            </Bulma.TableCell>
          </Bulma.TableRow>
          <Bulma.TableRow>
            <Bulma.TableCell colSpan="2">
              <Bulma.Notification options={[Bulma.Color.Success]}>touch</Bulma.Notification>
            </Bulma.TableCell>
            <Bulma.TableCell colSpan="3">
              <Bulma.Notification>-</Bulma.Notification>
            </Bulma.TableCell>
          </Bulma.TableRow>
        </Bulma.TableBody>
      </Bulma.Table>
      <p>You can apply responsiveness to particular modifier by using <code>Bulma.addResponsiveness(baseModifier: any, responsiveness: Bulma.Responsiveness)</code> function</p>
    </div>;
  }
}
