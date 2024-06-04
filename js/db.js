document.addEventListener('DOMContentLoaded', function() {
    // Simulación de base de datos local
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Función para registrar usuarios
    function registrarUsuario(email, name, password, username, perfil) {
        console.log('Intentando registrar usuario:', { email, name, username });
        const usuarioExistente = usuarios.find(user => user.email === email || user.username === username);
        if (usuarioExistente) {
            mostrarAlerta('El usuario ya existe.', 'danger');
            console.log('El usuario ya existe.');
            return false;
        }

        const nuevoUsuario = { email, name, password, username, perfil };
        usuarios.push(nuevoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        mostrarAlerta('Usuario registrado exitosamente.', 'success');
        console.log('Usuario registrado exitosamente:', nuevoUsuario);
        return true;
    }

    // Función para agregar al carrito
    function addtocart(id, cant) {
        const anadirnuevo = { id, cant };
        carrito.push(anadirnuevo);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        mostrarAlerta('Producto agregado exitosamente.', 'success');
        console.log('Prodcuto agregado exitosamente:', anadirnuevo);
        return true;
    }

    //Eliminar del carrito
    function deletefromcart(id) {
        console.log("id a eliminar",id);
        let newList = carrito;
        console.log(newList);
        let index = newList.findIndex(item => item.id === id)
        console.log(index);
        newList.splice(index, 1);
        console.log(newList);
        localStorage.setItem('carrito', JSON.stringify(newList));
    }

    // Función para iniciar sesión
    function iniciarSesion(emailOrUsername, password) {
        console.log('Intentando iniciar sesión:', { emailOrUsername, password });
        const usuario = usuarios.find(user => (user.email === emailOrUsername || user.username === emailOrUsername) && user.password === password);
        if (usuario) {
            mostrarAlerta('Inicio de sesión exitoso.', 'success');
            console.log('Inicio de sesión exitoso:', usuario);
            return usuario.perfil;
        } else {
            mostrarAlerta('Email/Usuario o contraseña incorrectos.', 'danger');
            console.log('Email/Usuario o contraseña incorrectos.');
            return false;
        }
    }

    // Función para mostrar alertas
    function mostrarAlerta(mensaje, tipo) {
        const alertaDiv = document.createElement('div');
        alertaDiv.className = `alert alert-${tipo}`;
        alertaDiv.appendChild(document.createTextNode(mensaje));
        const container = document.querySelector('.container');
        const firstChild = container.firstChild;
        
        // Insertar la alerta al principio del contenedor
        if (firstChild) {
            container.insertBefore(alertaDiv, firstChild);
        } else {
            container.appendChild(alertaDiv);
        }
    
        // Desaparecer alerta después de 3 segundos
        setTimeout(() => {
            const alerta = document.querySelector('.alert');
            if (alerta) {
            alerta.remove();
            }
        }, 10000);
    }

    // Exportar funciones
    window.registrarUsuario = registrarUsuario;
    window.addtocart = addtocart;
    window.deletefromcart = deletefromcart;
    window.iniciarSesion = iniciarSesion;
});
