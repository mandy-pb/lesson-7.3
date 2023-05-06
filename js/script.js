var select = document.querySelector("#moods");
var body = document.querySelector("body");
//console.log(select, body);

select.addEventListener("change", function (e) {
  var mood = e.target.value;
  if (mood === "happy") {
    body.classList.remove("sad");
    body.classList.remove("passionate");
    body.classList.add("happy");
  } else if (mood === "sad") {
    body.classList.remove("happy");
    body.classList.remove("passionate");
    body.classList.add("sad");
  } else if (mood === "passionate") {
    body.classList.remove("sad");
    body.classList.remove("happy");
    body.classList.add("passionate");
  }
});
