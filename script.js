function cambiarModo() {
  const body = document.getElementById("modo");

  if (body.classList.contains("bg-light")) {
    body.classList.remove("bg-light");
    body.classList.add("bg-dark", "text-white");
    localStorage.setItem("modo", "oscuro");
  } else {
    body.classList.remove("bg-dark", "text-white");
    body.classList.add("bg-light");
    localStorage.setItem("modo", "claro");
  }
}

window.onload = () => {
  const modoGuardado = localStorage.getItem("modo");
  if (modoGuardado === "oscuro") {
    cambiarModo();
  }
};
