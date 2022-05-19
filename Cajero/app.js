//variables
const nombreUser = document.getElementById("nombre");
const pass = document.getElementById("pass");
const formBusqueda = document.querySelector("#form-busqueda");
const boxSaldo = document.getElementById("movimientos");
const contenidoBody = document.querySelector("#contenido-body");

//base de datos

var cuentas = [
    { nombre: 'mali torres', saldo: 200, password: "98" },
    { nombre: 'gera sanchez', saldo: 290, password: "S1292an23chez" },
    { nombre: 'maui morales', saldo: 67, password: "Mora99842000."}
  ];

datosBusqueda = {
    nombreUsuario: "",
    passUsuario: ""
}
//detonador
formBusqueda.addEventListener('submit', (e)=>{
    e.preventDefault();

    datosBusqueda.nombreUsuario = nombreUser.value.toLowerCase();
    datosBusqueda.passUsuario = pass.value;

    filtrarUsuario();

    formBusqueda.reset();
});

//función principal

function filtrarUsuario(){
    var usuario = cuentas.filter(filtrarDatos); //cuando es true se agrega al array
    const hayUser = Object.values(datosBusqueda.nombreUsuario);
    const hayPass = Object.values(datosBusqueda.passUsuario);
    if(usuario.length){ 
        contenidoBody.style.display = "none";
        usuario.forEach(element =>{
            let saldoUser = document.getElementById("movimientos");
            let div = document.createElement("div");
            div.innerHTML = `  <h1 class="text-center text-light pt-5 consultaSalida">¡HOLA, \n${element.nombre.toUpperCase()}!</h1>
            <h2 class="text-center text-white-50 pt-2 consultaSalida">¿Qué deseas realizar?</h2>
            <div class="d-flex container mt-5 justify-content-around flex-wrap">
                <button type="button" class="consultaSalida btn-outline-secondary btn my-1 mx-3 btn-w d-flex justify-content-center align-items-center" id="consultarSaldo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16">
                        <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"/>
                    </svg>
                    <div class="mx-1 font-btn">Consultar saldo</div>
                </button>

                <button type="button" class="consultaSalida btn d-flex my-1 mx-3 btn-w align-items-center justify-content-center btn-outline-primary" id="retirar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cash-stack" viewBox="0 0 16 16">
                        <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                        <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z"/>
                    </svg>
                    <div class="mx-1 font-btn">Retirar</div>
                </button>

                <button type="button" class="consultaSalida btn d-flex my-1 mx-3 btn-w align-items-center justify-content-center btn-outline-primary" id="depositar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cash" viewBox="0 0 16 16">
                        <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                        <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z"/>
                    </svg>
                    <div class="mx-1 font-btn">Depositar</div>
                </button>

                <button type="button" class="consultaSalida btn btn-w my-1 d-flex justify-content-center align-items-center btn-outline-warning mx-3" id="salir">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                    <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                </svg>
                <div class="mx-1 font-btn">Salir</div>
                </button>
            </div>`            
            saldoUser.appendChild(div);
            let consultarSaldo = document.getElementById("consultarSaldo");
            let exit = document.getElementById("salir");
            let retiro = document.getElementById("retirar");
            let deposito = document.getElementById("depositar");
            exit.addEventListener("click", salir);
            deposito.addEventListener("click", depositar);
            consultarSaldo.addEventListener("click", consultar);
            retiro.addEventListener("click", retirar);

        });

    }
    else{
        if(!hayUser.length && hayPass.length || !hayPass.length && !hayUser.length || hayUser.length && !hayPass.length){
        alert("Llene todos los campos");
             /*console.log(usuario.length); debe ser 0*/
        }
        else{
            alert("Usuario o contraseña incorrecta")
        }
    }    
}
//botones auxiliares
function salir(){
        while(boxSaldo.firstChild){
            boxSaldo.firstChild.remove();
        }
        contenidoBody.style.display = "block";
}
function clean(){
    while(cantidad.firstChild){
        cantidad.firstChild.remove();

    }
}

