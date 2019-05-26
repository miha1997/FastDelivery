
function sortByName(region, langugage){
	$.getJSON( "base.json", function( json ) {
		var restaurants = [];

		for(var i = 0; i < json.restaurants.length; i++)
			if(json.restaurants[i].region == region)
				restaurants.push(json.restaurants[i]);

		for(var i = 0; i < restaurants.length - 1; i++)
			for(var j = i + 1; j < restaurants.length; j++)
				if(restaurants[i].name > restaurants[j].name){
					var temp = restaurants[i];
					restaurants[i] = restaurants[j];
					restaurants[j] = temp;
				}

		var links = document.getElementById('myform');
		var navs = links.getElementsByClassName('nav-link');
		if(navs[0].classList.contains('active')) navs[0].classList.replace('active', 'disabled');
		navs[1].classList.add('active');
		if(navs[2].classList.contains('active')) navs[2].classList.replace('active', 'disabled');
		if(navs[3].classList.contains('active')) navs[3].classList.replace('active', 'disabled');

		for(var i = 0; i < restaurants.length; i++){
			var index = i + 1;
			document.getElementById('name' + index).innerHTML= restaurants[i].name;
			if(langugage == 'en')
				document.getElementById('name' + index).href = restaurants[i].page_en;
			else
				document.getElementById('name' + index).href =restaurants[i].page_sr;

			if(langugage == 'en'){
				document.getElementById('rate' + index).innerHTML= 'Rate: ' + restaurants[i].rateSum/restaurants[i].rateNum;
				document.getElementById('address' + index).innerHTML= 'Address: ' + restaurants[i].address;
			}
			else{
				document.getElementById('rate' + index).innerHTML= 'Ocena: ' + restaurants[i].rateSum/restaurants[i].rateNum;
				document.getElementById('address' + index).innerHTML= 'Adresa: ' + restaurants[i].address;
			}
			
			document.getElementById('link' + index).style.backgroundImage = "url(" + restaurants[i].picture + ")";
			if(langugage == 'en')
				document.getElementById('link' + index).href = restaurants[i].page_en;
			else
				document.getElementById('link' + index).href =restaurants[i].page_sr;

		}
	});

}

function sortByAddress(region, langugage){
	$.getJSON( "base.json", function( json ) {
		var restaurants = [];

		for(var i = 0; i < json.restaurants.length; i++)
			if(json.restaurants[i].region == region)
				restaurants.push(json.restaurants[i]);

		for(var i = 0; i < restaurants.length - 1; i++)
			for(var j = i + 1; j < restaurants.length; j++)
				if(restaurants[i].address > restaurants[j].address){
					var temp = restaurants[i];
					restaurants[i] = restaurants[j];
					restaurants[j] = temp;
				}

		var links = document.getElementById('myform');
		var navs = links.getElementsByClassName('nav-link');
		if(navs[0].classList.contains('active')) navs[0].classList.replace('active', 'disabled');
		if(navs[1].classList.contains('active')) navs[1].classList.replace('active', 'disabled');		
		if(navs[2].classList.contains('active')) navs[2].classList.replace('active', 'disabled');
		navs[3].classList.add('active');

		for(var i = 0; i < restaurants.length; i++){
			var index = i + 1;
			document.getElementById('name' + index).innerHTML= restaurants[i].name;
			if(langugage == 'en')
				document.getElementById('name' + index).href = restaurants[i].page_en;
			else
				document.getElementById('name' + index).href =restaurants[i].page_sr;

			if(langugage == 'en'){
				document.getElementById('rate' + index).innerHTML= 'Rate: ' + restaurants[i].rateSum/restaurants[i].rateNum;
				document.getElementById('address' + index).innerHTML= 'Address: ' + restaurants[i].address;
			}
			else{
				document.getElementById('rate' + index).innerHTML= 'Ocena: ' + restaurants[i].rateSum/restaurants[i].rateNum;
				document.getElementById('address' + index).innerHTML= 'Adresa: ' + restaurants[i].address;
			}
			
			document.getElementById('link' + index).style.backgroundImage = "url(" + restaurants[i].picture + ")";
			if(langugage == 'en')
				document.getElementById('link' + index).href = restaurants[i].page_en;
			else
				document.getElementById('link' + index).href =restaurants[i].page_sr;

		}
	});

}

