angular
	.module("DevConSpa")
	.controller("UsersController", ["$scope", "$http", function (vm, $http) {
		vm.welcome = "Bienvenidos a la página 1";

		$http
			.get("http://jsonplaceholder.typicode.com/posts")
			.success(function (data) {
				vm.posts = data;
			})
			.error(function (error) {
				console.log(error);
			})
	}]);