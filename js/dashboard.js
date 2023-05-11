const userId = localStorage.getItem("userId");
const mainTittle = document.getElementById("mainTittle");
$(".nav-toggle").click(function (e) {
  e.preventDefault();
  $("html").toggleClass("openNav");
  $(".nav-toggle").toggleClass("active");
});

console.log(userId);

const showMainInfo = () => {
  mainTittle.innerHTML = userId;
};
