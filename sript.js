let menu = document.getElementById("menuone");
open = document.getElementById("open");
close = document.getElementById("close");
open.onclick = function () {
  menu.style.display = "block";
};
close.onclick = function () {
  menu.style.display = "none";
};
// =========================================================