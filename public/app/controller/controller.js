angular.module("Controller", [])

.controller("IndexController", ['$rootScope', '$scope', '$timeout', '$filter', '$state', 'moment', function($rootScope, $scope, $timeout, $filter, $state, $moment){
    
    $scope.current_month = ($scope.current_date.getMonth() === $rootScope.birth_date.getMonth())
    
    $scope.start_time = new Date(`${$rootScope.birth_date.getMonth() + 1}/01/${$rootScope.birth_date.getFullYear()} 00:00:00`).getTime()

    // Create a countdown clock to display on the home page
    let duration = 0
    let tick = () => {
        $rootScope.current_date = new Date()
            
        let percent = (($rootScope.current_date.getTime() - $scope.start_time) / ($rootScope.birth_date.getTime() - $scope.start_time)) * 100
        $scope.percentage = $filter('number')(percent, 2)
            
        duration = ($rootScope.birth_date.getTime() - $rootScope.current_date.getTime())
            
        $scope.duration = {
            M: moment.duration(duration).get("M") > 9 ? moment.duration(duration).get("M") : `0${moment.duration(duration).get("M")}`,
            w: moment.duration(duration).get("w") > 9 ? moment.duration(duration).get("w") : `0${moment.duration(duration).get("w")}`,
            d: moment.duration(duration).get("d") > 9 ? moment.duration(duration).get("d") : `0${moment.duration(duration).get("d")}`,
            h: moment.duration(duration).get("h") > 9 ? moment.duration(duration).get("h") : `0${moment.duration(duration).get("h")}`,
            m: moment.duration(duration).get("m") > 9 ? moment.duration(duration).get("m") : `0${moment.duration(duration).get("m")}`,
            s: moment.duration(duration).get("s") > 9 ? moment.duration(duration).get("s") : `0${moment.duration(duration).get("s")}`
        }

        // Run a check to see if the expected birth day and month is true
        if(parseInt($rootScope.current_date.getDate()) === parseInt($rootScope.birth_date.getDate()) && parseInt($rootScope.current_date.getMonth()) === parseInt($rootScope.birth_date.getMonth()))
        {
            if(parseInt($rootScope.current_date.getHours()) === parseInt($rootScope.birth_date.getHours()) && parseInt($rootScope.current_date.getMinutes()) === parseInt($rootScope.birth_date.getMinutes()))
            {
                $timeout.cancel()
                // Redirect to the greetings page
                $state.go('greeting', null, {reload: true})
            }
            else
            {
                $timeout(tick, $rootScope.tickInterval)
            }
        }
        else
        {
            $timeout(tick, $rootScope.tickInterval)
        }
    }

    $timeout(tick, $rootScope.tickInterval)

}])

.controller("GreetingController", ['$rootScope', '$scope', '$filter', '$state', function($rootScope, $scope, $filter, $state){
    
    let vm = this

    vm.showShouts = () => {
        $state.go('message', null, {reload: true})
    }

}])

.controller("MessageController", ['$rootScope', '$scope', '$filter', '$timeout', '$state', function($rootScope, $scope, $filter, $timeout, $state){
    
    let vm = this

    $rootScope.show_msg_one = false
    $rootScope.show_msg_two = false
    $rootScope.show_msg_three = false

    $timeout(() => {
        $rootScope.show_msg_one = true

        $timeout(() => {
            $rootScope.show_msg_two = true

            $timeout(() => {
                $rootScope.show_msg_three = true
            }, 4000)

        }, 4000)

    }, 2000)

}])