var killInterval;
function kill() {
  console.log("KILL")
  var elem = document.getElementById("feed");
  if (elem != null) {
    elem.style.display = "none";
    clearInterval(killInterval);
  }
}

killInterval = setInterval(kill, 100)
