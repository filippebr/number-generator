(function(){
	var doc = document,
		pRan = doc.getElementById("pRan"),
		selD = doc.getElementById("selDig"),
		selA = doc.getElementById("selAm"),
		btn = doc.getElementById("btnRan");

	/*uma função que gera um ou mais números aleatórios dependendo de uma
	  variável e também com quantidades de dígitos diferentes dependendo
	  de uma outra variável*/
	var ranGen = function(){
		var ranArray = []; //inicializa uma variável de matriz
		var indexD = selD.selectedIndex; //arm. o valor do ind. option 0-...
		var optionD = selD.options[indexD].innerHTML; //valor enc. no option
		var indexA = selA.selectedIndex; //arm. o valor do ind. option 0-...
		var optionA = selA.options[indexA].innerHTML; //valor enc. no option
		var powOptionA = Math.pow(10, optionA); //possui. o valor de 10eoptionA + 1

		/* loop usado para que enquanto o valor do option do element select
		de números for maior do que a variável i ele continuará rodando, com isso
		colocando a quantidade de números igual ao valor do option*/
		for(var i = 1; i <= optionD; i++){
			var ran = Math.floor(Math.random()*powOptionA+1); //arm. um núm. al. multiplicando pelo valor da var y

			//ran = (ran < powOptionA)? "0" + ran: ran; //tent. fazer com que todos os números tenha o mesmo número de dígitos
			ranArray.push(ran);
			var ranArrayJoin = ranArray.join(" ");
			pRan.innerHTML = ranArrayJoin;
		}
	};

	btn.addEventListener("click", ranGen, false);
}());
