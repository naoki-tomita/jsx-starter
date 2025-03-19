type MyElement = {
  tag: string;
  attributes: Record<string, any>;
  children: MyElement[];
}

const React = {
  createElement(tag: string, attributes: Record<string, any>, ...children: MyElement[]): MyElement {
    return {
      tag,
      attributes: attributes ?? {},
      children
    }
  }
}

function attributesToString(attributes: Record<string, any>) {
  return Object.entries(attributes).map(([key, value]) => ` ${key}="${value}"`).join('');
}

function render(element: MyElement) {
  if (typeof element === 'string') {
    return element;
  }
  return `<${element.tag}${attributesToString(element.attributes)}>${element.children.map(render).join('')}</${element.tag}>`;
}

const html = render(
  <div class="foo bar">
    <h1 data-testid="hoge">Hello World</h1>
    <p>This is a paragraph</p>
  </div>
);
console.log(html);
