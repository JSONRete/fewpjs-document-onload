document.addEventListener("DOMContentLoaded", function() {
  coolText()
  console.log("The DOM has loaded");

});

function coolText() {
  document.getElementById('text')
    .innerHTML = "This is really cool!"
}

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);


