// MODULE, [dep list]
var weatherApp = angular.module("weatherApp", ["ngRoute", "ngResource"]);

weatherApp.config([
  "$sceDelegateProvider",
  function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      "self", // trust all resources from the same origin
      "*://api.openweathermap.org/**", // trust all resources from `api.openweathermap.org`
    ]);
  },
]);
