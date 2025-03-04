type MyElement = {
  tag: string;
  attributes: Record<string, any>;
  children: MyElement[];
}

const React = {
  createElement(tag: string, attributes: Record<string, any>, ...children: MyElement[]): MyElement {
    return {
      tag,
      attributes,
      children
    }
  }
}

const element = <div class="foo">hogehoge</div>

console.log(element);
