const userId = localStorage.getItem("userId");
const mainTittle = document.getElementById("mainTittle");
const mainContent = document.getElementById("main-contents");

//FUNCION NAVBAR
$(".nav-toggle").click(function (e) {
  e.preventDefault();
  $("html").toggleClass("openNav");
  $(".nav-toggle").toggleClass("active");
});

//INFORMACION DE INICIO
const showMainInfo = async () => {
  const res = await fetch(`http://localhost:3001/users/userHome/${userId}`);
  const userData = await res.json();
  mainTittle.innerHTML = "Bienvenido de nuevo " + userData.data.name;
};

//INFORMACION PERSONAL
const showPersonalInfo = async () => {
  const res = await fetch(`http://localhost:3001/users/userHome/${userId}`);
  const userData = await res.json();
  mainContent.innerHTML = `
  <div class="mis-datos">
        <h2>Mis datos</h2>
        <p>Nombre: <input type="text" id="name" value="${userData.data.name}" /></p>
        <p>
          Apellido:
          <input type="text" id="surname" value="${userData.data.surname}" />
        </p>

        <p>Direccion: <input type="text" id="address" value="${userData.data.address}" /></p>
        <p>Telefono: <input type="text" id="phone" value="${userData.data.phone}" /></p>
        <p>Institucion: <input type="text" id="school" value="" /></p>

        <p>
          Edad:
          <input type="text" id="age" value="${userData.data.age}" />
        </p>
        <button id="edit-info">Editar</button>
        <button id="save-info">Guardar</button>
    </div>`;
  //SELECCION DE LOS BOTONES
  const btnSave = document.getElementById("save-info");
  const btnEdit = document.getElementById("edit-info");

  //FUNCION DESHABILITAR INPUTS
  const disableInputs = () => {
    const inputs = document.querySelectorAll(".mis-datos input");
    inputs.forEach((input) => {
      input.disabled = true;
    });
  };

  //FUNCION DESHABILITAR INPUTS
  const enableInputs = () => {
    const inputs = document.querySelectorAll(".mis-datos input");
    inputs.forEach((input) => {
      input.disabled = false;
    });
  };

  //DESHABILITAR INPUTS
  btnSave.addEventListener("click", () => {
    disableInputs();
  });
  //HABILITAR BOTONES
  btnEdit.addEventListener("click", () => {
    enableInputs();
  });
};

window.addEventListener("load", () => {
  showPersonalInfo();
});
