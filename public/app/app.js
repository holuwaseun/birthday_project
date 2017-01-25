angular.module("BirthdayWishes", ["App-Routes", "Controller", "angularMoment", "angular-loading-bar", "countTo"])

.run(['$rootScope', '$state', function($rootScope, $state){
    $rootScope.fullname = "Ajayi Oluwabimpe"
    $rootScope.birth_date = new Date("01/25/2017 10:21:00")
    $rootScope.tickInterval = 1000
}])