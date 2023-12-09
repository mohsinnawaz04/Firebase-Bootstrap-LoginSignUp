import {
  auth,
  signInWithEmailAndPassword,
  googleProvider,
  facebookProvider,
  githubProvider,
  signInWithPopup,
} from "../Firebase/firebaseConfig.js";

var loginForm = document.getElementById("loginForm");
let email = document.querySelector("#floatingInput");
let password = document.querySelector("#floatingPassword");

(function () {
  let user = JSON.parse(localStorage.getItem("user"));
  if (user !== null) {
    window.location.pathname = "/";
  }
})();

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  console.log("login");

  if (email.value.trim() === "") {
    alert("Please Enter Email");
    return;
  }

  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      email.value = "";
      password.value = "";

      const user = userCredential.user;
      if (user.emailVerified === false) {
        alert("Email not verified");
        return;
      }
      localStorage.setItem("user", JSON.stringify(user));
      window.location.pathname = "/";
      // ...
    })
    .catch((error) => {
      console.error("ERROR: ", error);
    });
}

// AUTHENTICATION

var googleBtn = document.getElementById("google");
var facebookBtn = document.getElementById("facebook");
var githubBtn = document.getElementById("github");

googleBtn.addEventListener("click", authorization);
facebookBtn.addEventListener("click", authorization);
githubBtn.addEventListener("click", authorization);

facebookBtn.style.display = "none";

function authorization(e) {
  if (e.target.parentElement.id === "google") {
    console.log("google");
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        localStorage.setItem("user", JSON.stringify(user));
        window.location.pathname = "/";
      })
      .catch((error) => {
        console.error("ERROR: ", error);
      });
    return;
  }
  if (e.target.parentElement.id === "facebook") {
    console.log("facebook");
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const user = result.user;
        localStorage.setItem("user", JSON.stringify(user));
        window.location.pathname = "/";
      })
      .catch((error) => {
        console.error("ERROR: ", error);
      });
    return;
  }
  if (e.target.parentElement.id === "github") {
    console.log("github");
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        localStorage.setItem("user", JSON.stringify(user));
        window.location.pathname = "/";
      })
      .catch((error) => {
        console.error("ERROR: ", error);
      });
    return;
  }
}
