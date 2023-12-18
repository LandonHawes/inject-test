import React, { useRef } from "react";
import ReactDOM from "react-dom";

const babel = require("@babel/core");

const MovableBox = () => {
  const hostRef = useRef();

  const init = () => {
    const host = hostRef.current;

    //Using Shadow Root
    const root = host.attachShadow({ mode: "open" }); // Create a Shadow Root
    const div = document.createElement("div");
    div.className = "div root-class";

    // Styles for the movable box
    div.style.border = "3px solid blue";
    div.style.margin = "10px";
    div.style.padding = "10px";
    div.style.width = "200px";
    div.style.position = "relative"; // Ensure relative positioning for absolute child

    root.appendChild(div);

    // Movable box styles
    const movableBox = document.createElement("div");
    movableBox.style.position = "absolute"; // Set to absolute for positioning inside the root div
    movableBox.style.top = "50px";
    movableBox.style.left = "50px";
    movableBox.style.width = "400px";
    movableBox.style.height = "600px";
    movableBox.style.background = "rgba(255, 0, 0, 0.5)";
    movableBox.style.cursor = "move";
    movableBox.style.zIndex = "9999";
    movableBox.style.border = "3px solid blue";
    movableBox.style.resize = "both"; // Enable resizing
    movableBox.style.overflow = "auto"; // Show scrollbar when content overflows
    movableBox.style.minWidth = "250px"; // Set minimum width
    movableBox.style.minHeight = "300px"; // Set minimum height

    // Movable box text
    const movableText = document.createTextNode("Hello From the Movable Box");
    movableBox.appendChild(movableText);

    // Movable box event listeners
    let isDragging = false;
    let offsetX, offsetY;

    movableBox.addEventListener("mousedown", function (e) {
      // Check if the mouse click is in the top-left corner
      const isTopLeft =
        e.clientX - movableBox.getBoundingClientRect().left < 50 &&
        e.clientY - movableBox.getBoundingClientRect().top < 50;

      if (isTopLeft) {
        isDragging = true;
        offsetX = e.clientX - movableBox.getBoundingClientRect().left;
        offsetY = e.clientY - movableBox.getBoundingClientRect().top;
        movableBox.style.cursor = "grabbing"; // Change cursor style when in top-left corner
      } else {
        isDragging = false;
        movableBox.style.cursor = "grab"; // Change cursor style when in top-left corner
      }
    });

    movableBox.addEventListener("mouseenter", function () {
      movableBox.style.cursor = "default"; // Change cursor style when entering the box
    });

    movableBox.addEventListener("mouseleave", function () {
      if (!isDragging) {
        movableBox.style.cursor = "default"; // Restore default cursor style when not dragging
      }
    });

    document.addEventListener("mousemove", function (e) {
      if (isDragging) {
        movableBox.style.left = e.clientX - offsetX + "px";
        movableBox.style.top = e.clientY - offsetY + "px";
      }
    });

    document.addEventListener("mouseup", function () {
      isDragging = false;
      movableBox.style.cursor = "default"; // Change cursor style back to default
    });

    // Append movable box to the root div
    div.appendChild(movableBox);
  };

  React.useEffect(() => {
    init();
  }, []);

  return <div ref={hostRef} />;
};

// Render the component
ReactDOM.render(<MovableBox />, document.getElementById("root")); // Replace "root" with the ID of the container where you want to render the component

const transformedCode = babel.transform(jsxCode, {
  presets: ["@babel/preset-react"],
}).code;

eval(transformedCode);
