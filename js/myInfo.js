//Constante del userId
const userId = localStorage.getItem("userId");
//Constantes con los elementos html
const studentName = document.getElementById("name");
const studentSurname = document.getElementById("surname");
const studentEmail = document.getElementById("email");
const studentAddress = document.getElementById("address");
const studentPhone = document.getElementById("phone");
const studentAge = document.getElementById("age");
const editBtn = document.getElementById("edit-info");
const saveBtn = document.getElementById("save-info");
const studentSchool = document.getElementById("school");

//FUNCION PARA TRAER LA DATA DEL USUARIO
const getUserData = async () => {
  const res = await fetch(`http://localhost:3001/users/userHome/${userId}`);
  const userData = await res.json();

  //Elementos de la data
  const studName = userData.data.name;
  const studSurname = userData.data.surname;
  const studAddress = userData.data.address;
  const studPhone = userData.data.phone;
  const studAge = userData.data.age;
  const studSchool = userData.data.userSchool[0].name;

  //Llenar los inputs con los datos de la bd
  studentName.value = studName;
  studentSurname.value = studSurname;
  studentAddress.value = studAddress;
  studentPhone.value = studPhone;
  studentAge.value = studAge;
  studentSchool.value = studSchool;

  //Validar si los inputs estan vacios
  if (
    studName === "" ||
    studSurname === "" ||
    studAddress === "" ||
    studPhone === ""
  ) {
    alert("Actualice sus datos");
  }
  desableInput();
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

//FUNCION PARA ACTIVAR LOS INPUTS
const enableInput = () => {
  studentName.removeAttribute("disabled", "");
  studentSurname.removeAttribute("disabled", "");

  studentAddress.removeAttribute("disabled", "");
  studentPhone.removeAttribute("disabled", "");
  studentAge.removeAttribute("disabled", "");
};

//FUNCION PARA DESACTIVAR LOS INPUTS
const desableInput = () => {
  studentName.setAttribute("disabled", "");
  studentSurname.setAttribute("disabled", "");
  studentAddress.setAttribute("disabled", "");
  studentPhone.setAttribute("disabled", "");
  studentAge.setAttribute("disabled", "");
  studentSchool.setAttribute("disabled", "");
};

//BOTON GUARDAR DATOS
saveBtn.addEventListener("click", async () => {
  await fillInfo();
  await fillInfo();
  desableInput();
});

//BOTON EDITAR
editBtn.addEventListener("click", () => {
  enableInput();
});

//EJECUTAR AL CARGAR PAGINA
window.onload = () => {
  getUserData();
};
