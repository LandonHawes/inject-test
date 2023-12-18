function injectReactComponent(componentCode, targetElementId) {
  // Assume React and ReactDOM are already imported in your project

  const targetElement = document.getElementById(targetElementId);
  console.log(targetElement); // Log the target element to the console

  // Inject the component code along with a script to render it
  const fullCode = `
      ${componentCode}
      const targetElement = document.getElementById('${targetElementId}');
      ReactDOM.render(React.createElement(MyReactComponent), targetElement);
    `;
  const scriptElement = document.createElement("script");
  scriptElement.textContent = fullCode;
  document.documentElement.appendChild(scriptElement);
}
