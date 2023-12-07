(function () {
  let user = JSON.parse(localStorage.getItem("user"));
  if (user === null) {
    window.location.pathname = "/Firebase - Login/login.html";
  }
})();
