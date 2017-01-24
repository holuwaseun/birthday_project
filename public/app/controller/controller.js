angular.module("Controller", [])

.controller("IndexController", ['$rootScope', '$scope', '$timeout', '$filter', '$state', 'moment', function($rootScope, $scope, $timeout, $filter, $state, $moment){
    // Declare a new Date Object
    $scope.current_date = new Date()
    $scope.current_month = ($scope.current_date.getMonth() === $rootScope.birth_date.getMonth())
    
    $scope.start_time = new Date(`${$rootScope.birth_date.getMonth() + 1}/01/${$rootScope.birth_date.getFullYear()} 00:00:00`).getTime()

    $rootScope.title = `Birthday Wishes - ${$state.current.title}`

    // Run a check to see if the expected birth day and month is true
    if(parseInt($scope.current_date.getDate()) === parseInt($rootScope.birth_date.getDate()) && parseInt($scope.current_date.getMonth()) === parseInt($rootScope.birth_date.getMonth()))
    {
        // Redirect to the greetings page
        $state.go("main.greeting", null, {reload: true})
        $rootScope.is_birthday = true
    }
    else
    {
        // Create a countdown clock to display on the home page
        let duration = 0
        let tick = () => {
            $scope.current_date = new Date()
            
            let percent = (($scope.current_date.getTime() - $scope.start_time) / ($rootScope.birth_date.getTime() - $scope.start_time)) * 100
            $scope.percentage = $filter('number')(percent, 0)
            
            duration = ($rootScope.birth_date.getTime() - $scope.current_date.getTime())
            
            $scope.duration = {
                M: moment.duration(duration).get("M") > 9 ? moment.duration(duration).get("M") : `0${moment.duration(duration).get("M")}`,
                w: moment.duration(duration).get("w") > 9 ? moment.duration(duration).get("w") : `0${moment.duration(duration).get("w")}`,
                d: moment.duration(duration).get("d") > 9 ? moment.duration(duration).get("d") : `0${moment.duration(duration).get("d")}`,
                h: moment.duration(duration).get("h") > 9 ? moment.duration(duration).get("h") : `0${moment.duration(duration).get("h")}`,
                m: moment.duration(duration).get("m") > 9 ? moment.duration(duration).get("m") : `0${moment.duration(duration).get("m")}`,
                s: moment.duration(duration).get("s") > 9 ? moment.duration(duration).get("s") : `0${moment.duration(duration).get("s")}`
            }
            $timeout(tick, $rootScope.tickInterval)
        }

        $timeout(tick, $rootScope.tickInterval)

        $rootScope.is_birthday = false
    }

}])