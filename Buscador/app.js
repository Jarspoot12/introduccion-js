//variables
const formBusqueda = document.querySelector("#form-busqueda");
const inputName = document.querySelector("#inputNombre");
const inputUniversity = document.querySelector("#inputUniversidad");
const inputArea = document.querySelector("#inputArea1");
const inputCost = document.querySelector("#inputCosto");
const boxUniversity = document.querySelector("#box-university");

const datosBusqueda = {
        nombre: '',
        universidad: '',
        area: '', 
        universidadId: ''
}
document.addEventListener('DOMContentLoaded', () => {
    mostrarHTML(universidadesdb);
});
formBusqueda.addEventListener('submit', (e)=>{
    e.preventDefault();

    datosBusqueda.nombre = inputName.value.toLowerCase();
    datosBusqueda.universidad = inputUniversity.value;
    datosBusqueda.area = inputArea.value;
    datosBusqueda.universidadId = inputCost.value;

    filtrarUniversidades();
    formBusqueda.reset();
});
function mostrarHTML(universidadesdb){
    limpiarHTML();
    universidadesdb.forEach(uni => {
        const {nombre, universidad, area, enlace, image} = uni;
        
        const cardUniversity = document.createElement("div");
        cardUniversity.classList.add("col", "mb-3", "d-flex");
        cardUniversity.innerHTML = ` <div class="card bg-light flex-row rounded-3">
        <div class="w-50">
            <img src="${image}" class="img-fluid object-fit" alt="">
        </div>
        <div class="card-body text-body w-50 text-center my-auto">
            <h2 class="card-text mb-1 text-capitalize">${nombre}</h2>
            <p class="card-text my-1 text-capitalize">${universidad}</p>
            <p class="card-text mt-0 text-capitalize">Área: ${area}</p>
            <a class= "btn btn-dark" href="${enlace}">Conocer más</a>
        </div>
    </div>`
    boxUniversity.appendChild(cardUniversity);
    });
}
function filtrarUniversidades(){
    limpiarHTML();

    const resultado = universidadesdb.filter(filtrarName).filter(filtrarUniversidad).filter(filtrarArea).filter(filtrarCosto);

    if(resultado.length){
        const hayContent = Object.values(datosBusqueda).filter((e) => e);
        if(hayContent.length){
            mostrarHTML(resultado);
        }
        else{
            sinResultado("No hay elementos por buscar");
        }
    }
    else{
        sinResultado("Tu búsqueda no arroja resultados");
    }

   
}

function sinResultado(mensaje){
    limpiarHTML();
    const sinResultado = document.createElement("div");
    sinResultado.classList.add('bg-danger','text-white','border-danger','p-4', "w-100",'text-center');
    sinResultado.textContent = mensaje;
    boxUniversity.appendChild(sinResultado);
}
function limpiarHTML(){
    while(boxUniversity.firstChild){
        boxUniversity.firstChild.remove();
    }
}
function filtrarName(uni){
    const {nombre} = datosBusqueda;
    if(nombre){
        return uni.nombre == nombre;
    }
    else{
        return uni;
    }
}
function filtrarUniversidad(uni){
    const {universidad} = datosBusqueda;
    if(universidad){
        return uni.universidad == universidad;
    }
    else{
        return uni;
    }
}  
function filtrarArea(uni){
    const {area} = datosBusqueda;
    if(area){
        return uni.area == area;
    }
    return uni;
}
function filtrarCosto(uni){
    const {universidadId} = datosBusqueda;
    if(universidadId){
        return uni.universidadId == universidadId;
    }
    else{
        return uni;
    }
}
