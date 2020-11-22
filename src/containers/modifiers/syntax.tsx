import React from "react";
import * as Bulma from "react-bulma-ts";
import { connect } from "react-redux";
import { SyntaxState } from "../../reducers/modifiers-reducer/syntax-reducer";
import { SyntaxActionDispatcher } from "../../actions/modifiers/syntax-action";
import Highlight from "react-highlight.js";
const bash = require("highlight.js/lib/languages/bash");
const typescript = require("highlight.js/lib/languages/typescript");

interface SyntaxProps {
  actions?: SyntaxActionDispatcher;
}

@(connect(
  (state: {
    modifiersReducer: SyntaxState;
  }): SyntaxProps => ({
    ...state.modifiersReducer,
  }),
  (dispatch) => ({ actions: new SyntaxActionDispatcher(dispatch) })
) as any)
export default class Syntax extends React.Component<SyntaxProps> {
  render() {
    return <div>
      <Bulma.Title titleType={Bulma.TitleType.Heading} level={3}>
        Modifiers syntax
      </Bulma.Title>
      <Bulma.Subtitle titleType={Bulma.TitleType.Heading} level={5}>
        Most Bulma elements have <strong>alternative</strong> styles. To apply them, you only need to append one of the <strong>modifier classes</strong>.<br />
        They are in enum <code>Bulma.Color</code>, <code>Bulma.Size</code>, <code>Bulma.Style</code> or <code>Bulma.State</code>.
      </Bulma.Subtitle>
      <hr />
      <Bulma.Columns>
        <Bulma.Column>
          <p>Let's start with a simple <strong>button</strong> that uses the <code>Bumla.Button</code> class:</p>
        </Bulma.Column>
        <Bulma.Column>
          <p>
            <Bulma.Button buttonType={Bulma.ButtonType.Anchor}>
              Button
            </Bulma.Button>
          </p>
        </Bulma.Column>
        <Bulma.Column options={[Bulma.ColumnSize.Half]}>
          <Highlight language={typescript}>
            {`<Bulma.Button buttonType={Bulma.ButtonType.Anchor}>
  Button
</Bulma.Button>`}
          </Highlight>
        </Bulma.Column>
      </Bulma.Columns>
      <Bulma.Columns>
        <Bulma.Column>
          <p>By <strong>adding</strong> the <code>Bulma.Color.Primary</code> as an option, you can modify the <strong>color</strong>:</p>
        </Bulma.Column>
        <Bulma.Column>
          <p>
            <Bulma.Button buttonType={Bulma.ButtonType.Anchor} options={[Bulma.Color.Primary]}>
              Button
            </Bulma.Button>
          </p>
        </Bulma.Column>
        <Bulma.Column options={[Bulma.ColumnSize.Half]}>
          <Highlight language={typescript}>
            {`<Bulma.Button buttonType={Bulma.ButtonType.Anchor} options={[Bulma.Color.Primary]}>
  Button
</Bulma.Button>`}
          </Highlight>
        </Bulma.Column>
      </Bulma.Columns>
      <Bulma.Columns>
        <Bulma.Column>
          <Bulma.Content>
            <p>You can use one of the <strong>6 main colors</strong>:</p>
            <ul>
              <li><code>Bulma.Color.Primary</code></li>
              <li><code>Bulma.Color.Link</code></li>
              <li><code>Bulma.Color.Info</code></li>
              <li><code>Bulma.Color.Success</code></li>
              <li><code>Bulma.Color.Warning</code></li>
              <li><code>Bulma.Color.Danger</code></li>
            </ul>
          </Bulma.Content>
        </Bulma.Column>
        <Bulma.Column>
          <Bulma.Field>
            <Bulma.Button buttonType={Bulma.ButtonType.Anchor} options={[Bulma.Color.Primary]}>
              Button
            </Bulma.Button>
          </Bulma.Field>
          <Bulma.Field>
            <Bulma.Button buttonType={Bulma.ButtonType.Anchor} options={[Bulma.Color.Link]}>
              Button
            </Bulma.Button>
          </Bulma.Field>
          <Bulma.Field>
            <Bulma.Button buttonType={Bulma.ButtonType.Anchor} options={[Bulma.Color.Info]}>
              Button
            </Bulma.Button>
          </Bulma.Field>
          <Bulma.Field>
            <Bulma.Button buttonType={Bulma.ButtonType.Anchor} options={[Bulma.Color.Success]}>
              Button
            </Bulma.Button>
          </Bulma.Field>
          <Bulma.Field>
            <Bulma.Button buttonType={Bulma.ButtonType.Anchor} options={[Bulma.Color.Warning]}>
              Button
            </Bulma.Button>
          </Bulma.Field>
          <Bulma.Field>
            <Bulma.Button buttonType={Bulma.ButtonType.Anchor} options={[Bulma.Color.Danger]}>
              Button
            </Bulma.Button>
          </Bulma.Field>
        </Bulma.Column>
        <Bulma.Column options={[Bulma.ColumnSize.Half]}>
          <Highlight language={typescript}>
            {`<Bulma.Field>
  <Bulma.Button buttonType={Bulma.ButtonType.Anchor} options={[Bulma.Color.Primary]}>
    Button
  </Bulma.Button>
</Bulma.Field>
<Bulma.Field>
  <Bulma.Button buttonType={Bulma.ButtonType.Anchor} options={[Bulma.Color.Link]}>
    Button
  </Bulma.Button>
</Bulma.Field>
<Bulma.Field>
  <Bulma.Button buttonType={Bulma.ButtonType.Anchor} options={[Bulma.Color.Info]}>
    Button
  </Bulma.Button>
</Bulma.Field>
<Bulma.Field>
  <Bulma.Button buttonType={Bulma.ButtonType.Anchor} options={[Bulma.Color.Success]}>
    Button
  </Bulma.Button>
</Bulma.Field>
<Bulma.Field>
  <Bulma.Button buttonType={Bulma.ButtonType.Anchor} options={[Bulma.Color.Warning]}>
    Button
  </Bulma.Button>
</Bulma.Field>
<Bulma.Field>
  <Bulma.Button buttonType={Bulma.ButtonType.Anchor} options={[Bulma.Color.Danger]}>
    Button
  </Bulma.Button>
</Bulma.Field>`}
          </Highlight>
        </Bulma.Column>
      </Bulma.Columns>
      <Bulma.Columns>
        <Bulma.Column>
          <Bulma.Content>
            <p>You can also alter the <strong>size</strong>:</p>
            <ul>
              <li><code>Bulma.Size.Small</code></li>
              <li><code>Bulma.Size.Medium</code></li>
              <li><code>Bulma.Size.Large</code></li>
            </ul>
          </Bulma.Content>
        </Bulma.Column>
        <Bulma.Column>
          <Bulma.Field>
            <Bulma.Button buttonType={Bulma.ButtonType.Anchor} options={[Bulma.Size.Small]}>
              Button
            </Bulma.Button>
          </Bulma.Field>
          <Bulma.Field>
            <Bulma.Button buttonType={Bulma.ButtonType.Anchor}>
              Button
            </Bulma.Button>
          </Bulma.Field>
          <Bulma.Field>
            <Bulma.Button buttonType={Bulma.ButtonType.Anchor} options={[Bulma.Size.Medium]}>
              Button
            </Bulma.Button>
          </Bulma.Field>
          <Bulma.Field>
            <Bulma.Button buttonType={Bulma.ButtonType.Anchor} options={[Bulma.Size.Large]}>
              Button
            </Bulma.Button>
          </Bulma.Field>
        </Bulma.Column>
        <Bulma.Column options={[Bulma.ColumnSize.Half]}>
          <Highlight language={typescript}>
            {`<Bulma.Field>
  <Bulma.Button buttonType={Bulma.ButtonType.Anchor} options={[Bulma.Size.Small]}>
    Button
  </Bulma.Button>
</Bulma.Field>
<Bulma.Field>
  <Bulma.Button buttonType={Bulma.ButtonType.Anchor}>
    Button
  </Bulma.Button>
</Bulma.Field>
<Bulma.Field>
  <Bulma.Button buttonType={Bulma.ButtonType.Anchor} options={[Bulma.Size.Medium]}>
    Button
  </Bulma.Button>
</Bulma.Field>
<Bulma.Field>
  <Bulma.Button buttonType={Bulma.ButtonType.Anchor} options={[Bulma.Size.Large]}>
    Button
  </Bulma.Button>
</Bulma.Field>`}
          </Highlight>
        </Bulma.Column>
      </Bulma.Columns>
      <Bulma.Columns>
        <Bulma.Column>
          <Bulma.Content>
            <p>Or the <strong>style</strong> or <strong>state</strong>:</p>
            <ul>
              <li><code>Bulma.Style.Outlined</code></li>
              <li><code>Bulma.State.Loading</code></li>
              <li><code>[disabled]</code></li>
            </ul>
          </Bulma.Content>
        </Bulma.Column>
        <Bulma.Column>
          <Bulma.Field>
            <Bulma.Button buttonType={Bulma.ButtonType.Anchor} options={[Bulma.Style.Outline]}>
              Button
            </Bulma.Button>
          </Bulma.Field>
          <Bulma.Field>
            <Bulma.Button buttonType={Bulma.ButtonType.Anchor} options={[Bulma.State.Loading]}>
              Button
            </Bulma.Button>
          </Bulma.Field>
          <Bulma.Field>
            <Bulma.Button buttonType={Bulma.ButtonType.Anchor} disabled>
              Button
            </Bulma.Button>
          </Bulma.Field>
        </Bulma.Column>
        <Bulma.Column options={[Bulma.ColumnSize.Half]}>
          <Highlight language={typescript}>
            {`<Bulma.Field>
  <Bulma.Button buttonType={Bulma.ButtonType.Anchor} options={[Bulma.Style.Outline]}>
    Button
  </Bulma.Button>
</Bulma.Field>
<Bulma.Field>
  <Bulma.Button buttonType={Bulma.ButtonType.Anchor} options={[Bulma.State.Loading]}>
    Button
  </Bulma.Button>
</Bulma.Field>
<Bulma.Field>
  <Bulma.Button buttonType={Bulma.ButtonType.Anchor} disabled>
    Button
  </Bulma.Button>
</Bulma.Field>`}
          </Highlight>
        </Bulma.Column>
      </Bulma.Columns>
    </div>;
  }
}
