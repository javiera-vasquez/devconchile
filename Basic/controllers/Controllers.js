angular
	.module("DevConApp", []) //retorna referencia a la aplicación
	.controller("FirstController", ["$scope", function (vm) {
		vm.dev = "devCon - 2015";
		vm.newPost = {};

		vm.posts = [
			{
				text: "Comentario 1",
				username: "omolina"
			},
			{
				text: "Comentario 2",
				username: "dev"
			}
		];

		vm.addPost = function () {
			vm.posts.push(vm.newPost);
			vm.newPost = {};
		};
	}])

	.controller("SecondController", ["$scope","$http", function (vm, $http) {
		vm.welcome = "Bienvenido al Segundo controlador";
		vm.error = null;
		vm.users = {};
		vm.newUser = {};
		$http
			.get("http://jsonplaceholder.typicode.com/users")
			.success(function (data, status, headers, config) {
				vm.users = data;
			})
			.error(function (error, status, headers, config) {
				vm.error = "Error al conectar con API";
			})

		vm.addUser = function () {
			$http
				.post("http://jsonplaceholder.typicode.com/users", {
					name: vm.newUser.name,
					username: vm.newUser.username,
					email:vm.newUser.email
				})
				.success(function (response) {
					vm.users.push(vm.newUser);
					vm.newUser = {};
				})
				.error(function(error) {
					console.log(error);
				});
		}

	}]);