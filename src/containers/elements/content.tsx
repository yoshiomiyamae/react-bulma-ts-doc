import React from "react";
import * as Bulma from "react-bulma-ts";
import { connect } from "react-redux";
import { ContentState } from "../../reducers/elements/content-reducer";
import { ContentActionDispatcher } from "../../actions/elements/content-action";
import Highlight from "react-highlight.js";
import {placeholder256x256} from "../../image"

const bash = require("highlight.js/lib/languages/bash");
const typescript = require("highlight.js/lib/languages/typescript");

interface ContentProps {
  actions?: ContentActionDispatcher;
}

@(connect(
  (state: {
    overviewReducer: ContentState;
  }): ContentProps => ({
    ...state.overviewReducer,
  }),
  (dispatch) => ({ actions: new ContentActionDispatcher(dispatch) })
) as any)
export default class Content extends React.Component<ContentProps> {
  render() {
    return <div>
      <Bulma.Title titleType={Bulma.TitleType.Heading} level={3}>
        Content
      </Bulma.Title>
      <Bulma.Subtitle titleType={Bulma.TitleType.Heading} level={5}>
        A single class to handle WYSIWYG generated content, where only <strong>React components</strong> are available
      </Bulma.Subtitle>
      <Bulma.Field options={[Bulma.FieldOption.Grouped, Bulma.FieldOption.GroupedMultiline]}>
        <Bulma.Control>
          <Bulma.Tags hasAddons={true}>
            <Bulma.Tag tagType={Bulma.TagType.Span}>Colors</Bulma.Tag>
            <Bulma.Tag tagType={Bulma.TagType.Span} options={[Bulma.Color.Danger]}>No</Bulma.Tag>
          </Bulma.Tags>
        </Bulma.Control>
        <Bulma.Control>
          <Bulma.Tags hasAddons={true}>
            <Bulma.Tag tagType={Bulma.TagType.Span}>Sizes</Bulma.Tag>
            <Bulma.Tag tagType={Bulma.TagType.Span} options={[Bulma.Color.Success]}>Yes</Bulma.Tag>
          </Bulma.Tags>
        </Bulma.Control>
      </Bulma.Field>
      <hr />
      <Bulma.Content>
        <p>
          hen you can't use the CSS classes you want, or when you just want to directly use HTML tags, use <code>content</code> as container. It can handle almost any HTML tag:
        </p>
        <ul>
          <li><code>{'<p>'}</code> paragraphs</li>
          <li><code>{'<ul>'}</code>  <code>{'<ol>'}</code>  <code>{'<dl>'}</code>  lists</li>
          <li><code>{'<h1>'}</code>  to <code>{'<h6>'}</code>  headings</li>
          <li><code>{'<blockquote>'}</code>  quotes</li>
          <li><code>{'<em>'}</code>  and <code>{'<strong>'}</code> </li>
          <li><code>{'<table>'}</code>  <code>{'<tr>'}</code>  <code>{'<th>'}</code>  <code>{'<td>'}</code>  tables</li>
        </ul>
        <p>
          This <code>content</code> class can be used in <em>any</em> context where you just want to (or can only) write some <strong>text</strong>. For example, it's used for the paragraph you're currently reading.
        </p>
      </Bulma.Content>
      <div className="bd-snippet bd-is-vertical bd-is-1">
        <div className="bd-snippet-preview">
          <Bulma.Content>
            <h1>Hello World</h1>
            <p>Lorem ipsum<sup><a>[1]</a></sup> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as well!</p>
            <h2>Second level</h2>
            <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
            <ul>
              <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
              <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
              <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
              <li>Ut non enim metus.</li>
            </ul>
            <h3>Third level</h3>
            <p>Quisque ante lacus, malesuada ac auctor vitae, congue <a href="#">non ante</a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.</p>
            <ol>
              <li>Donec blandit a lorem id convallis.</li>
              <li>Cras gravida arcu at diam gravida gravida.</li>
              <li>Integer in volutpat libero.</li>
              <li>Donec a diam tellus.</li>
              <li>Aenean nec tortor orci.</li>
              <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
              <li>Vivamus maximus ultricies pulvinar.</li>
            </ol>
            <blockquote>Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis.</blockquote>
            <p>Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et <em>justo sodales</em> elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie.</p>
            <p>Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum commodo.</p>
            <dl>
              <dt>Web</dt>
              <dd>The part of the Internet that contains websites and web pages</dd>
              <dt>HTML</dt>
              <dd>A markup language for creating web pages</dd>
              <dt>CSS</dt>
              <dd>A technology to make HTML look better</dd>
            </dl>
            <p>Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla. Nulla facilisi. Nullam ac erat ante.</p>
            <h4>Fourth level</h4>
            <p>Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum ex efficitur.</p>
            <pre>{`<!DOCTYPE html>
<html>
  <head>
    <title>Hello World</title>
  </head>
  <body>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
  </body>
</html>`}</pre>
            <p>Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien.</p>
            <table>
              <thead>
                <tr>
                  <th>One</th>
                  <th>Two</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Three</td>
                  <td>Four</td>
                </tr>
                <tr>
                  <td>Five</td>
                  <td>Six</td>
                </tr>
                <tr>
                  <td>Seven</td>
                  <td>Eight</td>
                </tr>
                <tr>
                  <td>Nine</td>
                  <td>Ten</td>
                </tr>
                <tr>
                  <td>Eleven</td>
                  <td>Twelve</td>
                </tr>
              </tbody>
            </table>
            <p>Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum. Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.</p>
            <h5>Fifth level</h5>
            <p>Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend justo. Nam et sollicitudin odio.</p>
            <figure>
              <img src={placeholder256x256} />
              <img src={placeholder256x256} />
              <figcaption>
                Figure 1: Some beautiful placeholders
              </figcaption>
            </figure>
            <h6>Sixth level</h6>
            <p>Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan. Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis. Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed varius sapien odio vitae est. Etiam at cursus metus.</p>
          </Bulma.Content>
        </div>
        <div className="bd-snippet-code">
          <Highlight language={typescript}>{`<Bulma.Content>
<h1>Hello World</h1>
<p>Lorem ipsum<sup><a>[1]</a></sup> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as well!</p>
<h2>Second level</h2>
<p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
<ul>
  <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
  <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
  <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
  <li>Ut non enim metus.</li>
</ul>
<h3>Third level</h3>
<p>Quisque ante lacus, malesuada ac auctor vitae, congue <a href="#">non ante</a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.</p>
<ol>
  <li>Donec blandit a lorem id convallis.</li>
  <li>Cras gravida arcu at diam gravida gravida.</li>
  <li>Integer in volutpat libero.</li>
  <li>Donec a diam tellus.</li>
  <li>Aenean nec tortor orci.</li>
  <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
  <li>Vivamus maximus ultricies pulvinar.</li>
</ol>
<blockquote>Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis.</blockquote>
<p>Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et <em>justo sodales</em> elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie.</p>
<p>Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum commodo.</p>
<dl>
  <dt>Web</dt>
  <dd>The part of the Internet that contains websites and web pages</dd>
  <dt>HTML</dt>
  <dd>A markup language for creating web pages</dd>
  <dt>CSS</dt>
  <dd>A technology to make HTML look better</dd>
</dl>
<p>Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla. Nulla facilisi. Nullam ac erat ante.</p>
<h4>Fourth level</h4>
<p>Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum ex efficitur.</p>
<pre>{\`<!DOCTYPE html>
<html>
<head>
<title>Hello World</title>
</head>
<body>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
</body>
</html>\`}</pre>
<p>Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien.</p>
<table>
  <thead>
    <tr>
      <th>One</th>
      <th>Two</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Three</td>
      <td>Four</td>
    </tr>
    <tr>
      <td>Five</td>
      <td>Six</td>
    </tr>
    <tr>
      <td>Seven</td>
      <td>Eight</td>
    </tr>
    <tr>
      <td>Nine</td>
      <td>Ten</td>
    </tr>
    <tr>
      <td>Eleven</td>
      <td>Twelve</td>
    </tr>
  </tbody>
</table>
<p>Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum. Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.</p>
<h5>Fifth level</h5>
<p>Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend justo. Nam et sollicitudin odio.</p>
<figure>
  <img src={placeholder256x256} />
  <img src={placeholder256x256} />
  <figcaption>
    Figure 1: Some beautiful placeholders
  </figcaption>
</figure>
<h6>Sixth level</h6>
<p>Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan. Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis. Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed varius sapien odio vitae est. Etiam at cursus metus.</p>
</Bulma.Content>
</div>
<div className="bd-snippet-code">`}</Highlight>
        </div>
      </div>
      <hr />
      <Bulma.Title titleType={Bulma.TitleType.Heading} level={4}>Sizes</Bulma.Title>
      <Bulma.Content>
        <p>You can use the <code>Bulma.Size.Small</code>, <code>Bulma.Size.Medium</code> and <code>Bulma.Size.Large</code> options to change the font size.</p>
      </Bulma.Content>
      <div className="bd-example">
        <Bulma.Content options={[Bulma.Size.Small]}>
          <h1>Hello World</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
          <h2>Second level</h2>
          <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
          <ul>
            <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
            <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
            <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
            <li>Ut non enim metus.</li>
          </ul>
        </Bulma.Content>
      </div>
      <div className="bd-example">
        <Bulma.Content options={[Bulma.Size.Medium]}>
          <h1>Hello World</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
          <h2>Second level</h2>
          <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
          <ul>
            <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
            <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
            <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
            <li>Ut non enim metus.</li>
          </ul>
        </Bulma.Content>
      </div>
      <div className="bd-example">
        <Bulma.Content options={[Bulma.Size.Large]}>
          <h1>Hello World</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
          <h2>Second level</h2>
          <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
          <ul>
            <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
            <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
            <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
            <li>Ut non enim metus.</li>
          </ul>
        </Bulma.Content>
      </div>
    </div>;
  }
}
