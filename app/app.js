

var App = angular.module("AllDayDr",["ui.router"]);

App.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){


    $urlRouterProvider.otherwise("/home");


    $stateProvider
    .state("first", {
        url: "/first",
        template: "<first-component></first-component>",
        resolve: {
            deps: [
              "$ocLazyLoad",
              function ($ocLazyLoad) {
                alert('kkhk')
              }
            ]
          }
    })
    .state("home",{
        url : "/home",
        template : "<home-component></home-component>"
    });

}]);


function firstComponent(){
    var ctrl = this;

    ctrl.$onInit = function(){
        alert('init component controller');
    }
}

angular.module("AllDayDr")
.component('firstComponent',{
    templateUrl : 'app/component/firstComponent/firstComponent.html',
    transclude: true,
    controller: firstComponent,
    bindings: {}
})


function homeComponent(){
    var ctrl = this;

    ctrl.$onInit = function(){
        alert('init home component controller');
    }
}

angular.module("AllDayDr")
.component('homeComponent',{
    templateUrl : 'app/component/homeComponent/homeComponent.html',
    transclude: true,
    controller: homeComponent,
    bindings: {}
})




App.controller("myCtrl",function(){

    

});


