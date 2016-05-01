(function() {

angular
  .module('app')
  .config(config);

  	function config ($stateProvider, $urlRouterProvider) {
   	$urlRouterProvider.otherwise('defaultstatehere');

   	$stateProvider
   	  .state('defaultstatehere', {
   	    url: '/defaultstatehere',
   	    templateUrl: './views/view1/view1.html',
   	    controller: 'View1Controller',
   	    controllerAs: 'View1'
   	  })
    }

})();