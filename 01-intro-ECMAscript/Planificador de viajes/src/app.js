// Importar módulos
import { registrarDestino, obtenerDestinos, limpiarViajes } from './modules/viajes.js';
import { calcularTotal, PRECIOS } from './modules/costos.js';

// Configurar elementos del DOM
const viajeForm = document.getElementById('viajeForm');
const itinerarioContainer = document.getElementById('itinerario');
const calcularBtn = document.getElementById('calcularBtn');
const limpiarBtn = document.getElementById('limpiarBtn');
const totalContainer = document.getElementById('totalContainer');
const totalAmount = document.getElementById('totalAmount');
const infoGrid = document.querySelector('.info-grid');

// Configurar pestañas
const tabContents = document.querySelectorAll('.tab-content');
const tabButtons = document.querySelectorAll('.tab-btn');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tabId = button.getAttribute('data-tab');
    
    // Actualizar botones activos
    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    // Actualizar contenido visible
    tabContents.forEach(content => content.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
  });
});

// Función para renderizar los viajes
const renderizarItinerario = () => {
  const destinos = obtenerDestinos();
  
  if (destinos.length === 0) {
    itinerarioContainer.innerHTML = '<p class="empty-message">No hay destinos agregados aún. ¡Comienza a planificar tu viaje!</p>';
    totalContainer.classList.add('hidden');
    return;
  }

  itinerarioContainer.innerHTML = '';
  
  destinos.forEach(viaje => {
    const viajeElement = document.createElement('div');
    viajeElement.className = 'viaje-card';
    viajeElement.innerHTML = `
      <div class="viaje-info">
        <h3>${viaje.destino}</h3>
        <p><i class="far fa-calendar-alt"></i> ${viaje.fecha}</p>
        <p><i class="fas fa-subway"></i> ${viaje.transporte}</p>
        <p><i class="fas fa-users"></i> ${viaje.personas} ${viaje.personas > 1 ? 'personas' : 'persona'}</p>
      </div>
      <div class="viaje-costo">$${viaje.costo}</div>
    `;
    itinerarioContainer.appendChild(viajeElement);
  });
};

// Función para mostrar información de destinos
const mostrarInfoDestinos = () => {
  infoGrid.innerHTML = '';
  
  const destinosDisponibles = [
    { nombre: "Paris", descripcion: "La ciudad del amor y la luz", costoBase: PRECIOS.DESTINOS.Paris },
    { nombre: "Londres", descripcion: "Capital histórica del Reino Unido", costoBase: PRECIOS.DESTINOS.Londres },
    { nombre: "New York", descripcion: "La ciudad que nunca duerme", costoBase: PRECIOS.DESTINOS["New York"] },
    { nombre: "Tokio", descripcion: "Fusión de tradición y modernidad", costoBase: PRECIOS.DESTINOS.Tokio },
    { nombre: "Roma", descripcion: "La ciudad eterna", costoBase: PRECIOS.DESTINOS.Roma }
  ];

  destinosDisponibles.forEach(destino => {
    const destinoElement = document.createElement('div');
    destinoElement.className = 'destino-card';
    destinoElement.innerHTML = `
      <h3><i class="fas fa-map-marker-alt"></i> ${destino.nombre}</h3>
      <p class="destino-desc">${destino.descripcion}</p>
      <div class="destino-info">
        <p><strong>Costo base:</strong> $${destino.costoBase}</p>
        
        <div class="descuento-info">
          <h4><i class="fas fa-percentage"></i> Descuentos por grupo:</h4>
          <ul>
            <li>1-4 personas: Precio normal</li>
            <li>5+ personas: <strong>${PRECIOS.DESCUENTOS.porcentaje * 100}% de descuento</strong></li>
          </ul>
        </div>
        
        <p><strong>Transportes disponibles:</strong></p>
        <ul class="transportes-list">
          ${Object.entries(PRECIOS.TRANSPORTES).map(([transporte, precio]) => `
            <li>
              <i class="fas fa-${transporte === 'Avión' ? 'plane' : transporte === 'Tren' ? 'train' : transporte === 'Autobús' ? 'bus' : 'ship'}"></i> 
              ${transporte} (+$${precio})
            </li>
          `).join('')}
        </ul>
        
        <div class="ejemplo-precio">
          <h4><i class="fas fa-calculator"></i> Ejemplo para 5 personas:</h4>
          ${Object.entries(PRECIOS.TRANSPORTES).slice(0, 2).map(([transporte, precio]) => {
            const total = Math.round((destino.costoBase + precio) * 5 * (1 - PRECIOS.DESCUENTOS.porcentaje));
            return `<p>${transporte}: $${total} <small>(incluye ${PRECIOS.DESCUENTOS.porcentaje * 100}% descuento)</small></p>`;
          }).join('')}
        </div>
      </div>
    `;
    infoGrid.appendChild(destinoElement);
  });
};

// Configurar formulario
viajeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const destino = document.getElementById('destino').value;
  const fecha = document.getElementById('fecha').value;
  const transporte = document.getElementById('transporte').value;
  const personas = parseInt(document.getElementById('personas').value) || 1;
  
  registrarDestino(destino, fecha, transporte, personas);
  renderizarItinerario();
  
  // Resetear formulario
  viajeForm.reset();
});

// Configurar botones
calcularBtn.addEventListener('click', () => {
  const total = calcularTotal(obtenerDestinos());
  totalAmount.textContent = `$${total}`;
  totalContainer.classList.remove('hidden');
});

limpiarBtn.addEventListener('click', () => {
  limpiarViajes();
  renderizarItinerario();
  totalContainer.classList.add('hidden');
});

// Inicializar la aplicación
renderizarItinerario();
mostrarInfoDestinos();