// DIRECTIVES
weatherApp.directive("weatherForecast", function() {
  return {
    restrict: "EA",
    templateUrl: "directives/weatherForecast.html",
    replace: true,
    scope: {
      weatherReport: "=",
      
      dateFormat: "@",

      // use method
      convertToDateTime: "&",
      convertToFahrenheit: "&",
      convertToCelsius: "&",
    }
  }
});