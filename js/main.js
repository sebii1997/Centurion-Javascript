
let usuarioRegistrado = "Sebastian centurion";
function ingreso(){
    let ingresar = false;
    for (let i = 0; i >= 0; i--){
        let ingresoUsuario = prompt("Ingresa el usuario registrado por favor");
        if(ingresoUsuario === usuarioRegistrado){
            alert("Bienvenido Sebastian en que te podemos ayudar");
            ingresar = true;
            break;
        }else{
            alert("Bienvenido usuario")
        }
    }

    return ingresar;
}

let exito = ingreso();

if(exito){
    let turno = "13.10.2022";
    let opciones = prompt("Elegi las siguientes opciones: \n1 - Fecha prevista de turno. \n2 - Solicitar turno. \n3 - Cambiar fecha. \n4 - Para salir.");

    while (opciones != 4) {
        switch (opciones) {
            case "1":
                alert("Tu fecha prevista es " + turno);
                break;
            case "2":
                let profesional = prompt("Selecciona el profesional: \n1 Odontologo \n2 Oftalmologo \n3 Pediatra");
                if(profesional > 3){
                    alert("No disponemos de fechas");
                }else{
                    alert("El profesional tiene fecha disponible");
                }
                break;
            case "3":
                let fecha = prompt("Seleccione la fecha disponible: \n 20.10.2022 \n 01.11.2022 \n 10.11.2022");
                alert("Tu nueva fecha es " + fecha)

        
            default:
                alert("Opcion no valida");
                break;
        }
        opciones = prompt("Elegi las siguientes opciones: \n1 - Fecha prevista de turno. \n2 - Solicitar turno. \n3 - Cambiar fecha. \n4 - Para salir.");
    }
}else{
    alert("Por favor verifique el usuario ingresado para poder continuar, o comuniquese al numero 0800-222-clinica");
}