const logForm = document.querySelector("#login-form");
export let userId = null;
const list = document.createElement("ul");

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
      "http://localhost:3001/users/login",
      requestOptions
    );
    const data = await response.json();

    console.log(data.data.user._id);
    userId = data.data.user._id;
    console.log("Usuario logeado");

    window.location.replace("./logedHomepage.html");
  } catch (error) {
    console.log("Error:", error);
  }
});
