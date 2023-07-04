const micaja = document.getElementById("div1");

micaja.addEventListener("click", function() {
  micaja.style.backgroundColor = "black";
});

let color = '';

document.addEventListener("keydown", function(event) {
  const key = event.key.toLowerCase();

  if (key === 'a') {
    color = 'pink';
  } else if (key === 's') {
    color = 'orange';
  } else if (key === 'd') {
    color = 'skyblue';
  }

  const keyDiv = document.getElementById("key");
  keyDiv.style.backgroundColor = color;
});