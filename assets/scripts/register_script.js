function register() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const pass1 = document.getElementById("pass1").value;
    const pass2 = document.getElementById("pass2").value;

    if (!name || !email || !pass1 || !pass2) {
        alert("Por favor completa todos los campos.");
        return;
    }

    if (pass1 !== pass2) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    alert("Registro completado correctamente.");

    window.location.href = "menu_principal.html";
}
