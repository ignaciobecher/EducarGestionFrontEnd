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

  for (let i = 0; i < subject.length; i++) {
    const subjects = subject[i];
    const element = document.createElement("td");
    element.textContent = subjects;

    tbody.appendChild(element);
  }
};

window.onload = () => {
  getGrades();
};
