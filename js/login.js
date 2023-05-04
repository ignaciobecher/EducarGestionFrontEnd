const logForm = document.querySelector("#login-form");
let userId;
const list = document.createElement("ul");

logForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const userData = {
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
    console.log(data);
    console.log(data.data.user._id);
    userId = data.data.user._id;
    console.log("Usuario logeado");
    // Guardar el token en el local storage del navegador
    localStorage.setItem("token", data.data.token);
    localStorage.setItem("userId", userId);

    window.location.replace("./logedHomepage.html");
  } catch (error) {
    console.log("Error:", error);
    window.alert("Error al logear, intente nuevamente!");
  }
});
