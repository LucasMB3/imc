function CalcularIMC() {
	var peso = document.getElementById("peso").value;
	var altura = document.getElementById("altura").value;
	var imc = peso / (altura * altura);
	var resultado = document.getElementById("resultado");

	if (peso === "" && altura === "") {
		resultado.innerHTML = "Preencha todos os campos!";
	}

	if (peso === "" && altura != "") {
		resultado.innerHTML = "Preencha o seu peso"
	}

	if (peso != "" && altura === "") {
		resultado.innerHTML = "Preencha sua altura"
	}

	if (peso && altura != "") {
		resultado.innerHTML = " " + imc.toFixed(2);
	}

}
function Limpar() {
	document.getElementById('peso').value = '';
	document.getElementById('altura').value = '';
	document.getElementById('resultado').innerHTML = '';
}