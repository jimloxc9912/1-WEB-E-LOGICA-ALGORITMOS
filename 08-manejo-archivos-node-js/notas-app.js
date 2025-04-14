const fs = require('fs');

// Ruta del archivo de notas
const filePath = './notas.json';

/**
 * Agrega una nueva nota al archivo.
 * @param {string} titulo - El título de la nota.
 * @param {string} contenido - El contenido de la nota.
 */
function agregarNota(titulo, contenido) {
  let notas = [];
  
  // Verificar si el archivo existe y leer las notas existentes
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    notas = JSON.parse(data);
  }

  const nuevaNota = { titulo, contenido };
  notas.push(nuevaNota);

  // Guardar las notas actualizadas
  fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
  console.log('Nota agregada con éxito.');
}

/**
 * Lista todas las notas guardadas.
 */
function listarNotas() {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    const notas = JSON.parse(data);
    
    console.log('\n=== Notas Guardadas ===');
    notas.forEach((nota, index) => {
      console.log(`${index + 1}. Título: ${nota.titulo}`);
      console.log(`   Contenido: ${nota.contenido}\n`);
    });
  } else {
    console.log('No hay notas guardadas.');
  }
}

/**
 * Elimina una nota por su título.
 * @param {string} titulo - El título de la nota a eliminar.
 */
function eliminarNota(titulo) {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    let notas = JSON.parse(data);
    
    const cantidadInicial = notas.length;
    notas = notas.filter(nota => nota.titulo !== titulo);
    
    if (notas.length === cantidadInicial) {
      console.log(`No se encontró ninguna nota con el título "${titulo}".`);
      return;
    }
    
    fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
    console.log(`Nota con título "${titulo}" eliminada.`);
  } else {
    console.log('No hay notas para eliminar.');
  }
}

// Ejemplo de uso
agregarNota('Compras', 'Comprar leche y pan.');
agregarNota('Trabajo', 'Terminar reporte semanal.');
listarNotas();
eliminarNota('Compras');
listarNotas();