// const script = document.createElement("script");
// script.src = chrome.extension.getURL("./components/test");
// document.head.appendChild(script);

// const containerDiv = document.createElement("div");
// containerDiv.id = "react-container";
// document.body.appendChild(containerDiv);

// ReactDOM.render(<Test />, document.getElementById("react-container"));

if (typeof init === "undefined") {
  const init = function () {
    // const injectElement = document.createElement("div");
    // injectElement.className = "rustyZone-element";
    // injectElement.innerHTML = "Hello From the Rusty Zone Element";
    // document.body.appendChild(injectElement);

    const hostEle = document.createElement("div");
    hostEle.className = "rustyZone-element-host";
    // hostEle.innerHTML = "Hello From the Rusty Zone Element";
    document.body.appendChild(hostEle);

    //Using Shadow Root
    var host = document.querySelector(".rustyZone-element-host");
    var root = host.attachShadow({ mode: "open" }); // Create a Shadow Root
    var div = document.createElement("div");
    div.className = "div root-class";

    // Styles for the movable box
    div.style.border = "3px solid blue";
    div.style.margin = "10px";
    div.style.padding = "10px";
    div.style.width = "200px";
    div.style.position = "relative"; // Ensure relative positioning for absolute child

    // div.innerHTML = "Hello From the Rusty Zone Shadow Root Element";

    root.appendChild(div);

    // Movable box styles
    const movableBox = document.createElement("div");
    movableBox.style.position = "absolute"; // Set to absolute for positioning inside the root div
    movableBox.style.top = "50px";
    movableBox.style.left = "50px";
    movableBox.style.width = "400px";
    movableBox.style.height = "600px";
    movableBox.style.background = "rgba(128, 128, 128, 0.7)";
    movableBox.style.cursor = "move";
    movableBox.style.zIndex = "9999";
    movableBox.style.border = "3px solid rgb(159, 90, 253)";
    movableBox.style.resize = "both"; // Enable resizing
    movableBox.style.overflow = "auto"; // Show scrollbar when content overflows
    movableBox.style.minWidth = "250px"; // Set minimum width
    movableBox.style.minHeight = "300px"; // Set minimum height

    // Movable box text
    const movableText = document.createTextNode("TestBox No React ");
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

    document.body.appendChild(movableBox);
  };

  init();
}

/*
      const hostEle = document.createElement('div');
      hostEle.className = 'rustyZone-element-host';
      hostEle.innerHTML = 'Hello From the Rusty Zone Element';
      document.body.appendChild(hostEle);
  
      //Using Shadow Root
      var host = document.querySelector('.rustyZone-element-host');
      var root = host.attachShadow({mode: 'open'}); // Create a Shadow Root
      var div = document.createElement('div');
      div.className = 'div root-class';
      div.innerHTML='<style>.div{border:3px solid blue;margin:10px;padding:10px;width:200px;}</style>'
      +'Hello From the Rusty Zone Shadow Root Element';
      root.appendChild(div);
      */
