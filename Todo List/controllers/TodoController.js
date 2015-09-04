angular
	.module("DevTodoApp", ["LocalStorageModule"])
	.controller("DevTodoController", ["$scope","localStorageService", function (vm, localStorageService) {
		vm.title = "TODO - DEVCON";

		if (localStorageService.get("DevConTodo")) {
			vm.list = localStorageService.get("DevConTodo");
		} else{
			vm.list = [];
		};
		vm.newTask = {};

		vm.$watchCollection('list', function (newValue, oldValue) {
			localStorageService.set("DevConTodo", vm.list);
		});

		vm.addTask = function () {
			vm.list.push(vm.newTask);
			vm.newTask = {};
		}

		vm.removeTasks = function () {
			vm.list = [];
			//localstorageMethod
			//localStorageService.clearAll();
		}

	}]).filter("toUpperCase", function() {
		return function (text) {
			return text.toUpperCase();
		}
	});