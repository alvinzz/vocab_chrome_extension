// function renderStatus(statusText) {
//   document.getElementById('status').textContent = statusText;
// }
function complexFunc() {
  console.log("It's adead!");
  //alert(document.getElementById("complexity").value);
  chrome.extension.getBackgroundPage().simplebenchmark = document.getElementById("complexity").value;
}
function jumpFunc() {
  chrome.extension.getBackgroundPage().replacespacing = document.getElementById("jumplength").value;
}
/*
document.addEventListener('DOMContentLoaded', function() {
  	renderStatus(window.getSelection().toString());
    console.log("testtest");
});
*/
document.addEventListener('DOMContentLoaded', function() {
    // renderStatus(window.getSelection().toString());
    console.log("testtest");
    document.getElementById("complexity").addEventListener("change", complexFunc, false);
    document.getElementById("jumplength").addEventListener("change", jumpFunc, false);
});
