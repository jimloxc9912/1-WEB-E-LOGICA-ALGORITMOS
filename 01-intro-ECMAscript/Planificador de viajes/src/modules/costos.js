export const PRECIOS = {
    DESTINOS: {
      "Paris": 500,
      "Londres": 400,
      "New York": 600,
      "Tokio": 700,
      "Roma": 450
    },
    TRANSPORTES: {
      "Avión": 200,
      "Tren": 100,
      "Autobús": 50,
      "Barco": 150
    },
    DESCUENTOS: {
      umbral: 5,  // Número mínimo de personas para descuento
      porcentaje: 0.1  // 10% de descuento
    }
  };
  
  export const calcularCosto = (destino, transporte, personas = 1) => {
    const costoBase = PRECIOS.DESTINOS[destino] || 300;
    const costoTransporte = PRECIOS.TRANSPORTES[transporte] || 80;
    
    const descuento = personas >= PRECIOS.DESCUENTOS.umbral ? 
      (1 - PRECIOS.DESCUENTOS.porcentaje) : 1;
    
    return Math.round((costoBase + costoTransporte) * personas * descuento);
  };
  
  export const calcularTotal = (viajes) => {
    return viajes.reduce((sum, viaje) => sum + viaje.costo, 0);
  };