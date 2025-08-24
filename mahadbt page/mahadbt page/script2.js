const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("#signup-link");
const loginLink = document.querySelector("#login-link");
const forgotPasswordLink = document.querySelector("#forgot-password");

// Function to switch to signup form
function showSignupForm() {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
}

// Function to switch to login form
function showLoginForm() {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
}

// Handle click to switch to signup form
signupBtn.onclick = showSignupForm;

// Handle click to switch to login form
loginBtn.onclick = showLoginForm;

// Handle click on signup link to switch to signup form and prevent default link behavior
signupLink.onclick = (event) => {
  event.preventDefault(); // Prevent default link behavior
  showSignupForm(); // Switch to signup form
};

// Handle click on login link to switch to login form and prevent default link behavior
loginLink.onclick = (event) => {
  event.preventDefault(); // Prevent default link behavior
  showLoginForm(); // Switch to login form
};

// Handle click on forgot password link to switch to signup form and prevent default link behavior
forgotPasswordLink.onclick = (event) => {
  event.preventDefault(); // Prevent default link behavior
  showSignupForm(); // Switch to signup form
};
