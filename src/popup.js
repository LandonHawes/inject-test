document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("h2").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "injectMovableBox" });
    });
  });
});
