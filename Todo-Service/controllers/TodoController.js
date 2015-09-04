angular
	.module("DevTodoApp", ["LocalStorageModule"])
	.service("DevTodoService", function(localStorageService) {

		this.key = "DevConTodo-service";
		this.list =[];

		if (localStorageService.get(this.key)) {
			this.list = localStorageService.get(this.key);
		} else{
			this.list = [];
		};

		this.add = function (newTask) {
			this.list.push(newTask);
			this.update();
		};

		this.update = function () {
			localStorageService.set(this.key, this.list);
		}

		this.clean = function () {
			this.list = [];
			this.update();
		}

		this.getAll = function () {
			return this.list;
		}

		this.removeElem = function (elem) {
			this.list = this.list.filter(function (e) {
				return e != elem;

			});
			this.update();
			return this.getAll();
		}
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