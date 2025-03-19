// type FunctionComponent<T = {}> = (props: T, children: MyElement[]) => MyElement;

// const Component = ({ foo, bar }) => {
//   return (
//     <div>
//       <h2>{foo}</h2>
//       <p>{bar}</p>
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <h1>Hello World</h1>
//       <p>This is a paragraph</p>
//       <Component foo="Hello" bar="World" />
//     </div>
//   )
// }

// const React = {
//   createElement(tag: string | FunctionComponent, attributes: Record<string, any>, ...children: MyElement[]): MyElement {
//     if (typeof tag === 'function') {
//       return tag({ ...(attributes ?? {}) }, children);
//     }
//     return {
//       tag,
//       attributes: attributes ?? {},
//       children
//     }
//   }
// }
