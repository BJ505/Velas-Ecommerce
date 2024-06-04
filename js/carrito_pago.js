document.addEventListener('DOMContentLoaded', function() {
    var productos;
    const fetchedData = fetch("./db/productos.json");
    fetchedData
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);
        productos = data;
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        var tablecontent = document.querySelector('#table-carrito tbody');
        var totalproductos =0;

        for (const item of carrito) {
            var findprd = productos.find(o => o.id === item.id);
            console.log(findprd);
            if(findprd && item.cant > 0){
                totalproductos += (findprd.precio * item.cant);
                tablecontent.innerHTML += `<tr>
                    <td>`+item.id+`</td>
                    <td>`+findprd.nombre+`</td>
                    <td>`+findprd.precio+`</td>
                    <td>`+item.cant+`</td>
                    <td style="align: right;">`+(findprd.precio * item.cant)+`</td>
                    <td><button type="button" class="btn btn-primary" onclick="deletefromcart(`+item.id+`)" >Eliminar del carrito</button></td>
                </tr>`
            }
        
        }
        var tablecontent = document.querySelector('#totalfinal');
        tablecontent.innerHTML += '$'+totalproductos;
    });
});