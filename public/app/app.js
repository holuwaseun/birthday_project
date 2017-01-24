angular.module("BirthdayWishes", ["App-Routes", "Controller", "angularMoment", "angular-loading-bar"])

.run(['$rootScope', '$state', function($rootScope, $state){
    $rootScope.birth_date = new Date("02/31/2017 00:00:00")
    $rootScope.tickInterval = 1000
}])