

var App = angular.module("AllDayDr",["ui.router"]);

App.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){


    $urlRouterProvider.otherwise("/home");


    $stateProvider
    .state("first", {
        url: "/first",
        template: "<first-component></first-component>",
        // resolve: {
        //     deps: [
        //       "$ocLazyLoad",
        //       function ($ocLazyLoad) {
        //         alert('kkhk');
        //       }
        //     ]
        //   }
    })
    .state("home",{
        url : "/home",
        template : "<home-component></home-component>"
    })
    .state("dashboard",{
        url : "/dashboard",
        template : "<dashboard-component></dashboard-component>"
    });

}]);

// First Component --
function firstComponent(){
    var ctrl = this;

    ctrl.$onInit = function(){
    }
}

angular.module("AllDayDr")
.component('firstComponent',{
    templateUrl : 'app/component/firstComponent/firstComponent.html',
    transclude: true,
    controller: firstComponent,
    bindings: {}
})

// Home Component
function homeComponent(){
    var ctrl = this;

    ctrl.$onInit = function(){
    }
}

angular.module("AllDayDr")
.component('homeComponent',{
    templateUrl : 'app/component/homeComponent/homeComponent.html',
    transclude: true,
    controller: homeComponent,
    bindings: {}
})

// Dashboard Component --
function dashboardComponent(){
    var ctrl = this;

    ctrl.$onInit = function(){
    }
}

angular.module("AllDayDr")
.component('dashboardComponent',{
    templateUrl : 'app/component/dashboardComponent/dashboardComponent.html',
    transclude: true,
    controller: dashboardComponent,
    bindings: {}
})



App.controller("myCtrl",function(){

    

});


