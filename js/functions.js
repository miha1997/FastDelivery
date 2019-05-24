
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

		//first block		
		document.getElementById('name1').innerHTML= restaurants[0].name;
		if(langugage == 'en')
			document.getElementById('name1').href = restaurants[0].page_en;
		else
			document.getElementById('name1').href =restaurants[0].page_sr;

		document.getElementById('rate1').innerHTML= restaurants[0].rateSum/restaurants[0].rateNum;
		document.getElementById('address1').innerHTML= restaurants[0].address;
		
		document.getElementById('link1').style.backgroundImage = "url(" + restaurants[0].picture + ")";
		if(langugage == 'en')
			document.getElementById('link1').href = restaurants[0].page_en;
		else
			document.getElementById('link1').href =restaurants[0].page_sr;


		//second block
		document.getElementById('name2').innerHTML= restaurants[1].name;
		if(langugage == 'en')
			document.getElementById('name2').href = restaurants[1].page_en;
		else
			document.getElementById('name2').href =restaurants[1].page_sr;

		document.getElementById('rate2').innerHTML= restaurants[1].rateSum/restaurants[1].rateNum;
		document.getElementById('address2').innerHTML= restaurants[1].address;
		
		document.getElementById('link2').style.backgroundImage = "url(" + restaurants[1].picture + ")";
		if(langugage == 'en')
			document.getElementById('link2').href = restaurants[1].page_en;
		else
			document.getElementById('link2').href =restaurants[1].page_sr;

		//third block
		document.getElementById('name3').innerHTML= restaurants[2].name;
		if(langugage == 'en')
			document.getElementById('name3').href = restaurants[2].page_en;
		else
			document.getElementById('name3').href =restaurants[2].page_sr;

		document.getElementById('rate3').innerHTML= restaurants[2].rateSum/restaurants[2].rateNum;
		document.getElementById('address3').innerHTML= restaurants[2].address;
		
		document.getElementById('link3').style.backgroundImage = "url(" + restaurants[2].picture + ")";
		if(langugage == 'en')
			document.getElementById('link3').href = restaurants[2].page_en;
		else
			document.getElementById('link3').href =restaurants[2].page_sr;
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

		//first block		
		document.getElementById('name1').innerHTML= restaurants[0].name;
		if(langugage == 'en')
			document.getElementById('name1').href = restaurants[0].page_en;
		else
			document.getElementById('name1').href =restaurants[0].page_sr;

		document.getElementById('rate1').innerHTML= restaurants[0].rateSum/restaurants[0].rateNum;
		document.getElementById('address1').innerHTML= restaurants[0].address;
		
		document.getElementById('link1').style.backgroundImage = "url(" + restaurants[0].picture + ")";
		if(langugage == 'en')
			document.getElementById('link1').href = restaurants[0].page_en;
		else
			document.getElementById('link1').href =restaurants[0].page_sr;


		//second block
		document.getElementById('name2').innerHTML= restaurants[1].name;
		if(langugage == 'en')
			document.getElementById('name2').href = restaurants[1].page_en;
		else
			document.getElementById('name2').href =restaurants[1].page_sr;

		document.getElementById('rate2').innerHTML= restaurants[1].rateSum/restaurants[1].rateNum;
		document.getElementById('address2').innerHTML= restaurants[1].address;
		
		document.getElementById('link2').style.backgroundImage = "url(" + restaurants[1].picture + ")";
		if(langugage == 'en')
			document.getElementById('link2').href = restaurants[1].page_en;
		else
			document.getElementById('link2').href =restaurants[1].page_sr;

		//third block
		document.getElementById('name3').innerHTML= restaurants[2].name;
		if(langugage == 'en')
			document.getElementById('name3').href = restaurants[2].page_en;
		else
			document.getElementById('name3').href =restaurants[2].page_sr;

		document.getElementById('rate3').innerHTML= restaurants[2].rateSum/restaurants[2].rateNum;
		document.getElementById('address3').innerHTML= restaurants[2].address;
		
		document.getElementById('link3').style.backgroundImage = "url(" + restaurants[2].picture + ")";
		if(langugage == 'en')
			document.getElementById('link3').href = restaurants[2].page_en;
		else
			document.getElementById('link3').href =restaurants[2].page_sr;
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
	
		//first block
		document.getElementById('name1').innerHTML= restaurants[0].name;
		if(langugage == 'en')
			document.getElementById('name1').href = restaurants[0].page_en;
		else
			document.getElementById('name1').href =restaurants[0].page_sr;

		document.getElementById('rate1').innerHTML= restaurants[0].rateSum/restaurants[0].rateNum;
		document.getElementById('address1').innerHTML= restaurants[0].address;
		
		document.getElementById('link1').style.backgroundImage = "url(" + restaurants[0].picture + ")";
		if(langugage == 'en')
			document.getElementById('link1').href = restaurants[0].page_en;
		else
			document.getElementById('link1').href =restaurants[0].page_sr;


		//second block
		document.getElementById('name2').innerHTML= restaurants[1].name;
		if(langugage == 'en')
			document.getElementById('name2').href = restaurants[1].page_en;
		else
			document.getElementById('name2').href =restaurants[1].page_sr;

		document.getElementById('rate2').innerHTML= restaurants[1].rateSum/restaurants[1].rateNum;
		document.getElementById('address2').innerHTML= restaurants[1].address;
		
		document.getElementById('link2').style.backgroundImage = "url(" + restaurants[1].picture + ")";
		if(langugage == 'en')
			document.getElementById('link2').href = restaurants[1].page_en;
		else
			document.getElementById('link2').href =restaurants[1].page_sr;

		//third block
		document.getElementById('name3').innerHTML= restaurants[2].name;
		if(langugage == 'en')
			document.getElementById('name3').href = restaurants[2].page_en;
		else
			document.getElementById('name3').href =restaurants[2].page_sr;

		document.getElementById('rate3').innerHTML= restaurants[2].rateSum/restaurants[2].rateNum;
		document.getElementById('address3').innerHTML= restaurants[2].address;
		
		document.getElementById('link3').style.backgroundImage = "url(" + restaurants[2].picture + ")";
		if(langugage == 'en')
			document.getElementById('link3').href = restaurants[2].page_en;
		else
			document.getElementById('link3').href =restaurants[2].page_sr;
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

		//first block
		document.getElementById('name1').innerHTML= restaurants[0].name;
		if(langugage == 'en')
			document.getElementById('name1').href = restaurants[0].page_en;
		else
			document.getElementById('name1').href =restaurants[0].page_sr;

		document.getElementById('rate1').innerHTML= restaurants[0].rateSum/restaurants[0].rateNum;
		document.getElementById('address1').innerHTML= restaurants[0].address;
		
		document.getElementById('link1').style.backgroundImage = "url(" + restaurants[0].picture + ")";
		if(langugage == 'en')
			document.getElementById('link1').href = restaurants[0].page_en;
		else
			document.getElementById('link1').href =restaurants[0].page_sr;


		//second block
		document.getElementById('name2').innerHTML= restaurants[1].name;
		if(langugage == 'en')
			document.getElementById('name2').href = restaurants[1].page_en;
		else
			document.getElementById('name2').href =restaurants[1].page_sr;

		document.getElementById('rate2').innerHTML= restaurants[1].rateSum/restaurants[1].rateNum;
		document.getElementById('address2').innerHTML= restaurants[1].address;
		
		document.getElementById('link2').style.backgroundImage = "url(" + restaurants[1].picture + ")";
		if(langugage == 'en')
			document.getElementById('link2').href = restaurants[1].page_en;
		else
			document.getElementById('link2').href =restaurants[1].page_sr;

		//third block
		document.getElementById('name3').innerHTML= restaurants[2].name;
		if(langugage == 'en')
			document.getElementById('name3').href = restaurants[2].page_en;
		else
			document.getElementById('name3').href =restaurants[2].page_sr;

		document.getElementById('rate3').innerHTML= restaurants[2].rateSum/restaurants[2].rateNum;
		document.getElementById('address3').innerHTML= restaurants[2].address;
		
		document.getElementById('link3').style.backgroundImage = "url(" + restaurants[2].picture + ")";
		if(langugage == 'en')
			document.getElementById('link3').href = restaurants[2].page_en;
		else
			document.getElementById('link3').href =restaurants[2].page_sr;
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