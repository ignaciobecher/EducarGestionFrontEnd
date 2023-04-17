const list = document.createElement("ul");
import jwtDecode from "../node_modules/jwt-decode";

const getQualifications = async () => {
  try {
    const token = localStorage.getItem("token");
    const tokenData = jwtDecode(token);
    const userId = tokenData.user._id;

    const res = await fetch(`http://localhost:3001/students/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    console.log(userId);
    console.log(data);
    const grades = data.data.grade;
    console.log(grades);
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
