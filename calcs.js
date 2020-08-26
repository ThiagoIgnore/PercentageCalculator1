function xiswhatPercentofy(){
	var x = document.getElementById('numField1').value;
	var y = document.getElementById('numField2').value;
	var result = x / y;
	var percent = result * 100;
	var resultField = document.getElementById("resultField");
	resultField.innerText = "Answer: " + percent + "% ";
}
function xPercentofyis(){
	var x = document.getElementById('numField1').value;
	var y = document.getElementById('numField2').value;
	var percent = x / 100;
	var result = percent * y;
	var resultField = document.getElementById("resultField");
	resultField.innerText = "Answer: " + result;
}

