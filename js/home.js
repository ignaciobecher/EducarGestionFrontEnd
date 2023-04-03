const btnShow = document.getElementById("btn-show");
const btnAdd = document.getElementById("btn-add");
const form = document.querySelector("form");

//METODO GET DEL FETCH
const getStudentsAsync = async () => {
  const res = await fetch("http://localhost:3001/students");
  const data = await res.json();
  return data;
};

//!!!!!!!!!!!!!FUNCIONES!!!!!!!!!!!!!//
//FUNCION SHOW STUDENTS
// const showStudents = async () => {
//   const datos = await getStudentsAsync(); //me devuelve los datos del get
//   const objectsOfJson = datos.data; //accedo al array data donde se encuentran los objetos
//   //console.log(objectsOfJson[1].name);
//   for (let i = 0; i < objectsOfJson.length; i++) {
//     const objects = objectsOfJson[i];
//     const bodyHtml = document.body;
//     const separator = document.createElement("h4");
//     separator.textContent = "********************************";
//     bodyHtml.appendChild(separator);
//     for (let propiedad in objects) {
//       if (
//         propiedad !== "_id" &&
//         propiedad !== "createdAt" &&
//         propiedad !== "updatedAt"
//       ) {
//         const bodyHtml = document.body;
//         const propiedadHTML = document.createElement("p");
//         propiedadHTML.textContent = `${propiedad}: ${objects[propiedad]}`;
//         bodyHtml.appendChild(propiedadHTML);
//       }
//     }
//   }
// };
// //FUNCION CREATE STUDENT
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const formData = new FormData(form);
//   const data = JSON.stringify(Object.fromEntries(formData));
//   fetch("http://localhost:3001/students", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: data,
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       cleanFields();
//     })

//     .catch((error) => console.error(error));
// });

//!!!!!!!!!!!EJECUCION!!!!!!!!!!!!!!!!!//
//EJECUCION DE LAS FUNCIONES
btnShow.addEventListener("click", showStudents);
btnAdd.addEventListener("click", createStudent);
