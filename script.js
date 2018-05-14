var doc = document,
	selDig = doc.getElementById("selDig"),
	selAm = doc.getElementById("selAm"),
	btnGen = doc.getElementById("btnGen"),
	pRanNum = doc.getElementById("pRanNum");
	
function ranNumGen(){
	pRanNum.innerHTML = "";
	
	var indDig = selDig.selectedIndex,
		optDig = selDig.options[indDig],
		digits = optDig.innerHTML,
		indAm = selAm.selectedIndex,
		optAm = selAm.options[indAm],
		amount = optAm.innerHTML,
		powDig = Math.pow(10, digits)+1;

	for(var i = 0; i < amount; i++){
		var ranNum = Math.floor(Math.random()*powDig);
		
		pRanNum.innerHTML += ranNum + " ";
	}
}
	
btnGen.addEventListener("click", ranNumGen, false);