//variables
const formBusqueda = document.querySelector("#form-busqueda");
const inputNombre = document.querySelector("#inputNombre");
const inputModel = document.querySelector("#inputModelo");
const inputMovie = document.querySelector("#inputPelicula");
const boxTransformers = document.querySelector("#box-transformers");
document.addEventListener("DOMContentLoaded", ()=> {
    mostrarHTML(transformers);
});
function mostrarHTML(transformers){
    transformers.forEach(transformer => {
    const {nombre, modelo, peliculaName, descripcion, image} = transformers;
    const cardTransformer = document.createElement("div");
    cardTransformer.classList.add("col", "mb-3", "d-flex");
    cardTransformer.innerHTML = ` <div class="card bg-secundary flex-row rounded-3">
    <div class="w-50">
      <img src="https://vader.news/__export/1589721271978/sites/gadgets/img/2020/05/17/transformers_last_knight_vadernews.jpg_2069211169.jpg" class="img-fluid object-fit" alt="" />
    </div>
    <div class="card-body w-50">
      <h2 class="card-text mb-0 text-capitalize">optimus prime</h2>
      <p class="card-text mb-0 text-capitalize">autobot</p>
      <p class="card-text mb-0 text-capitalize">transformers</p>
      <p class="card-text mb-0">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Deserunt, quidem.
      </p>
    </div>
  </div>`


    });
}