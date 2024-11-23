document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      // Navigationsleiste einfügen
      document.getElementById("navbar-container").innerHTML = data;

      // Sidenav-Steuerung erneut definieren
      document.querySelector(".sidenav .closebtn").onclick = closeNav;
      document.querySelector(".topnav a").onclick = openNav;
    })
    .catch(error => console.error("Error loading navbar:", error));
});

// Funktionen für die Sidenav-Steuerung
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
