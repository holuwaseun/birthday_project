angular.module("App-Routes", ["ui.router"])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $stateProvider
        .state("index", {
            url: "/index",
            templateUrl: "app/views/pages/page.index.html",
            access: {restricted: false},
            title: "Birthday Wishes",
            controller: "IndexController",
            controllerAs: "index"
        })

    $urlRouterProvider.otherwise('/index')
}])
