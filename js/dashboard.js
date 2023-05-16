const userId = localStorage.getItem("userId");
const mainTittle = document.getElementById("mainTittle");
const mainContent = document.getElementById("main-contents");
const myInfo = document.getElementById("my-info");
const home = document.getElementById("home");
const qualisMenu = document.getElementById("qualis");

//FUNCION NAVBAR
$(".nav-toggle").click(function (e) {
  e.preventDefault();
  $("html").toggleClass("openNav");
  $(".nav-toggle").toggleClass("active");
});

//!!!!!!!!!!!!!!SECCION HOME!!!!!!!!!!!!!!!!!
const showHomePage = async () => {
  const res = await fetch(`http://localhost:3001/users/userHome/${userId}`);
  const userData = await res.json();
  const userName = userData.data.name;
  if (userName === "" || !userName) {
    mainContent.innerHTML = `<div class="new-wrapper">
    <div id="main">
      <div id="main-contents">
        <h1 id="mainTittle">Bienvenido de nuevo </h1>
  
        <p class="intro">
          <strong
            >En tu dashboard encontraras todos los datos referidos a tu cursada.</strong
          >. Si accediste desde una computadora, presiona las tres lineas en el recuadro blanco o simplemente pasa tu mouse por encima para ver tus datos.
        </p>
  
        
  
        <p>
          Si accedes desde un dispositivo movil, presiona el recuadro blanco y accede a toda tu informacion academica.
        </p>
      </div>
    </div>
  </div>`;
  } else {
    mainContent.innerHTML = `<div class="new-wrapper">
    <div id="main">
      <div id="main-contents">
        <h1 id="mainTittle">Bienvenido de nuevo ${userName} </h1>
  
        <p class="intro">
          <strong
            >En tu dashboard encontraras todos los datos referidos a tu cursada.</strong
          > Si accediste desde una computadora, presiona las tres lineas en el recuadro blanco o simplemente pasa tu mouse por encima para ver tus datos.
        </p>
        <p>
          Si accedes desde un dispositivo movil, presiona el recuadro blanco y accede a toda tu informacion academica.
        </p>
      </div>
    </div>
  </div>`;
  }
};

//!!!!!!!!!!!!!!MOSTRAR MIS DATOS!!!!!!!!!!!!!!!!!!!
//INFORMACION PERSONAL
const showPersonalInfo = async () => {
  const res = await fetch(`http://localhost:3001/users/userHome/${userId}`);
  const userData = await res.json();
  const userName = userData.data.name;
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

  //Constantes con los elementos html
  const studentName = document.getElementById("name");
  const studentSurname = document.getElementById("surname");
  const studentAddress = document.getElementById("address");
  const studentPhone = document.getElementById("phone");
  const studentAge = document.getElementById("age");

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
  //FUNCION PARA ACTUALIZAR LOS DATOS
  const fillInfo = async () => {
    try {
      userInfo = {
        name: studentName.value,
        surname: studentSurname.value,
        address: studentAddress.value,
        phone: studentPhone.value,
        age: studentAge.value,
      };
      const response = await fetch(
        `http://localhost:3001/users/userData/${userId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userInfo),
        }
      );
      const data = await response.json();
      window.alert("Datos actualizados correctamente");
    } catch (error) {
      console.log(error);
    }
  };

  //DESHABILITAR INPUTS
  btnSave.addEventListener("click", () => {
    fillInfo();
    fillInfo();
    disableInputs();
  });
  //HABILITAR BOTONES
  btnEdit.addEventListener("click", () => {
    enableInputs();
  });
};

document.addEventListener("DOMContentLoaded", () => {
  showHomePage();
});

//!!!!!!!!!!!!!!!!!!!CALIFICACIONES
const showQualifications = async () => {
  const grades = await fetch(`http://localhost:3001/users/userHome/${userId}`);
  const res = await grades.json();
  qualis = res.data.gradesId; //array de objetos

  const subject = qualis.map((obj) => obj.subject); //array de materias
  const qualifications = qualis.map((obj) => obj.qualification); //array de calificaciones

  for (let i = 0; i < subject.length; i++) {
    const subjects = subject[i];
    mainContent.innerHTML = `
    <h1>Calificaciones </h1>
    <div class="container1" id="container1">
      <div id="subjects-div">
        <h2 id="subjects">Materias</h2>
        <p>Lengua</p>
      </div>

      <div id="grades-div">
        <h2 id="grades">Notas</h2>
        <p id="p-qualis"></p>
      </div>
    </div>`;
  }
};

//!!!!!!!!CAMBIO ENTRE MENUS
home.addEventListener("click", showHomePage);
myInfo.addEventListener("click", showPersonalInfo);
qualisMenu.addEventListener("click", showQualifications);
