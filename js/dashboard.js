const userId = localStorage.getItem("userId");
const mainTittle = document.getElementById("mainTittle");
const mainContent = document.getElementById("main-contents");
$(".nav-toggle").click(function (e) {
  e.preventDefault();
  $("html").toggleClass("openNav");
  $(".nav-toggle").toggleClass("active");
});

console.log(userId);

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
  <p>Nombre: <input type="text" id="name" value="" /></p>
  <p>
    Apellido:
    <input type="text" id="surname" value="" />
  </p>

  <p>Direccion: <input type="text" id="address" value="" /></p>
  <p>Telefono: <input type="text" id="phone" value="" /></p>
  <p>Institucion: <input type="text" id="school" value="" /></p>

  <p>
    Edad:
    <input type="text" id="age" value="" />
  </p>
  <button id="edit-info">Editar</button>
  <button id="save-info">Guardar</button>
</div>`;
};

window.addEventListener("load", () => {
  showPersonalInfo();
});
