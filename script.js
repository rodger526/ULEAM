function login() {
    const usuario1 = "e1315361244";
    const clave1 = "Roq.32960";
    const usuario2 = "e1754849758";
    const clave2 = "Buc.25890";
    const usuario3 = "e1313274118";
    const clave3 = "Pap.45865";

    let usuario = document.getElementById("usuario").value;
    let clave = document.getElementById("clave").value;

    if (usuario === usuario1 && clave === clave1) {
        window.location.href = "inicio1.html";
    } 
    else if (usuario === usuario2 && clave === clave2) {
        window.location.href = "inicio2.html";
    } 
    else if (usuario === usuario3 && clave === clave3) {
        window.location.href = "inicio3.html";
    } 
    else {
        alert("Usuario o contraseña incorrectos");
    }
}