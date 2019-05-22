
function sortByName(region, langugage){
	fetch("../json/base.json"){
		.then(function (resp){
			return resp.json();
		})
	}

}

function mySort(val, region, langugage){
	if(val == 1)
		sortByName(region, langugage);

}