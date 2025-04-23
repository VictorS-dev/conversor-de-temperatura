function converter() {
    const temp = parseFloat(document.getElementById("tempInput").value);
    const escala = document.getElementById("scale").value;
    const res = document.getElementById("result");
  
    if (isNaN(temp)) {
      res.textContent = "Digite um número válido.";
      return;
    }
  
    let c, f, k;
  
    if (escala === "celsius") {
      c = temp;
      f = (c * 9) / 5 + 32;
      k = c + 273.15;
    } else if (escala === "fahrenheit") {
      f = temp;
      c = (f - 32) * 5 / 9;
      k = c + 273.15;
    } else {
      k = temp;
      c = k - 273.15;
      f = (c * 9) / 5 + 32;
    }
  
    res.innerHTML = `
      <p><strong>Celsius:</strong> ${c.toFixed(2)} °C</p>
      <p><strong>Fahrenheit:</strong> ${f.toFixed(2)} °F</p>
      <p><strong>Kelvin:</strong> ${k.toFixed(2)} K</p>
    `;
  }