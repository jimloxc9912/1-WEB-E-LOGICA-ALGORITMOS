// Array principal para almacenar los productos
const listaDeCompras = [];

// Elementos del DOM
const inputProducto = document.getElementById('nuevoProducto');
const botonAgregar = document.getElementById('agregar');
const listaUI = document.getElementById('lista');

// Función para agregar producto (arrow function)
const agregarProducto = (producto) => {
  // Validar que el producto no esté vacío
  if (!producto.trim()) {
    alert('Por favor ingresa un nombre de producto válido');
    return false;
  }

  // Evitar duplicados (case insensitive)
  const productoNormalizado = producto.toLowerCase();
  const existe = listaDeCompras.some(
    item => item.toLowerCase() === productoNormalizado
  );

  if (existe) {
    alert('Este producto ya está en la lista');
    return false;
  }

  // Agregar al array
  listaDeCompras.push(producto);
  return true;
};

// Función para eliminar producto (arrow function)
const eliminarProducto = (producto) => {
  const indice = listaDeCompras.indexOf(producto);
  if (indice !== -1) {
    listaDeCompras.splice(indice, 1);
    return true;
  }
  return false;
};

// Función para mostrar la lista (arrow function)
const mostrarLista = () => {
  // Limpiar lista UI
  listaUI.innerHTML = '';

  // Mostrar mensaje si está vacía
  if (listaDeCompras.length === 0) {
    const item = document.createElement('li');
    item.textContent = 'No hay productos en la lista';
    listaUI.appendChild(item);
    return;
  }

  // Mostrar cada producto
  listaDeCompras.forEach((producto) => {
    const item = document.createElement('li');
    
    const nombre = document.createElement('span');
    nombre.textContent = producto;
    
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.className = 'eliminar';
    botonEliminar.addEventListener('click', () => {
      if (eliminarProducto(producto)) {
        mostrarLista();
      }
    });
    
    item.append(nombre, botonEliminar);
    listaUI.appendChild(item);
  });
};

// Event Listeners
botonAgregar.addEventListener('click', () => {
  if (agregarProducto(inputProducto.value)) {
    inputProducto.value = '';
    mostrarLista();
  }
});

inputProducto.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    botonAgregar.click();
  }
});

// Mostrar lista inicial
mostrarLista();