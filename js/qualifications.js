//Constante del userId
const userId = localStorage.getItem("userId");
//Elementos html
const table = document.getElementById("table");
const tbody = document.getElementById("t-body");

const getGrades = async () => {
  const grades = await fetch(`http://localhost:3001/users/userHome/${userId}`);
  const res = await grades.json();
  qualis = res.data.gradesId; //array de objetos

  const subject = qualis.map((obj) => obj.subject); //array de materias
  const qualifications = qualis.map((obj) => obj.qualification); //array de calificaciones

  const tableBody = document.getElementById("t-body"); // Obtener la referencia al cuerpo de la tabla

  for (let i = 0; i < subject.length; i++) {
    const subjects = subject[i];

    // Crear una nueva fila
    const row = document.createElement("tr");

    // Crear la columna para el subject
    const subjectColumn = document.createElement("td");
    subjectColumn.textContent = subjects;
    row.appendChild(subjectColumn);

    // Crear una nueva columna para la calificación
    const qualificationColumn = document.createElement("td");
    qualificationColumn.textContent = qualifications[i];
    row.appendChild(qualificationColumn);

    // Agregar la fila al cuerpo de la tabla
    tableBody.appendChild(row);
  }
};

window.onload = () => {
  getGrades();
};
