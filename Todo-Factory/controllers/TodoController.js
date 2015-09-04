angular
	.module("DevTodoApp", ["LocalStorageModule"])
	.factory("DevTodoService", function(localStorageService) {
		var todoFactory = {};

		todoFactory.key = "DevConTodo";
		todoFactory.list =[];

		if (localStorageService.get(todoFactory.key)) {
			todoFactory.list = localStorageService.get(todoFactory.key);
		} else{
			todoFactory.list = [];
		};

		todoFactory.add = function (newTask) {
			todoFactory.list.push(newTask);
			todoFactory.update();
		};

		todoFactory.update = function () {
			localStorageService.set(todoFactory.key, todoFactory.list);
		}

		todoFactory.clean = function () {
			todoFactory.list = [];
			todoFactory.update();
		}

		todoFactory.getAll = function () {
			return todoFactory.list;
		}

		todoFactory.removeElem = function (elem) {
			todoFactory.list = todoFactory.list.filter(function (e) {
				return e != elem;

			});
			todoFactory.update();
			return todoFactory.getAll();
		}

		return todoFactory;
	})
	.controller("DevTodoController", ["$scope","DevTodoService", function (vm, DevTodoService) {
		vm.title = "TODO - DEVCON";

		vm.list = DevTodoService.getAll();

		vm.addTask = function () {
			DevTodoService.add(vm.newTask);
		}

		vm.removeTasks = function () {
			vm.list = DevTodoService.clean();
		}

		vm.removeElem = function (elem) {
			vm.list = DevTodoService.removeElem(elem);
		}




	}]);