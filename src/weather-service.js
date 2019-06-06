// export class WeatherService {
//   getWeatherByCity(city) {
//     $.ajax({
//       url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=API-KEY-GOES-HERE`,
//       type: 'GET',
//       data: {
//         format: 'json'
//       },
//       success: function(response) {
//         $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
//         $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
//       },
//       error: function() {
//         $('#errors').text("There was an error processing your request. Please try again.");
//       }
//     });
//   }
// }

// let WeatherService = function() {}
// WeatherService.prototype.getWeatherByCity = function(city) {
//   $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=API-KEY-GOES-HERE`).then(function(response) {
//     $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
//     $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
//   }).fail(function(error) {
//     $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
//   });
// }
// exports.weatherService = WeatherService;

import { displayData } from './main.js';

var WeatherService = function() {

}

WeatherService.prototype.getWeatherByCity = function(city, displayData) {
  $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=API-KEY-GOES-HERE`)
    .then(function(results) {
      displayData(results);
    })
    .fail(function() {
      console.log('something went wrong');
    });
}

exports.weatherService = WeatherService;
