
const axios = require('axios');
const moment = require('moment');
const fs = require('fs');

axios({
	method: 'get',
	url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson',
	responseType: 'json',
	headers: {
		'Content-Type': 'application/json'
	}

})
	.then(function (response) {
		console.log(response.data);
		console.log(response.data.features);
		var geodatashort = processGeoJson(response.data.features);
		console.log(geodatashort);

		var wstream = fs.createWriteStream(__dirname + '/myoutput.json');

		wstream.write(JSON.stringify(geodatashort));
		wstream.end();

	})
	.catch(function (error) {
		console.log("error-log:\n", error);
	});


function processGeoJson(features) {
	// map all time data in readable format
	var reformattedArray = features
	.filter((obj)=> { return (obj.properties.mag > 4.5)})
	.map((obj) => {
		var rObj = {};
		rObj['id'] = obj.id;
		rObj['time'] = moment(obj.properties.time).format();
		rObj['mag'] = obj.properties.mag;
		rObj['place'] = obj.properties.place;
		rObj['geometry'] = obj.geometry;

		return rObj;
	})

	return reformattedArray;
}