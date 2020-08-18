function validar() {
    //obtener datos ingresados en el formulario por id y almacenarlos en variables.
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var usuario = document.getElementById("usuario").value;
    var pass = document.getElementById("pass").value;
    var telefono = document.getElementById("telefono").value;

    //indica que debemos usar palabra@palabra.letras[a-z] 
    expresion = /\w+@\w+\.+[a-z]/;
    //indica que los caracteres admitidos son letras del alfabeto, mayúsculas o minúsculas (case insensitive)
    expresionLetras = /^[A-Z]+$/i;


    //validar que los campos no estés vacíos y estén correctos en relación al tipo de datos, y que no supere cierto largo
    if (nombre === "" || apellidos === "" || correo === "" || usuario === "" || pass === "" || telefono === "") {
        alert("Todos los campos son obligatorios");
        return false;
    } else if (nombre.length >= 30) {
        alert("El nombre es muy largo");
        return false;
    } else if (apellidos.length >= 80) {
        alert("Los apellidos no deben superar los 80 caracteres");
        return false;
    } else if (!expresion.test(correo)) {
        alert("El correo no es válido. Debe tener un formato similar a mi.email[@]desafio-latam[.]cl");
        return false;
    } else if (correo.length >= 100) {
        alert("El correo no debe superar los 100 caracteres");
        return false;
    } else if (usuario.length >= 20) {
        alert("El nombre de usuario no debe superar los 20 caracteres");
        return false;
    } else if (telefono.lenght > 15) {
        alert("El teléfono es muy largo");
        return false;
    } else if (isNaN(telefono)) {
        alert("Este campo 'teléfono' sólo acepta datos numéricos");
        return false;
    } else if (!expresionLetras.test(nombre) || !expresionLetras.test(apellidos)) {
        alert("los campos nombre y apellidos solo aceptan texto");
        return false;
    }

    //Si todo está correcto manda mensaje de Bienvenida con nombre completo, usuario y contraseña.
    var result = "Bienvenidos " + nombre + " " + apellidos + "! " + "Tu nombre de usuario es: " + usuario + ", y tu contraseña es: " + pass;
    alert(result);


}