angular.module("Controller", [])

.controller("IndexController", function($rootScope, $scope, $timeout, $filter, $state){
    // Declare a new Date Object
    $scope.current_date = new Date()

    // Run a check to see if the expected birth day and month is true
    if($scope.current_date.getDay() === $rootScope.birth_date.getDay() && $scope.current_date.getMonth() === $rootScope.birth_date.getMonth())
    {
        // Redirect to the greetings page
        $state.go("main.greeting", null, {reload: true})
        $rootScope.is_birthday = true
    }
    else
    {
        // Create a countdown clock to display on the home page
        $scope.tick = () => {
            $scope.months = $rootScope.birth_date.getMonth() - $cope.current_date.getMonth()
            $scope.days = $rootScope.birth_date.getDay() - $scope.current_date.getDay()
            $scope.hours = 0
            $scope.minutes = 0
            $scope.seconds = 0
            $timeout($scope.tick, $rootScope.tickInterval)
        }

        $timeout($scope.tick, $rootScope.tickInterval)

        $rootScope.is_birthday = false
    }

})


.controller("MainController", function($rootScope, $scope, $timeout, $filter, $state){

})


.controller("GreetingController", function($rootScope, $scope, $timeout, $filter, $state){

})


.controller("MessageController", function($rootScope, $scope, $timeout, $filter, $state){

})