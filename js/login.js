const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", (event) => {
  event.preventDefault(); // prevenir envío predeterminado del formulario
  enviarDatos();
});
async function enviarDatos() {
  const usuario = document.querySelector("#usuario").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  const data = {
    userName: usuario,
    email: email,
    password: password,
  };

  try {
    const response = await fetch("http://localhost:3001/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error(error);
  }
}

const formLog = document.querySelector("#form-log");
formLog.addEventListener("submit", (event) => {
  event.preventDefault();
  logIn();
  if (logIn) {
    window.location.replace("./loged.html");
  }
});
const logIn = async () => {
  const userInput = document.querySelector("#user-input");
  const emailInput = document.querySelector("#email-input");
  const passInput = document.querySelector("#password-input");

  const data = {
    userName: userInput.value,
    email: emailInput.value,
    password: passInput.value,
  };
  try {
    const res = await fetch("http://localhost:3001/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resData = await res.json();
    console.log(resData);
    console.log("Usuario logeado");
  } catch (error) {
    console.log(error);
    console.log("Error al logear");
  }
};
