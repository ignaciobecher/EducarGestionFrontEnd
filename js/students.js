async function obtenerEstudiantes() {
  try {
    const response = await fetch(
      "https://backend-school-production.up.railway.app/students"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

obtenerEstudiantes();
