document.addEventListener('DOMContentLoaded', function() {
    // Manejar el formulario de inicio de sesión
    const formLogin = document.querySelector('#login-form');
    formLogin.addEventListener('submit', function(event) {
    event.preventDefault();
    event.stopPropagation();

    const emailOrUsername = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    console.log('Formulario de inicio de sesión enviado:', { emailOrUsername, password });

    const loginExitoso = window.iniciarSesion(emailOrUsername, password);
    if (loginExitoso=="admin") {
        console.log('Inicio de sesión exitoso:', { emailOrUsername, loginExitoso });
        location.href ="dashboard_admin.html";
    } else if(loginExitoso=="cliente"){
        console.log('Inicio de sesión exitoso:', { emailOrUsername, loginExitoso });
        location.href ="dashboard.html";
    } else {
        formLogin.reset();
        console.log('Error en el inicio de sesión.');
    }
    }, false);
});