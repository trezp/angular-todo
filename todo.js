
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

	$scope.done = function(todo){
		var indexOf = $scope.todos.indexOf(todo);
		//checks index of todo. if not -1 than inside the array; removes one item after index 
		if (indexOf !== -1) {
			$scope.todos.splice(indexOf, 1);
		}
	};

	$scope.add = function(e){
		if(e.which && e.which === 13){
			$scope.todos.push($scope.newTodo);
			$scope.newTodo = ''; 
		}
	};
});