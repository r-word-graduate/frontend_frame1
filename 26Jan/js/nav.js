let count = 0;
function handleNavbar() {
  count += 1;
  if (count % 2 != 0) {
    document
      .querySelector("#hamburger__navbar")
      .setAttribute("id", "hamburger__navbar__after");
    setTimeout(function () {
      document.getElementById("he").style.display = "flex";
    }, 500);
  }
  if (count % 2 == 0) {
    document
      .querySelector("#hamburger__navbar__after")
      .setAttribute("id", "hamburger__navbar");
    document.getElementById("he").style.display = "none";
    document.getElementById("hamburger__navbar").style.animation =
      "anim1 0.5s forwards";
  }
}
