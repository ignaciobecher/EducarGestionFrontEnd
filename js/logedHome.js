const list = document.createElement("ul");

const getQualifications = async () => {
  try {
    const res = await fetch(
      `https://backend-school-production.up.railway.app/students`
    );
    const data = await res.json();
    const grades = data.data.grade;
    grades.forEach((grade) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${grade.subject}:${grade.qualification}`;
      list.appendChild(listItem);
    });
    document.getElementById("ul-container").appendChild(list);
    console.log(grades);
    list.style.display = "grid";
    list.style.gridColumn = "2";
    list.style.gridAutoRows = "50px";
  } catch (error) {
    console.log(error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  getQualifications();
});
