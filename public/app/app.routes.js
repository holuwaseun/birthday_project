angular.module("App-Routes", ["ui.router"])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $stateProvider
        .state("index", {
            url: "/index",
            templateUrl: "app/views/pages/page.index.html",
            access: {restricted: false},
            controller: "IndexController",
            controllerAs: "index",
            onEnter: ($rootScope, $state) => {
                // Run a check to see if the expected birth day and month is true
                if(parseInt($rootScope.current_date.getDate()) === parseInt($rootScope.birth_date.getDate()) && parseInt($rootScope.current_date.getMonth()) === parseInt($rootScope.birth_date.getMonth()))
                {
                    if(parseInt($rootScope.current_date.getHours()) > parseInt($rootScope.birth_date.getHours()))
                    {
                        // Redirect to the greetings page
                        $state.go('greeting', null, {reload: true})
                    }
                    else
                    {
                        if(parseInt($rootScope.current_date.getMinutes()) >= parseInt($rootScope.birth_date.getMinutes()))
                        {
                            // Redirect to the greetings page
                            $state.go('greeting', null, {reload: true})
                        }
                    }
                }

                if(parseInt($rootScope.current_date.getDate()) > parseInt($rootScope.birth_date.getDate()) && parseInt($rootScope.current_date.getMonth()) > parseInt($rootScope.birth_date.getMonth()))
                {
                    // Redirect to the greetings page
                    $state.go('greeting', null, {reload: true})
                }

                $rootScope.title = `Birthday Loading`
                $rootScope.page_name = `page-waiting`
            }
        })
        .state("greeting", {
            url: "/greeting",
            templateUrl: "app/views/pages/page.greeting.html",
            access: {restricted: false},
            controller: "GreetingController",
            controllerAs: "greeting",
            onEnter: ($rootScope, $state) => {
                // Run a check to see if the expected birth day and month is true
                if(parseInt($rootScope.current_date.getDate()) <= parseInt($rootScope.birth_date.getDate()) && parseInt($rootScope.current_date.getMonth()) <= parseInt($rootScope.birth_date.getMonth()))
                {
                    if(parseInt($rootScope.current_date.getHours()) < parseInt($rootScope.birth_date.getHours()))
                    {
                        // Redirect to the greetings page
                        $state.go('index', null, {reload: true})
                    }
                    else
                    {
                        if(parseInt($rootScope.current_date.getMinutes()) < parseInt($rootScope.birth_date.getMinutes()))
                        {
                            // Redirect to the greetings page
                            $state.go('index', null, {reload: true})
                        }
                    }
                }
                $rootScope.title = `Happy Birthday`
                $rootScope.page_name = `page-greeting`
            }
        })
        .state("message", {
            url: "/message",
            templateUrl: "app/views/pages/page.message.html",
            access: {restricted: false},
            controller: "MessageController",
            controllerAs: "message",
            onEnter: ($rootScope, $state) => {
                // Run a check to see if the expected birth day and month is true
                if(parseInt($rootScope.current_date.getDate()) <= parseInt($rootScope.birth_date.getDate()) && parseInt($rootScope.current_date.getMonth()) <= parseInt($rootScope.birth_date.getMonth()))
                {
                    if(parseInt($rootScope.current_date.getHours()) < parseInt($rootScope.birth_date.getHours()))
                    {
                        // Redirect to the greetings page
                        $state.go('index', null, {reload: true})
                    }
                    else
                    {
                        if(parseInt($rootScope.current_date.getMinutes()) < parseInt($rootScope.birth_date.getMinutes()))
                        {
                            // Redirect to the greetings page
                            $state.go('index', null, {reload: true})
                        }
                    }
                }
                $rootScope.title = `Birthday Shouts`
                $rootScope.page_name = `page-message`
            }
        })

    $urlRouterProvider.otherwise('/index')
}])
