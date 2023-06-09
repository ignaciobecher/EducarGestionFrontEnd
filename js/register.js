import { saludar } from "./login.js";

const registerForm = document.querySelector("#register-form");
registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const userData = {
    userName: registerForm.username.value,
    email: registerForm.email.value,
    password: registerForm.password.value,
  };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  };

  try {
    const response = await fetch(
      "https://backend-school-production.up.railway.app/users/register",
      requestOptions
    );
    const data = await response.json();
    console.log(data);
    window.location.replace("./login.html");
  } catch (error) {
    console.log("Error:", error);
  }
});
