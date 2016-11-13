// function renderStatus(statusText) {
//   document.getElementById('status').textContent = statusText;
// }
function complexFunc() {
  console.log("It's adead!");
  //alert(document.getElementById("complexity").value);
  chrome.extension.getBackgroundPage().simplebenchmark = document.getElementById("complexity").value;
}
document.getElementById('complexity').onchange = complexFunc;
function jumpFunc() {
  chrome.extension.getBackgroundPage().replacespacing = document.getElementById("jumplength").value;
}
document.getElementById('jumplength').onchange = jumpFunc;
/*
document.addEventListener('DOMContentLoaded', function() {
  	renderStatus(window.getSelection().toString());
    console.log("testtest");
});
*/
document.addEventListener('DOMContentLoaded', function() {
    // renderStatus(window.getSelection().toString());
    console.log("testtest");
    document.getElementById("complexity").addEventListener("change", complexFunc);
});
