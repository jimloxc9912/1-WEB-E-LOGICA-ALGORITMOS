// 1. Crear el arreglo de productos
const productos = [
    { nombre: "Camisa", precio: 80, categoria: "Ropa" },
    { nombre: "Zapatos", precio: 150, categoria: "Calzado" },
    { nombre: "Pantalón", precio: 90, categoria: "Ropa" },
    { nombre: "Gorra", precio: 50, categoria: "Accesorios" },
    { nombre: "Mochila", precio: 120, categoria: "Accesorios" }
  ];
  
  // 2. Filtrar productos que cuesten menos de $100 filter()
  const productosMenores100 = productos.filter(producto => producto.precio < 100);
  console.log("Productos con precio menor a $100:");
  console.log(productosMenores100);
  
  // 3. Ordenar los productos filtrados alfabéticamente por nombre sort()
  const productosOrdenados = [...productosMenores100].sort((a, b) => a.nombre.localeCompare(b.nombre));
  console.log("Productos filtrados y ordenados alfabéticamente:");
  console.log(productosOrdenados);
  
  // 4. Crear un nuevo arreglo que contenga solo los nombres map()
  const nombresProductos = productosOrdenados.map(producto => producto.nombre);
  console.log("Nombres de productos filtrados y ordenados:");
  console.log(nombresProductos);
  
  // 5. (Opcional) Uso de otro método extra: some()
  // Comprobar si hay algún producto de categoría "Accesorios" en los productos filtrados
  const hayAccesorios = productosMenores100.some(producto => producto.categoria === "Accesorios");
  console.log("¿Hay productos de 'Accesorios' entre los productos filtrados?:", hayAccesorios);
  