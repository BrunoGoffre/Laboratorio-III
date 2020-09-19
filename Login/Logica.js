function Cerrar(){
    var boton = document.getElementById("contenedor");
    boton.hidden = true;    
}
function Mostrar(){
    var boton = document.getElementById("contenedor");
    boton.hidden = false;
}
 function Validar(){
    var usuario = document.getElementById("usuario");      
    var contraseña = document.getElementById("contraseña");
    
    if (usuario.value != "user" || contraseña.value != "123"){
        alert("usuario o contraseña incorrecto");
        contraseña.value="";
        document.getElementById("ancla").addEventListener("click","");
    }
    else{
        alert("Inicio de sesion existoso");
    }
}

function Enter(e){    
        if (e.keyCode == 13)
        {	
            Validar();
        }    
}

function AgregarProducto(e)
{
	var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var tcuerpo = document.getElementById("tCuerpo");

    if (nombre.value == ""){
        nombre.className="inputError";
        return
    }
    else if (apellido.value == ""){
        apellido.className="inputError";
        return;
    }
    else{
        apellido.className="inputSinError";
        nombre.className="inputSinError";
    }

    tcuerpo.innerHTML += "<tr><td>" + nombre.value + "</td><td>" + apellido.value + "</td></tr>"


	// var tr = document.createElement("tr");
	// tr.setAttribute("id", "Nombre");	
	
	// var td2 = document.createElement("td");
	// var nodeNombre = document.createTextNode(nombre.value);
	// td2.appendChild(nodeNombre);
	// tr.appendChild(td2);
	
	// var td3 = document.createElement("td");
	// var nodeApellido = document.createTextNode(apellido.value);
	// td3.appendChild(nodeApellido);
    // tr.appendChild(td3);
    
    // var td4 = document.createElement("td");
    // var nodeAccion = document.createTextNode("Borrar");
    // td4.appendChild(nodeAccion);
    // tr.appendChild(td4);

    // var tdbtn = document.createElement("td");
    // var nodeBtn = document.createElement("button");
    // nodeBtn.className="boton";
    // tdbtn.appendChild(nodeBtn);
    // tr.appendChild(tdbtn);

	tCuerpo.appendChild(tr);
}
