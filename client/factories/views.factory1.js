(function() {
angular
  .module('app')
  .factory('viewFactory', viewFactory);

    viewFactory.$inject = [];
    
    function viewFactory () {

    	var stateObj = {};

    	var factory = {
    		testFunction1: testFunction1,
    		testFunction2: testFunction2
    	};

      return factory;


      function testFunction1() {
      	console.log('testFunction1 invoked!');
      }

      function testFunction2() {
      	console.log('testFunction2 invoked!');
      }
    }

})();