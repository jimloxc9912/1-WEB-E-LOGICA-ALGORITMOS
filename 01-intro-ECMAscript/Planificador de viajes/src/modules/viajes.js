import { calcularCosto } from './costos.js';

const destinos = [];

export const registrarDestino = (destino, fecha, transporte, personas = 1) => {
  const nuevoViaje = {
    destino,
    fecha,
    transporte,
    personas,
    costo: calcularCosto(destino, transporte, personas),
    id: Date.now().toString()
  };

  destinos.push(nuevoViaje);
  return nuevoViaje;
};

export const obtenerDestinos = () => [...destinos];
export const limpiarViajes = () => destinos.length = 0;