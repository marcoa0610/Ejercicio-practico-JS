function calcularBilletes() {  
    const cantidadRetiro = parseInt(document.getElementById("cantidadRetiro").value);
    const nombreUsuario = document.getElementById("nombreUsuario").value;

    const billetes100 = Math.floor(cantidadRetiro / 100);
    const billetes50 = Math.floor((cantidadRetiro % 100) / 50);
    const billetes20 = Math.floor(((cantidadRetiro % 100) % 50) / 20);
    const billetes10 = Math.floor((((cantidadRetiro % 100) % 50) % 20) / 10);
    const billetes5 = Math.floor(((((cantidadRetiro % 100) % 50) % 20) % 10) / 5);
    const billetes1 = (((cantidadRetiro % 100) % 50) % 20) % 10 % 5;

    document.getElementById("billetes100").innerHTML = `Billetes de 100: ${billetes100}`;
    document.getElementById("billetes50").innerHTML = `Billetes de 50: ${billetes50}`;
    document.getElementById("billetes20").innerHTML = `Billetes de 20: ${billetes20}`;
    document.getElementById("billetes10").innerHTML = `Billetes de 10: ${billetes10}`;
    document.getElementById("billetes5").innerHTML = `Billetes de 5: ${billetes5}`;
    document.getElementById("billetes1").innerHTML = `Billetes de 1: ${billetes1}`;

    document.getElementById("prueba").innerHTML=`
    <div class="alert alert-success alert-dismissible" role="alert"> 
    Hola ${nombreUsuario} tu retiro exitoso
        
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`;
    
}

const nombreUsuario = document.getElementById("nombreUsuario").value;
var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('Retiro')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = ''

  alertPlaceholder.append(wrapper)
}


document.getElementById("Retiro").addEventListener("click",calcularBilletes,alert);