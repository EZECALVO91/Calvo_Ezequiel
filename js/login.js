function validarLogin() {
    // agarra los campos que uno llena para evaluarlos.
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;

    if (usuario === "" || contraseña === "") {
        alert("Por favor, completa todos los campos");
        return false;
    }
    return true; //deja que enviemos el formulario
}

//utilice casi el mismo codigo que registro con la diferencia que le agrege la validacion de Usuario y COntraseña.
