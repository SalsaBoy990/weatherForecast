// CONTROLLERS
weatherApp.controller("homeController", [
  "$scope",
  "$location",
  "cityNameService",
  function ($scope, $location, cityNameService) {
    // store city name
    $scope.cityName = cityNameService.cityName;

    // bind data to service
    $scope.$watch("cityName", function () {
      cityNameService.cityName = $scope.cityName;
    });

    // on submit "redirect" to results page
    // enter also works when submitting
    $scope.submit = function () {
      $location.path('/forecast');
    }
  },
]);

weatherApp.controller("forecastController", [
  "$scope",
  "$sce",
  "$routeParams",
  "cityNameService",
  "weatherForecastApi",
  function ($scope, $sce, $routeParams, cityNameService, weatherForecastApi) {
    // store city name
    $scope.cityName = cityNameService.cityName;
    $scope.days = $routeParams.days || '16';

    $scope.weatherResult = weatherForecastApi.getWeather($scope.cityName, $scope.days);

    // convert temp to F
    $scope.convertToFahrenheit = function(degK) {
      return Math.round(1.8 * (degK - 273.15) + 32) + ' °F';
    }

    // convert temp to C
    $scope.convertToCelsius = function(degK) {
      return Math.round((degK - 273.15), 1) + ' °C';
    }

    $scope.convertToDateTime = function(timestamp) {
      // multiplied by 1000 so that the argument is in milliseconds, not seconds.
      return new Date(timestamp * 1000);
    }
  },
]);