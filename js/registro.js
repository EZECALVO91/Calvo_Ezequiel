function validarFormulario() {
    // hice un codigo sencillo para que el registro solo evalue que tanto la contraseña, como el repetir contraseña
    //sean iguales al momento de querer registrarse.
    const contrasena = document.getElementById("contraseña").value;
    const confirmarContrasena = document.getElementById("confirma-contraseña").value;

    if (contrasena !== confirmarContrasena) {
        alert("Las contraseñas no coinciden");
        return false;
    }
    return true;
}