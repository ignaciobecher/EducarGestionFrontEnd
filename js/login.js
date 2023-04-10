const logForm = document.querySelector("#login-form");
logForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const userData = {
    userName: logForm.username.value,
    email: logForm.email.value,
    password: logForm.password.value,
  };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  };

  try {
    const response = await fetch(
      "http://localhost:3001/users/register",
      requestOptions
    );
    const data = await response.json();
    console.log(data);
    console.log("Usuario logeado");
  } catch (error) {
    console.log("Error:", error);
  }
});
