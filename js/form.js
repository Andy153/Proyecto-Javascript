
var spanName = document.getElementById("span-name");
var btn = document.getElementsByClassName("btn")[0];
console.log("teste");
	
btn.onclick = function(){
	var inputName = document.getElementById("name");
	spanName.innerHTML = " Bienvenido " + inputName.value;
	
}