//datos
function datos(){
    return usuario = cuentas.filter(filtrarDatos);  //cuando es true se agrega al array
}
//movimientos
function depositar(){
    clean();
    let cantidad = document.getElementById("cantidad");
    let  boxCantidad = document.createElement("div");
    boxCantidad.innerHTML = ` 
    <div class="container mt-4 d-flex flex-column justify-content-center align-items-center">
        <label class="my-1 text-white-50 consultaSalida">Cantidad</label>
        <input id="monto" class="consultaSalida my-1 input text-light" autocomplete="off"></input>
    </div>
    <div class="w-100 mt-3 text-center">
        <button type="button" class="btn btn-outline-secondary" id="listo">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
            </svg>
        </button>
    </div>`
    cantidad.appendChild(boxCantidad);
    let ok = document.getElementById("listo")
    ok.addEventListener("click", depositarListo)
}
function retirar(){
    clean();
    let cantidad = document.getElementById("cantidad");
    let  boxCantidad = document.createElement("div");
    boxCantidad.innerHTML = ` 
    <div class="container mt-4 d-flex flex-column justify-content-center align-items-center">
        <label class="my-1 text-white-50 consultaSalida">Cantidad</label>
        <input id="monto" class="consultaSalida my-1 input text-light" autocomplete="off"></input>
    </div>
    <div class="w-100 mt-3 text-center">
        <button type="button" class="btn btn-outline-secondary" id="listo">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
            </svg>
        </button>
    </div>`
    cantidad.appendChild(boxCantidad);
    let ok = document.getElementById("listo")
    ok.addEventListener("click", retirarListo)
}
function consulta(){
    let cantidad = document.getElementById("cantidad");
    let  boxCantidad = document.createElement("div");
    boxCantidad.innerHTML = ` 
   <div class="mt-3 consultaSalida text-light w-100 text-center">Su saldo actual es: $${usuario[0].saldo}</div>
   <div class="w-100 mt-3 text-center">
        <button type="button" class="btn btn-outline-secondary" id="listo">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
            </svg>
        </button>
    </div>`
    cantidad.appendChild(boxCantidad);
}
function consultar(){
    clean();
    datos();
    consulta();
    
    let ok = document.getElementById("listo")
    ok.addEventListener("click", consultarListo)
}
//detonadores de movimientos
function depositarListo(){
    let monto = document.getElementById("monto");
    datos();
    cuSaldo = Number(usuario[0].saldo);
    cuMonto = Number(monto.value)
    console.log(cuSaldo);
    console.log(cuMonto);
    cuSaldo += cuMonto;
    if(cuSaldo>990){
        cuSaldo-= cuMonto;
        clean();
        let cantidad = document.getElementById("cantidad");
        let  boxCantidad = document.createElement("div");
        boxCantidad.innerHTML = ` 
        <div class="alert mx-5 mt-4 alert-danger d-flex justify-content-center align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-octagon" viewBox="0 0 16 16">
            <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"/>
            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
        </svg>   
         <div class="text-center mx-2">
           Su depósito excede el límite
        </div>
        </div>
        <div class="w-100 text-center">
         <button type="button" class="btn btn-outline-secondary" id="listo">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
            </svg>
         </button>     
        </div>`
        cantidad.appendChild(boxCantidad);
        let ok = document.getElementById("listo")
        ok.addEventListener("click", consultarListo)
    }
    else{

    usuario[0].saldo = cuSaldo;
    clean();
    consulta();
    let ok = document.getElementById("listo")
    ok.addEventListener("click", consultarListo)
    }
}
function retirarListo(){
    let monto = document.getElementById("monto");
    datos();
    cuSaldo = Number(usuario[0].saldo);
    cuMonto = Number(monto.value)
    console.log(cuSaldo);
    console.log(cuMonto);
    cuSaldo -= cuMonto;
    if(cuSaldo<10){
        cuSaldo+= cuMonto;
        clean();
        let cantidad = document.getElementById("cantidad");
        let  boxCantidad = document.createElement("div");
        boxCantidad.innerHTML = ` 
        <div class="alert mx-5 mt-4 alert-danger d-flex justify-content-center align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-octagon" viewBox="0 0 16 16">
            <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"/>
            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
        </svg>   
         <div class="mx-2 text-center">
           Fondos insuficientes
        </div>
        </div>
        <div class="w-100 text-center">
            <button type="button" class="btn btn-outline-secondary" id="listo">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                </svg>
            </button>         
        </div>`
        cantidad.appendChild(boxCantidad);
        let ok = document.getElementById("listo")
        ok.addEventListener("click", consultarListo)

        }
    else{
    
    usuario[0].saldo = cuSaldo;
    clean();
    consulta();
    let ok = document.getElementById("listo")
    ok.addEventListener("click", consultarListo)

    }
    
}
function consultarListo(){
    clean();
}
//filtro

cuentas.forEach(user=> {
    const {nombre, password} = user;
});
function filtrarDatos(user){
    const {nombreUsuario, passUsuario} = datosBusqueda;
    if(nombreUsuario && passUsuario){
      /*     pruebas de los valores booleanos
        console.log(user.nombre == nombreUsuario);
        console.log( user.password == passUsuario);
        console.log("el return es" , user.nombre == nombreUsuario && user.password == passUsuario)
       */
        return user.nombre == nombreUsuario && user.password == passUsuario;
    }

}