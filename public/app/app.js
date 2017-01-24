angular.module("BirthdayWishes", ["App-Routes", "Controller", "angularMoment", "angular-loading-bar", "countTo"])

.run(['$rootScope', '$state', function($rootScope, $state){
    $rootScope.birth_date = new Date("01/31/2017 00:00:00")
    $rootScope.tickInterval = 1000
}])