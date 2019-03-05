(function(){

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
})();