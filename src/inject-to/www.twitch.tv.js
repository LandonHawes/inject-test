/* •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• */
/* Right here, you have access to the `injector` global object. */
/* So you can inject unlimited codes using: ••••••••••••••••••• */
/* injector.injectInlineJs(); ••••••••••••••••••••••••••••••••• */
/* injector.injectExternalJs(); ••••••••••••••••••••••••••••••• */
/* injector.injectInternalCss(); •••••••••••••••••••••••••••••• */
/* injector.injectExternalCss(); •••••••••••••••••••••••••••••• */
/* Anyway it's OPTIONAL, you can also define your logic. •••••• */
/* •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• */

const reactComponentCode = `
  class MyReactComponent extends React.Component {
    render() {
      const blackBoxStyle = {
        width: '100px',
        height: '100px',
        backgroundColor: 'black',
      };

      return <div style={blackBoxStyle}></div>;
    }
  }
`;

injectReactComponent(reactComponentCode, "app");
console.log("Hello from Twitch!");
