var productos;
document.addEventListener('DOMContentLoaded', function() {
    
    //Get product data from json file
    const fetchedData = fetch("./db/productos.json");
    
    fetchedData
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);
        productos = data;
        var tableproductoscontent = document.querySelector('#tbl-prodcutos tbody');
        
        for (const producto of productos) {
            console.log(producto);
            //llenar tabla
            tableproductoscontent.innerHTML += `<tr>
                <td>`+producto.nombre+`</td>
                <td>`+producto.precio+`</td>
                <td><img class="img-table" src="`+producto.imagen+`"></td>
                <td><button type="button" data-id="`+producto.id+`" class="btn btn-primary" onclick="addtocart(`+producto.id+`,1)" >Agregar al carrito</button></td>
            </tr>`;            
        }



        /*CON ESTE CÓDIGO IBA A LLENAR UNA GRILLA QUE REEMPLAZA LA ACTUAL TABLA*/
        // var gridaproductoscontent = document.querySelector('#grid-productos');
        //Llenar grilla
        // var contador = 1;
        // for (const prdgrilla of data) {
        //     console.log(contador);
        //     if(contador == 1){
        //         console.log("1");
        //         gridaproductoscontent.innerHTML += `
        //         <div class="row product">
        //             <div class="col-md-4 ">
        //                 <div class="card">
        //                     <div class="ccc">
        //                         <p class="text-center"><img src="`+prdgrilla.imagen+`" class="imw"></p>
        //                     </div>
        //                     <div class="card-body">
        //                         <h5  class="text-center">`+prdgrilla.nombre+`</h5> 
        //                         <p  class="text-center">Precio: `+prdgrilla.precio+`</p>
        //                         <p class="text-center"><input type="submit" name="Save" value="Comprar" class=" cc1"></p>
        //                     </div>
        //                 </div>
        //             </div>`;
        //     }else if(contador == 4 || contador == 7){
        //         console.log("4 y 7");
        //         gridaproductoscontent.innerHTML += `</div>
        //         <div class="row product">
        //             <div class="col-md-4 ">
        //                 <div class="card">
        //                     <div class="ccc">
        //                         <p class="text-center"><img src="`+prdgrilla.imagen+`" class="imw"></p>
        //                     </div>
        //                     <div class="card-body">
        //                         <h5  class="text-center">`+prdgrilla.nombre+`</h5> 
        //                         <p  class="text-center">Precio: `+prdgrilla.precio+`</p>
        //                         <p class="text-center"><input type="submit" name="Save" value="Comprar" class=" cc1"></p>
        //                     </div>
        //                 </div>
        //             </div>`;
        //     }else{
        //         console.log("otro");
        //         gridaproductoscontent.innerHTML += `
        //         <div class="col-md-4 ">
        //             <div class="card">
        //                 <div class="ccc">
        //                     <p class="text-center"><img src="`+prdgrilla.imagen+`" class="imw"></p>
        //                 </div>
        //                 <div class="card-body">
        //                     <h5  class="text-center">`+prdgrilla.nombre+`</h5> 
        //                     <p  class="text-center">Precio: `+prdgrilla.precio+`</p>
        //                     <p class="text-center"><input type="submit" name="Save" value="Comprar" class=" cc1"></p>
        //                 </div>
        //             </div>
        //         </div>`;
        //     }     
        //     contador++;       
        // }
    })
    .catch((error) => {
        console.error(new Error(error));
    });
});
