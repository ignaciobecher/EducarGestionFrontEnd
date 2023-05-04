const userId = localStorage.getItem("userId");
const studentName = document.getElementById("name");
const studentSurname = document.getElementById("surname");
const studentEmail = document.getElementById("email");
const studentAddress = document.getElementById("address");
const studentPhone = document.getElementById("phone");
const editBtn = document.getElementById("edit-info");
const saveBtn = document.getElementById("save-info");

//FUNCION PARA TRAER LA DATA DEL USUARIO
const getUserData = async () => {
  const res = await fetch(`http://localhost:3001/users/userHome/${userId}`);
  const userData = await res.json();

  //Elementos de la data
  const studName = userData.data.name;
  const studSurname = userData.data.surname;
  const studEmail = userData.data.email;
  const studAddress = userData.data.address;
  const studPhone = userData.data.phone;

  if (
    studName === "" ||
    studSurname === "" ||
    studAddress === "" ||
    studPhone === ""
  ) {
    alert("Por favor complete todos los campos");
  }

  console.log(studName, studSurname, studPhone, studEmail, studAddress);
};

//EJECUTAR AL CARGAR PAGINA
window.onload = () => {
  getUserData();
};

//BOTON EDITAR
editBtn.addEventListener("click", () => {
  studentName.removeAttribute("disabled", "");
  studentSurname.removeAttribute("disabled", "");
  studentEmail.removeAttribute("disabled", "");
  studentAddress.removeAttribute("disabled", "");
  studentPhone.removeAttribute("disabled", "");
});

const fillInfo = async () => {
  try {
    userInfo = {
      studentName: studentName.value,
      studentSurname: studentSurname.value,
      studentAddress: studentAddress.value,
      studentPhone: studentPhone.value,
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
    console.log("Datos actualizados");
  } catch (error) {
    console.log(error);
  }
};

saveBtn.addEventListener("click", () => {
  fillInfo();
});
