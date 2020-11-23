
var searchButtonEl = document.querySelector("#search-button");



const weather_API_KEY= 'b57ef236dab11f458b2cfbe736d09dfd'
const TEMPERATURE_PROPERTY ='temp'
const HUMIDITY_PROPERTY ='humid'
const PRESSURE_PROPERTY = 'pressure'



  var searchValue = function() {
    fetch("http://api.openweathermap.org/data/2.5/forecast?id=524901&appid");
  };
