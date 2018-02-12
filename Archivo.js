function sumar(){
	var c1 = document.getElementById('numero1').value;
	var c2 = document.getElementById('numero2').value;
	var c3 = parseInt(c1)+parseInt(c2);
	document.getElementById('resultado:').value =c3;
	
	return false;
}
function resta(){
	var c1 = document.getElementById('numero1').value;
	var c2 = document.getElementById('numero2').value;
	var c3 = c1-c2;
	document.getElementById('resultado:').value =c3;
	return false;
}
function multiplicacion(){
	var c1 = document.getElementById('numero1').value;
	var c2 = document.getElementById('numero2').value;
	var c3 = c1*c2;
	document.getElementById('resultado:').value =c3;
	return false;
}
function divicion(){
	var c1 = document.getElementById('numero1').value;
	var c2 = document.getElementById('numero2').value;
	var c3 = c1/c2;
	if(c2=="0") alert("no se puede dividir por 0");
	document.getElementById('resultado:').value =c3;
	return false;
}