// // The list of target websites
// importScripts("core/inject-to.js");

// // The extension functions
// importScripts("core/functions.js");

// // The extension actions controller
// importScripts("core/extension.js");

// // The injection process
// importScripts("core/injection-process.js");

try {
  //ON page change
  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == "complete") {
      //if (changeInfo.url) {
      chrome.scripting.executeScript({
        files: ["contentScript.js"],
        target: { tabId: tab.id },
      });
      //}
    }
  });
} catch (e) {
  console.log(e);
}
