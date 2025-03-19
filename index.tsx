type MyElement = {
  tag: string;
  attributes: Record<string, any>;
  children: MyElement[];
}

const React = {
  createElement(tag: string | FunctionComponent, attributes: Record<string, any>, ...children: MyElement[]): MyElement {
    if (typeof tag === 'function') {
      return tag(attributes ?? {}, children);
    }
    return {
      tag,
      attributes: attributes ?? {},
      children
    }
  }
}

type FunctionComponent<T = {}> = (props: T, children: MyElement[]) => MyElement;

function attributesToString(attributes: Record<string, any>) {
  return Object.entries(attributes).map(([key, value]) => ` ${key}="${value}"`).join('');
}

function render(element: MyElement) {
  if (typeof element === 'string') {
    return element;
  }
  return `<${element.tag}${attributesToString(element.attributes)}>${element.children.map(render).join('')}</${element.tag}>`;
}

const Component: FunctionComponent<{ foo: string, bar: string }> = ({ foo, bar }) => {
  return (
    <div>
      <h2>{foo}</h2>
      <p>{bar}</p>
    </div>
  )
}

const App: FunctionComponent = () => {
  return (
    <div class="foo bar">
      <h1 data-testid="hoge">Hello World</h1>
      <p>This is a paragraph</p>
      <Component foo="Hello" bar="World" />
    </div>
  )
}

const html = render(<App />);
console.log(html);
