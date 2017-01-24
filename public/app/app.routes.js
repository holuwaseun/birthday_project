angular.module("App-Routes", ["ui.router"])

.config(function($stateProvider, $urlRouterProvider, $locationProvider){

    $stateProvider
        .state("index", {
            url: "/index",
            templateUrl: "app/views/pages/page.index.html",
            access: {restricted: false},
            title: "Birthday Loading",
            controller: "IndexController",
            controllerAs: "index"
        })
        .state("main", {
            url: "/main",
            abstract: true,
            templateUrl: "app/views/pages/page.main.html",
            access: {restricted: true},
            controller: "MainController",
            controllerAs: "main"
        })
        .state("main.greeting", {
            url: "main/greeting",
            templateUrl: "app/views/pages/page.greeting.html",
            access: {restricted: true},
            title: "Happy Birthday",
            controller: "GreetingController",
            controllerAs: "greeting"
        })
        .state("main.message", {
            url: "main/message",
            templateUrl: "app/views/pages/page.message.html",
            access: {restricted: true},
            title: "Birthday Messages",
            controller: "MessageController",
            controllerAs: "message"
        })

    $urlRouterProvider.otherwise('/index')
})
