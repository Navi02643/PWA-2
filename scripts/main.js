if ("serviceWorker" in navigator) {
  console.log("Puedes usar los SW en tu navegador");
  navigator.serviceWorker
    .register("../scripts/SW.js")
    .then((res) => console.log("ServiceWorker cargado correctamente", res))
    .catch((err) =>
      console.log("ServiceWorker no se ha podido registrar", err)
    );
} else {
  console.log("No puedes usar los SW en su navegador");
}
