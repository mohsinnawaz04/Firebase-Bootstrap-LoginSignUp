import {
  auth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "../Firebase/firebaseConfig.js";

var signUpForm = document.getElementById("signUpFormer");
let email = document.querySelector("#floatingInput");
let password = document.querySelector("#floatingPassword");
let Confirmpassword = document.querySelector("#floatingPassword2");
let submitBtn = document.getElementById("submitBtn");

signUpForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  console.log("SignUp");

  if (email.value.trim() === "") {
    alert("Please Enter Email");
    return;
  }
  if (password.value !== Confirmpassword.value) {
    alert("Passwords do not match");
    return;
  }

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      email.value = "";
      password.value = "";
      Confirmpassword.value = "";
      sendVerificationToEmail(userCredential.user);
    })
    .catch((error) => {
      console.error("ERROR: ", error);
    });
}

function sendVerificationToEmail(user) {
  sendEmailVerification(user).then(() => {
    // Email verification sent!
    // ...
  });
}