function sortByRate(region, langugage){
	$.getJSON( "base.json", function( json ) {
		var restaurants = [];

		for(var i = 0; i < json.restaurants.length; i++)
			if(json.restaurants[i].region == region)
				restaurants.push(json.restaurants[i]);

		for(var i = 0; i < restaurants.length - 1; i++)
			for(var j = i + 1; j < restaurants.length; j++)
				if(restaurants[i].rateSum/restaurants[i].rateNum < restaurants[j].rateSum/restaurants[j].rateNum){
					var temp = restaurants[i];
					restaurants[i] = restaurants[j];
					restaurants[j] = temp;
				}

		var links = document.getElementById('myform');
		var navs = links.getElementsByClassName('nav-link');
		if(navs[0].classList.contains('active')) navs[0].classList.replace('active', 'disabled');
		if(navs[1].classList.contains('active')) navs[1].classList.replace('active', 'disabled');
		navs[2].classList.add('active');
		if(navs[3].classList.contains('active')) navs[3].classList.replace('active', 'disabled');
	
		for(var i = 0; i < restaurants.length; i++){
			var index = i + 1;
			document.getElementById('name' + index).innerHTML= restaurants[i].name;
			if(langugage == 'en')
				document.getElementById('name' + index).href = restaurants[i].page_en;
			else
				document.getElementById('name' + index).href =restaurants[i].page_sr;

			if(langugage == 'en'){
				document.getElementById('rate' + index).innerHTML= 'Rate: ' + restaurants[i].rateSum/restaurants[i].rateNum;
				document.getElementById('address' + index).innerHTML= 'Address: ' + restaurants[i].address;
			}
			else{
				document.getElementById('rate' + index).innerHTML= 'Ocena: ' + restaurants[i].rateSum/restaurants[i].rateNum;
				document.getElementById('address' + index).innerHTML= 'Adresa: ' + restaurants[i].address;
			}
			
			document.getElementById('link' + index).style.backgroundImage = "url(" + restaurants[i].picture + ")";
			if(langugage == 'en')
				document.getElementById('link' + index).href = restaurants[i].page_en;
			else
				document.getElementById('link' + index).href =restaurants[i].page_sr;

		}
	});

}

function defaultSort(region, langugage){
	$.getJSON( "base.json", function( json ) {
		var restaurants = [];

		for(var i = 0; i < json.restaurants.length; i++)
			if(json.restaurants[i].region == region)
				restaurants.push(json.restaurants[i]);

		var links = document.getElementById('myform');
		var navs = links.getElementsByClassName('nav-link');
		navs[0].classList.add('active');
		if(navs[1].classList.contains('active')) navs[1].classList.replace('active', 'disabled');
		if(navs[2].classList.contains('active')) navs[2].classList.replace('active', 'disabled');
		if(navs[3].classList.contains('active')) navs[3].classList.replace('active', 'disabled');

		for(var i = 0; i < restaurants.length; i++){
			var index = i + 1;
			document.getElementById('name' + index).innerHTML= restaurants[i].name;
			if(langugage == 'en')
				document.getElementById('name' + index).href = restaurants[i].page_en;
			else
				document.getElementById('name' + index).href =restaurants[i].page_sr;

			if(langugage == 'en'){
				document.getElementById('rate' + index).innerHTML= 'Rate: ' + restaurants[i].rateSum/restaurants[i].rateNum;
				document.getElementById('address' + index).innerHTML= 'Address: ' + restaurants[i].address;
			}
			else{
				document.getElementById('rate' + index).innerHTML= 'Ocena: ' + restaurants[i].rateSum/restaurants[i].rateNum;
				document.getElementById('address' + index).innerHTML= 'Adresa: ' + restaurants[i].address;
			}
			
			document.getElementById('link' + index).style.backgroundImage = "url(" + restaurants[i].picture + ")";
			if(langugage == 'en')
				document.getElementById('link' + index).href = restaurants[i].page_en;
			else
				document.getElementById('link' + index).href =restaurants[i].page_sr;

		}
	});

}

