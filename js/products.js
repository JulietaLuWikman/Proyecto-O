const url = "https://japceibal.github.io/emercado-api/cats_products/101.json"

function productoAHtml(producto){
    return `
    <div class="lista-productos">
    <div class="container text-center">
      <div class="row  mt-4 pt-4">
        <h1>Productos</h1>
        <p>Verás aquí todos los productos de la categoría <span class="catName">${catName}</span></p>
      </div>
    </div>
    <!--Lista de productos-->
     <div class="row shadow rounded mb-2">
      <div class="col-sm-5 col-md-4 col-lg-3 p-0 overflow-hidden">
        <img src="${producto.image}" alt="h-100">
      </div>
       <div class="col mt-2">
         <h3>${producto.name}</h3>
         <p>${producto.description}</p>
        <div class="row">
          <div class="col">
            <span class="moneda">${producto.currency}</span>
            <span class="precio">${producto.cost}</span>
          </div>
          <div class="col-3 justify-content-end">
            <p>Cantidad de vendidos : <span class="cant">${producto.soldCount}</span></p>
          </div>
        </div>
       </div>
     </div>

   </div>
    `;
    
}
var autos;

document.addEventListener('DOMContentLoaded', async function(){
    const listaProductos = document.querySelector('.lista-productos');

    let respuesta = await getJSONData(url);
    console.log(respuesta)
    if (respuesta.status === 'ok') {
        autos = respuesta.data

    autos.for(auto => {
            listaProductos.innerHTML += productoAHtml(auto);
        });
    }

 console.log(autos);

});