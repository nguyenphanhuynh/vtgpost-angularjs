var app = angular.module('VTGApp', ['ngRoute']);

app.controller('EmployeeController', function ($rootScope, $scope, $http, $timeout, $state, services) {
    $scope.$on('$viewContentLoaded', function () {
        // initialize core components
    });
    $scope.employees = services.getEmployees();

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

                if(result.success) {
                    //window.location.reload();
                } else {
                    bootbox.alert(result.message);
                }
            } else {
                // do nothing
            }
        });
    }
});

app.controller('EditEmployeeController', function ($rootScope, $scope, $location, $window, $routeParams, $state, services) {
    $scope.$on('$viewContentLoaded', function () {
        // initialize core components
    });
    var employee_id = ($location.search().id) ? parseInt($location.search().id) : 0;

    $rootScope.title = (employee_id > -1) ? 'Chỉnh sửa thông tin nhân viên' : 'Tạo tài khoản mới';
    $scope.buttonText = (employee_id > -1) ? 'Lưu hỉnh sửa' : 'Tạo tài khoản mới';

    $scope.employee = services.getEmployee(employee_id);
    var oldEmployee = $scope.employee;

    $scope.submit = function () {
        if(employee_id == -1 ) {
            // new employee
            var result = services.newEmployee($scope.employee);
            if(result.success) {
                $window.location.href = '#/employee-list.html';
            } else {
                bootbox.alert(result.message);
            }
        } else {
            // update employee
            var result = services.updateEmployee(employee_id, $scope.employee);
            if(result.success) {
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
        if(employee_id != -1 ) {
            // new employee
            var result = services.newEmployee($scope.employee);
            if(result.success) {
                $window.location.href = '#/employee-list.html';
            } else {
                bootbox.alert(result.message);
            }
        } else {
            bootbox.alert('Invalid user info!');
        }
    };
});