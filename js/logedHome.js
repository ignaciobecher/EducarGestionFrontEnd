const userId = localStorage.getItem("userId");
let body = document.querySelector("body");

const getQualifications = async () => {
  const res = await fetch(`http://localhost:3001/users/userHome/${userId}`);
  const qualifications = await res.json();
  const grades = qualifications.data.gradesId;
  for (let i = 0; i < grades.length; i++) {
    let div = document.createElement("div");
    div.textContent = grades[i].subject + grades[i].qualification;
    body.appendChild(div);
    // console.log(grades[i].subject);
    // console.log(grades[i].qualification);
  }
};

window.onload = () => {
  getQualifications();
};
