angular.module("BirthdayWishes", ["App-Routes", "Controller", "angularMoment", "ngAnimate", "angular-loading-bar", "countTo"])

.run(['$rootScope', '$state', function($rootScope, $scope, $state){
    $rootScope.fullname = "Victoria(PV) Iwo"
    $rootScope.birth_date = new Date("01/31/2017 02:15:00")
    $rootScope.current_date = new Date()
    $rootScope.tickInterval = 1000

    $rootScope.$on("$stateChangeSuccess", function(previous, current){
        $scope.slide = 'slide-left'
    })

}])
