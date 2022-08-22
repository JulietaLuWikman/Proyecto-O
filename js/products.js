const url = "https://japceibal.github.io/emercado-api/cats_products/101.json"

let prod1 = {
  "id": 50921,
  "name": "Chevrolet Onix Joy",
  "description": "Generación 2019, variedad de colores. Motor 1.0, ideal para ciudad.",
  "cost": 13500,
  "currency": "USD",
  "soldCount": 14,
  "image": "img/prod50921_1.jpg"
}
let prod2 =  {
"id": 50922,
"name": "Fiat Way",
"description": "La versión de Fiat que brinda confort y a un precio accesible.",
"cost": 14500,
"currency": "USD",
"soldCount": 52,
"image": "img/prod50922_1.jpg"
}
let prod3 = {
"id": 50923,
"name": "Suzuki Celerio",
"description": "Un auto que se ha ganado la buena fama por su economía con el combustible.",
"cost": 12500,
"currency": "USD",
"soldCount": 25,
"image": "img/prod50923_1.jpg"
}
let prod4 = {
"id": 50924,
"name": "Peugeot 208",
"description": "El modelo de auto que se sigue renovando y manteniendo su prestigio en comodidad.",
"cost": 15200,
"currency": "USD",
"soldCount": 17,
"image": "img/prod50924_1.jpg"
}
let prod5 = {
"id": 50925,
"name": "Bugatti Chiron",
"description": "El mejor hiperdeportivo de mundo. Producción limitada a 500 unidades.",
"cost": 3500000,
"currency": "USD",
"soldCount": 0,
"image": "img/prod50925_1.jpg"
}


function productoAHtml(producto){
    return `
    <!--Lista de productos-->
    <div class="row shadow rounded overflow-hidden mb-3">
      <div class="col-sm-5 col-md-4 col-lg-3 p-0 overflow-hidden">
        <img src="${producto.image}" alt="" class="img-fluid">
      </div>
      <div class="col mt-2">
        <h3>${producto.name}</h3>
        <p>${producto.description}</p>
      <div/>
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
  `;   
}
var autos;
document.addEventListener('DOMContentLoaded', function(e){
  const listaProductos = document.querySelector('.lista-productos');
  listaProductos.innerHTML += productoAHtml(prod1);
  listaProductos.innerHTML += productoAHtml(prod2);
  listaProductos.innerHTML += productoAHtml(prod3);
  listaProductos.innerHTML += productoAHtml(prod4);
  listaProductos.innerHTML += productoAHtml(prod5);

});