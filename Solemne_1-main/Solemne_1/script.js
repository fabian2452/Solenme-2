function iniciarMap(){

	function localizacion(posicion){
		var latitude = posicion.coords.latitude;
		var longitude = posicion.coords.longitude;
		var coord = {lat:latitude ,lng: longitude};
	    var map = new google.maps.Map(document.getElementById('map'),{
	      zoom: 10,
	      center: coord
	    });
	    var marker = new google.maps.Marker({
	      position: coord,
	      map: map
	    });
	}

	function error(){
		output.innerHTML = "<p>No se pudo obtener tu ubicación</p>";

	}
	navigator.geolocation.getCurrentPosition(localizacion,error);

}
const dollarContainer = document.getElementById('dollar');
const usdAmount = document.getElementById('usd-amount');

fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => response.json())
    .then(data => displayData(data));

const displayData = data => {
    const usd = data.bpi.USD.rate_float;
    usdAmount.textContent = `$${usd} USD`;
    const totalDollarItems = Math.trunc(usd / 1000);

}
