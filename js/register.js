const registerForm = document.querySelector("#register-form");
const btnRegister = document.getElementById("btn-register");

const registerUser = async () => {
  const userData = {
    userName: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  try {
    const response = await fetch("http://localhost:3001/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    const user = await response.json();
    console.log("Usuario registrado");
    window.location.href = "./login.html";
  } catch (error) {
    console.log(error);
    console.log("Error al registrar");
  }
};

btnRegister.addEventListener("click", async (e) => {
  e.preventDefault();
  await registerUser();
});
