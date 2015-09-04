angular
	.module("DevConSpa", ["ui.router"])
	.config(function($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state("state1", {
				url: "/state1",
				templateUrl:"templates/page1.html",
				controller: "UsersController"
			})
			.state("state2",{
				url: "/state2",
				templateUrl:"templates/page2.html",
				controller: function ($scope) {
					$scope.list = ["uno", "dos", "tres"];
				}
			});

		$urlRouterProvider.otherwise("/");

	})
	.controller("SpaController", ["$scope", function (scope) {

	}]);