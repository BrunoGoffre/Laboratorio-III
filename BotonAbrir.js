window.addEventListener("load",inciar);

function inciar() {
    document.getElementById("nombre").addEventListener("keypress", Enter);
    document.getElementById("apellido").addEventListener("keypress", Enter);
    document.getElementById("btnGuardar").addEventListener("click",AgregarProducto);
    document.getElementById("btnAbrir").addEventListener("click",Mostrar);
    document.getElementById("btnCerrar").addEventListener("click",Cerrar);
}

