angular.module("BirthdayWishes", ["App-Routes", "Controller", "angularMoment", "ngAnimate", "angular-loading-bar", "countTo"])

.run(['$rootScope', '$state', function($rootScope, $scope, $state){
    $rootScope.fullname = "Ajayi Oluwabimpe"
    $rootScope.birth_date = new Date("01/27/2017 04:54:00")
    $rootScope.current_date = new Date()
    $rootScope.tickInterval = 1000

    $rootScope.$on("$stateChangeSuccess", function(previous, current){
        $scope.slide = 'slide-left'
    })

}])