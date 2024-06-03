document.addEventListener('DOMContentLoaded', function() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    // console.log(usuarios);
    var tablecontent = document.querySelector('#table-users tbody');

    for (const usuario of usuarios) {
        console.log(usuario);
        tablecontent.innerHTML += `<tr>
            <td>`+usuario.username+`</td>
            <td>`+usuario.name+`</td>
            <td>`+usuario.email+`</td>
            <td>`+usuario.password+`</td>
            <td>`+usuario.perfil+`</td>
        </tr>`
    
    }
});