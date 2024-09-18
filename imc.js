
function calcularIMC(){
    let peso = parseFloat(document.getElementById('inputPeso').value);
    let estatura = parseFloat(document.getElementById('inputEstatura').value);
    letcategoria = (document.getElementById('resultado'))
    

    let imc = peso / (estatura**2)
    let categoria = '';
    
    switch (true){
    case (imc < 18.5):
        categoria = (`Tu IMC es de ${imc.toFixed(2)} Tienes bajo peso`);
            break;
    case  (imc  >= 18.5  && imc <= 24.9):
        categoria = (`Tu IMC es de ${imc.toFixed(2)} Tienes peso normal`);
            break;
    case (imc >25 && imc <= 29.9):
        categoria = (`Tu IMC es de ${imc.toFixed(2)} Tienes sobrepeso`);
            break;
    case (imc >=30 && imc <= 34.9):
            categoria = (`Tu IMC es de ${imc.toFixed(2)} Tienes obesidad grado 1`);
            break;
    case (imc >= 35 && imc <= 39.9):
            categoria = (`Tu IMC es de ${imc.toFixed(2)} Tienes obesidad grado 2`)
            break;
    case (imc >= 40):
        categoria = (`Tu IMC es de ${imc.toFixed(2)} Tienes obesidad grado 3`);
            break;
            
            default:
                alert ('Valores no validos')
        }
        let mensaje = document.createElement('p');
        mensaje.textContent = (`${categoria}`)
        resultado.appendChild(mensaje);
}
        



