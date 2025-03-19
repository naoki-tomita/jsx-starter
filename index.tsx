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

function render(element: MyElement) {
  if (typeof element === 'string') {
    return element;
  }
  return `<${element.tag}>${element.children.map(render).join('')}</${element.tag}>`;
}

const html = render(
  <div>
    <h1>Hello World</h1>
    <p>This is a paragraph</p>
  </div>
);
console.log(html);
