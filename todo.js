
//initialize app by creating a module
//everything in angular inside a module
//the empty array is for declaring dependancy modules 
var app = angular.module("Todo", []);

//create controller by calling controller function on module 
//names controller, defined controller logic
//dependency injection -- scope links controller and view. Inject rather than instantiate
app.controller('TodoCtrl', function($scope){
	$scope.todos = [
	'Learn Sketch',
	'Look at Dribbble and feel inferior',
	'Actually learn how to use the Pen tool'
	];
});