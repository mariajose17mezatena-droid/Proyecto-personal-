function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validar que no estén vacíos
    if (email === "" || password === "") {
        alert("Por favor completa todos los campos.");
        return; // No continúa
    }

    // Validar formato correcto de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Ingresa un correo válido.");
        return;
    }

    // Si todo está correcto → redirigir
    window.location.href = "menu_principal.html";
}
