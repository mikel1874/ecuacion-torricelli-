// --- JavaScript ---
// (Poner en la pestaña 'JS' de CodePen)

// 1. Obtener los elementos del HTML
const btnInicio = document.getElementById('btnInicio');
const inicioView = document.getElementById('inicio');
const calculadoraView = document.getElementById('calculadora');
const btnCalcular = document.getElementById('btnCalcular');
const resultado = document.getElementById('resultado');

// Constante de gravedad (m/s²)
const g = 9.80665;

// 2. Evento para mostrar la calculadora
btnInicio.onclick = function() {
  inicioView.style.display = 'none';
  calculadoraView.style.display = 'block';
};

// 3. Evento para calcular el tiempo
btnCalcular.onclick = function() {
  // Obtener valores de los inputs
  const h0 = parseFloat(document.getElementById('alturaAgua').value);
  const Rt = parseFloat(document.getElementById('radioTanque').value);
  const ro = parseFloat(document.getElementById('radioOrificio').value);

  // Validar las entradas
  if (isNaN(h0) || isNaN(Rt) || isNaN(ro) || h0 <= 0 || Rt <= 0 || ro <= 0) {
    resultado.textContent = 'Error: Ingrese números positivos.';
    return;
  }
  if (ro >= Rt) {
     resultado.textContent = 'Error: El radio del orificio debe ser menor.';
     return;
  }
  
  const T = (Math.pow(Rt, 2) / Math.pow(ro, 2)) * Math.sqrt((2 * h0) / g);

  // 4. Mostrar el resultado
  resultado.textContent = `Tiempo total de vaciado: ${T.toFixed(3)} segundos.`;
};