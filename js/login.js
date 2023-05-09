const logForm = document.querySelector("#form1");
const btnLogin = document.getElementById("btn-login");
let userId;

const logUser = async () => {
  const userInput = document.getElementById("email").value;
  const passwordInput = document.getElementById("password").value;
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
    userId = data.data.user._id;
    console.log("Usuario logeado ok", userId);
    // Guardar el token en el local storage del navegador
    localStorage.setItem("token", data.data.token);
    localStorage.setItem("userId", userId);
    window.location.href="./dashboard.html"
  } catch (error) {
    console.log("Error:", error);
    window.alert("Error al logear, intente nuevamente!");
  }
};

btnLogin.addEventListener("click", async (e) => {
  e.preventDefault();
  await logUser();
});
