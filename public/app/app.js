angular.module("BirthdayWishes", ["App-Routes", "Controller", "angularMoment", "angular-loading-bar"])

.run(function($rootScope, $scope, $state){
    $rootScope.birth_date = new Date("31/01/2017 00:00:00")
    $rootScope.tickInterval = 1000
})