function total()  {
  var cantidad = parseInt(document.getElementById("cantidad").value);
  var producto = parseFloat(document.getElementById("producto").value);
  
  if (cantidad<=0 || cantidad>=10) {
    alert("La cantidad de productos debe ser mayor a 0 y menor a 10, verificar datos.");
  }
  else {
    var cantidad_pagar = cantidad * producto;
    document.getElementById("cantidad_pagar").value = cantidad_pagar;

    var articulo = document.getElementById("producto");
    var seleccionado = articulo.options[articulo.selectedIndex].text;
    var cant = document.getElementById("cantidad").value;
    var precio = document.getElementById("producto").value;
    
    var arreglo = ["Artículo: "+ seleccionado+ ".\nCantidad: "+cant+ " artículo(s).\nPrecio unitario: $"+precio+ ".\nTotal por producto: $"+ cantidad_pagar+"."]
  
    document.getElementById("detalles").value = arreglo;
  }
  
}