const btn = document.getElementById("btn");
const show = document.querySelector(".show");
let me = true;
btn.addEventListener("click", tog);
function tog() {
  if (me) {
    show.classList.toggle("hidden");
    btn.innerText = "Hide Toast";
  } else {
    show.classList.toggle("hidden");
    btn.innerText = "Show Toast";
  }
  me = !me;
}
