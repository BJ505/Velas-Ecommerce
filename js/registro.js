document.addEventListener('DOMContentLoaded', function() {
    // Manejar el formulario de registro
    const formRegister = document.querySelector('#register-form');
    formRegister.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
    
        const email = document.querySelector('#email').value;
        const name = document.querySelector('#name').value;
        const password = document.querySelector('#password').value;
        const repeatPassword = document.querySelector('#repeat-password').value;
        const username = document.querySelector('#username').value;
        const perfil = 'cliente';
    
        console.log('Formulario de registro enviado:', { email, name, password, repeatPassword, username, perfil });
    
        const isValid = formRegister.checkValidity();
        formRegister.classList.add('was-validated');
    
        if (!isValid) {
            return;
        }
    
        if (password !== repeatPassword) {
            alert('Las contraseñas no coinciden.');
            console.log('Las contraseñas no coinciden.');
            return;
        }
    
        const registroExitoso = window.registrarUsuario(email, name, password, username, perfil);
        if (registroExitoso) {
            console.log('Registro exitoso:', { email, name, password, username, perfil});
            formRegister.reset();
            formRegister.classList.remove('was-validated');
        } else {
            console.log('El usuario ya existe.');
        }
    }, false);
});