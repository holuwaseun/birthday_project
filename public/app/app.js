angular.module("BirthdayWishes", ["App-Routes", "Controller", "angularMoment", "ngAnimate", "angular-loading-bar", "countTo"])

.run(['$rootScope', '$state', function($rootScope, $state){
    $rootScope.fullname = "Ajayi Oluwabimpe"
    $rootScope.birth_date = new Date("01/25/2017 22:58:00")
    $rootScope.current_date = new Date()
    $rootScope.tickInterval = 1000

    $rootScope.$on("$stateChangeSuccess", function(previous, current){
        $rootScope.title = current.title
        $rootScope.page_name = current.page_name
    })

}])