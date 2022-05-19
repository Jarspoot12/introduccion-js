const imgPrincipal = document.querySelector("#pantalla");
const txt1 = document.querySelector("#titulo");
const txt2 = document.querySelector("p");
const botonera = document.querySelector("#botonera")

botonera.addEventListener("click", cambiar);

db = [
    {id: 1,
    titulo: "Blanca",
    img: "img1.jpg",
    descrip: " ipsum Loremdolor, sit amet consectetur adipisicing elit. Obcaecati consequatur porro distinctio? Quaerat facere quasi ut omnis. Provident, quia deleniti."},
    {id: 2,
    titulo: "Morada",
    img: "img2.jpg",
    descrip: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, blanditiis eius facilis saepe quos quis."}, 
    {id: 3,
    titulo: "RosaPink",
    img: "img3.jpg",
    descrip: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, enim."}

];

function cambiar(e){
    let informacion = db.filter(item => item.id == e.target.textContent);
    informacion.forEach(element =>  {
        imgPrincipal.setAttribute("src", element.img);
        txt1.textContent = element.titulo;
        txt2.textContent = element.descrip;
    });
}
