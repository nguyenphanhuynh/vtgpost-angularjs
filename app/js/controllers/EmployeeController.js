var app = angular.module('VTGApp', ['ngRoute']);

app.controller('EmployeeController', function ($rootScope, $scope, $http, $timeout, $state, services) {
    $scope.$on('$viewContentLoaded', function () {
        // initialize core components
    });

    $scope.itemsPerPage = 10; // default is 10
    $scope.currentPage = 1;

    // Get data from server
    $scope.employees = services.getEmployees($scope.itemsPerPage, $scope.currentPage);

    $scope.totalItems = $scope.employees.length;

    $scope.pageCount = Math.ceil($scope.totalItems / $scope.itemsPerPage);
    // Complete getting data from server


    // set sidebar closed and body solid layout mode
    $rootScope.settings.layout.pageContentWhite = true;
    $rootScope.settings.layout.pageBodySolid = false;
    $rootScope.settings.layout.pageSidebarClosed = false;

    $scope.delete = function (id, username, index) {
        bootbox.confirm("Are you sure to delete user " + username + "?", function (result) {
            if (result) {
                var result = services.deleteEmployee(id);

                $scope.$apply(function () {
                    $scope.employees.splice(index, 1);
                });

                if (result.success) {
                    //window.location.reload();
                } else {
                    bootbox.alert(result.message);
                }
            } else {
                // do nothing
            }
        });
    };

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function () {
        console.log('Page changed to: ' + $scope.currentPage);
        // reload $scope.employees here
    };

    $scope.maxSize = 5;
    $scope.bigTotalItems = 175;
    $scope.bigCurrentPage = 1;
});

app.controller('EditEmployeeController', function ($rootScope, $scope, $location, $window, $routeParams, $state, services) {
    $scope.$on('$viewContentLoaded', function () {
        // initialize core components
        $('#active').bootstrapSwitch('state', $scope.employee.active);
        $('input[type="text"]').maxlength({
            limitReachedClass: "label label-danger",
        });
    });
    var employee_id = ($location.search().id) ? parseInt($location.search().id) : 0;

    $rootScope.title = (employee_id > -1) ? 'Chỉnh sửa thông tin nhân viên' : 'Tạo tài khoản mới';
    $scope.buttonText = (employee_id > -1) ? 'Lưu chỉnh sửa' : 'Tạo tài khoản mới';

    $scope.employee = services.getEmployee(employee_id);

    $scope.submit = function () {
        if (employee_id == -1) {
            // new employee
            var result = services.newEmployee($scope.employee);
            if (result.success) {
                $window.location.href = '#/employee-list.html';
            } else {
                bootbox.alert(result.message);
            }
        } else {
            // update employee
            var result = services.updateEmployee(employee_id, $scope.employee);
            if (result.success) {
                $window.location.href = '#/employee-list.html';
            } else {
                bootbox.alert(result.message);
            }
        }
    };
});

app.controller('ChangePasswordEmployeeController', function ($rootScope, $scope, $location, $window, $state, $routeParams, services) {
    $scope.$on('$viewContentLoaded', function () {
        // initialize core components
    });
    var employee_id = ($location.search().id) ? parseInt($location.search().id) : 0;

    $scope.employee = services.getEmployee(employee_id);
    var oldEmployee = $scope.employee;

    $scope.submit = function () {
        if (employee_id != -1) {
            // new employee
            var result = services.newEmployee($scope.employee);
            if (result.success) {
                $window.location.href = '#/employee-list.html';
            } else {
                bootbox.alert(result.message);
            }
        } else {
            bootbox.alert('Invalid user info!');
        }
    };
});