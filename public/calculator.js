// Calcul de la Force Centrifuge Relative (RCF)
function calculateRCF(rpm, radius) {
  // RCF = 1.118 × 10⁻⁵ × r × N²
  return (1.118e-5 * radius * Math.pow(rpm, 2)).toFixed(2);
}

// Setup des événements
function initCalculator() {
  const rpmInput = document.getElementById('rpm');
  const radiusInput = document.getElementById('radius');
  const rcfResult = document.getElementById('rcfResult')?.querySelector('span');

  if (!rpmInput || !radiusInput || !rcfResult) {
    // Si on n'est pas sur la page de la calculatrice, on sort
    return;
  }

  // Mise à jour en temps réel
  function updateRCF() {
    const rpm = parseFloat(rpmInput.value) || 0;
    const radius = parseFloat(radiusInput.value) || 0;
    
    if (rpm > 0 && radius > 0) {
      const rcf = calculateRCF(rpm, radius);
      rcfResult.textContent = rcf;
    } else {
      rcfResult.textContent = '0';
    }
  }

  rpmInput.addEventListener('input', updateRCF);
  radiusInput.addEventListener('input', updateRCF);
}

// Initialisation sécurisée
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCalculator);
} else {
  initCalculator();
}