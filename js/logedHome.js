const userId = localStorage.getItem("userId");
const intro = document.getElementById("intro");

//FUNCION QUE CARGA LA PAGINA CON LOS DATOS DEL USUARIO Y MUESTRA SU HOMEPAGE
const getIntro = async () => {
  const res = await fetch(`http://localhost:3001/users/userHome/${userId}`);
  const home = await res.json();
  const grades = home.data.gradesId;
  const nameOfUser = "Bienvenido de nuevo " + home.data.name;
  let name = document.createElement("h1");
  name.textContent = nameOfUser;
  intro.appendChild(name);
};

//FUNCION QUE MUESTRA LA FECHA
const showDate = () => {
  const date = document.getElementById("date");
  let todaysDate = new Date();
  date.textContent = todaysDate.toLocaleDateString("es-ES");
};

window.onload = () => {
  getIntro();
  showDate();
};
