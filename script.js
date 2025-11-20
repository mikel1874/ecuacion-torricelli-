// Elementos del DOM
const btnInicio = document.getElementById('btnInicio');
const inicioView = document.getElementById('inicio');
const calculadoraView = document.getElementById('calculadora');
const btnCalcular = document.getElementById('btnCalcular');
const resultado = document.getElementById('resultado');

// Constante de gravedad (m/s²)
const g = 9.80665;

// Navegación
btnInicio.onclick = () => {
  inicioView.style.display = 'none';
  calculadoraView.style.display = 'block';
};

// Cálculo
btnCalcular.onclick = () => {
  // 1. Obtener datos
  const h0 = parseFloat(document.getElementById('alturaAgua').value);
  const Rt = parseFloat(document.getElementById('radioTanque').value); // Radio del Tanque
  const ro = parseFloat(document.getElementById('radioOrificio').value); // Radio del Orificio

  // 2. Validación
  if ([h0, Rt, ro].some(val => isNaN(val) || val <= 0)) {
    resultado.textContent = '⚠️ Por favor, ingrese valores numéricos positivos.';
    resultado.style.color = '#d9534f'; // Rojo de error
    return;
  }
  
  if (ro >= Rt) {
     resultado.textContent = '⚠️ El radio del orificio debe ser menor que el del tanque.';
     resultado.style.color = '#d9534f';
     return;
  }

  // 3. Aplicación de la FÓRMULA DE LA IMAGEN
  // Formula: T = [2A / (a * sqrt(2g))] * sqrt(h0)
  
  // Calculamos las Áreas (A y a) basadas en los radios ingresados
  const AreaTanque = Math.PI * Math.pow(Rt, 2);   // A
  const AreaOrificio = Math.PI * Math.pow(ro, 2); // a

  // Parte 1: El numerador de la fracción grande (2 * A)
  const numerador = 2 * AreaTanque;

  // Parte 2: El denominador de la fracción grande (a * sqrt(2g))
  const denominador = AreaOrificio * Math.sqrt(2 * g);

  // Parte 3: Cálculo final multiplicando por sqrt(h0)
  const T = (numerador / denominador) * Math.sqrt(h0);

  // 4. Mostrar resultado
  resultado.style.color = '#004e92'; // Volver al azul
  resultado.textContent = `Tiempo total de vaciado: ${T.toFixed(3)} segundos.`;
};