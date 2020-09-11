window.addEventListener("load",inciar);

function inciar() {
    document.getElementById("nombre").addEventListener("keypress", Enter);
    document.getElementById("apellido").addEventListener("keypress", Enter);
    document.getElementById("btnGuardar").addEventListener("click",AgregarProducto);
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
	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;

	var tr = document.createElement("tr");
	tr.setAttribute("id", "Nombre");	
	
	var td2 = document.createElement("td");
	var nodeNombre = document.createTextNode(nombre);
	td2.appendChild(nodeNombre);
	tr.appendChild(td2);
	
	var td3 = document.createElement("td");
	var nodeApellido = document.createTextNode(apellido);
	td3.appendChild(nodeApellido);
    tr.appendChild(td3);
    
    var td4 = document.createElement("td");
    var nodeAccion = document.createTextNode("Borrar");
    td4.appendChild(nodeAccion);
    tr.appendChild(td4);

	tCuerpo.appendChild(tr);
}