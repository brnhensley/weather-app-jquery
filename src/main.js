// import { WeatherService } from './weather-service.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// $(document).ready(function() {
//   $('#weatherLocation').click(function() {
//     let city = $('#location').val();
//     $('#location').val("");
//
//     let weatherService = new WeatherService();
//     let promise = weatherService.getWeatherByCity(city);
//
//     promise.then(function(response) {
//       let body = JSON.parse(response);
//       $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
//       $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
//     }, function(error) {
//       $('.showErrors').text(`There was an error processing your request: ${error.message}`);
//     });
//   });
//
// });

let WeatherService = require('./weather-service.js').weatherService;

export let displayData = function(response) {
  let body = JSON.parse(response);
  $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
  $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
};


$(document).ready(function() {
  let weatherService = new WeatherService();
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    // $('#location').val("");
    weatherService.getWeatherByCity(city, displayData);
  });
});
