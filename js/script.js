var select = document.querySelector("#moods");
var body = document.querySelector("body");
//console.log(select, body);

select.addEventListener("change", function (e) {
  var mood = e.target.value;
  if (mood === "happy") {
    body.classList.remove("body.sad");
    body.classList.remove("body.passionate");
    body.classList.add("body.happy");
  } else if (mood === "sad") {
    body.classList.remove("body.happy");
    body.classList.remove("body.passionate");
    body.classList.add("body.sad");
  } else if (mood === "passionate") {
    body.classList.remove("body.sad");
    body.classList.remove("body.happy");
    body.classList.add("body.passionate");
  }
});
