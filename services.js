// SERVICES
weatherApp.service("cityNameService", function () {
  var self = this;
  this.cityName = "Szeged,hu";
});

weatherApp.service("weatherForecastApi", ["$resource", function ($resource) {
  var self = this;

  this.getWeather = function (cityName, days) {
    // define resource
    var weatherAPI = $resource(
      "http://api.openweathermap.org/data/2.5/forecast/",
      {
        jsonpCallbackParam: "callback",
      },
      { get: { method: "JSONP" } }
    );

    // get resource
    return weatherAPI.get({
      q: cityName,
      cnt: days,
      appid: "e0cdf3625fa38b6b99d6481440ff205b",
    });
  };

}]);
