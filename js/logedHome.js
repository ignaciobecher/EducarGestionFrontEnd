const userId = localStorage.getItem("userId");
console.log("El user id es:" + userId);

const getQualifications = async () => {
  const res = await fetch(`http://localhost:3001/students/${userId}`);
  const qualifications = await res.json();
  console.log(qualifications);
};

getQualifications();
