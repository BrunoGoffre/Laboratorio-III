window.onload = inciar;

function inciar() {
    document.getElementById("usuario").addEventListener("keypress", Enter);
    document.getElementById("contraseña").addEventListener("keypress", Enter);
}

 function Validar(){
    var usuario = document.getElementById("usuario");      
    var contraseña = document.getElementById("contraseña");
    
    if (usuario.value != "user" || contraseña.value != "123"){
        alert("usuario o contraseña incorrecto");
        contraseña.value="";
    }
    else{
        alert("Inicio de sesion existoso");
    }
}

function Enter(e){
    
        var usuario = document.getElementById("usuario").value;
        var contrañsea = document.getElementById("contraseña");
        if (e.keyCode == 13)
        {	
            Validar();
        }    
}


function Limpiar(){
    document.getElementById("contraseña").value = "";
    document.getElementById("usuario").value = "";           
}