function homeSort(langugage){
	$.getJSON( "base.json", function( json ) {
		var restaurants = [];

		for(var i = 0; i < json.restaurants.length; i++)
				restaurants.push(json.restaurants[i]);

		for(var i = 0; i < restaurants.length - 1; i++)
			for(var j = i + 1; j < restaurants.length; j++)
				if(restaurants[i].rateSum/restaurants[i].rateNum < restaurants[j].rateSum/restaurants[j].rateNum){
					var temp = restaurants[i];
					restaurants[i] = restaurants[j];
					restaurants[j] = temp;
				}

		for(var i = 0; i < restaurants.length; i++){
			var index = i + 1;
			document.getElementById('name' + index).innerHTML= restaurants[i].name;
			if(langugage == 'en')
				document.getElementById('name' + index).href = restaurants[i].page_en;
			else
				document.getElementById('name' + index).href =restaurants[i].page_sr;
			
			if(langugage == 'en'){
				document.getElementById('rate' + index).innerHTML= 'Rate: ' + restaurants[i].rateSum/restaurants[i].rateNum;
				document.getElementById('address' + index).innerHTML= 'Address: ' + restaurants[i].address;
			}
			else{
				document.getElementById('rate' + index).innerHTML= 'Ocena: ' + restaurants[i].rateSum/restaurants[i].rateNum;
				document.getElementById('address' + index).innerHTML= 'Adresa: ' + restaurants[i].address;
			}

			document.getElementById('link' + index).style.backgroundImage = "url(" + restaurants[i].picture + ")";
			if(langugage == 'en')
				document.getElementById('link' + index).href = restaurants[i].page_en;
			else
				document.getElementById('link' + index).href =restaurants[i].page_sr;

		}
	});

}

function mySort(val, region, langugage){
	if(val == 0)
		defaultSort(region, langugage);
	if(val == 1)
		sortByName(region, langugage);
	if(val == 2)
		sortByRate(region, langugage);
	if(val == 3)
		sortByAddress(region, langugage);

}

var id = 1;

function addToCart(name, price) {	
	var product = {
			"name" : name,
			"price" : price
	}
	
	var niz = JSON.parse(localStorage.getItem("niz") || "[]");
	niz.push(product);
	localStorage.setItem("niz", JSON.stringify(niz));
}

function addProduct() {
	var table = document.getElementById("myTable");
	var niz = JSON.parse(localStorage.getItem("niz") || "[]");
	
	for(var i = 0; i < niz.length; i++) {
		var row = table.insertRow(i + 2);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);		
		cell1.innerHTML = niz[i].name;
		cell2.innerHTML = niz[i].price;
		cell3.innerHTML = "<input type='button' class='btn btn-danger btn-lg' value='DELETE' onclick='deleteElem(" + i + ")'>";
	}
}

function deleteElem(row) {
	var table = document.getElementById("myTable");
	var niz = JSON.parse(localStorage.getItem("niz") || "[]");
	niz.splice(row, 1);
	for(var i = 0; i < niz.length + 1; i++) {
		table.deleteRow(2);
	}
	
	localStorage.setItem("niz", JSON.stringify(niz));
	for(var i = 0; i < niz.length; i++) {
		var row = table.insertRow(i + 2);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);		
		cell1.innerHTML = niz[i].name;
		cell2.innerHTML = niz[i].price;
		cell3.innerHTML = "<input type='button' class='btn btn-danger btn-lg' value='DELETE' onclick='deleteElem(" + i + ")'>";
	}
}
