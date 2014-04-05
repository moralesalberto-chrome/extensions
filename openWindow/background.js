// this is the button that is placed on chrome
// we setup the listener to react when clicked
// we get the tab that it was clicked from

chrome.browserAction.onClicked.addListener(function(tab) {
  console.log("here");
  alert("here");
});