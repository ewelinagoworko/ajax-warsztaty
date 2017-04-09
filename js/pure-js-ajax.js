'use strict';

//piszemy funkcję ajax i przekazujemy jej parametr z opcjami, ta funkcja będzie napisana w pełni obiektowo:
function ajax(ajaxOptions) {
	var options = { //definiujemy obiekt i jego właściwości:
		type: ajaxOptions.type || 'GET', //tutaj definiujemy typ połączenia
		url: ajaxOptions.url || '', //tutaj kod URL
		onSuccess: ajaxOptions.onSuccess || function(){}, //jak sie uda odebrac wszystkie dane (SUKCES), to tutaj przekazujemy w tym obkiecie metodę z tym, co dalej funkcja ma robic
		//teraz piszemy obslugę błędow, przekazemy mu metodę, ktora pozwoli ten blad obsluzyc:
		onError: ajaxOptions.onError || function(){},
		dataType: ajaxOptions.dataType || 'tekst' //tutaj definiujemy typ danych, w jakim formacie dostaniemy nasze dane LUB (||) tekst jako format domyslny
	};
	
	console.log(options);
}

//wywolujemy funkcje ajax:
ajax({
	type: 'GET',
	url: 'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl',
	onSuccess: function() {
		console.log('hurra');
	}
	
});