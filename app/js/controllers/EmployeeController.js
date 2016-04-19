var app = angular.module('VTGApp', ['ngRoute']);

app.controller('EmployeeController', function ($rootScope, $scope, $http, $timeout, services) {
    $scope.$on('$viewContentLoaded', function () {
        // initialize core components
    });
    $scope.employees = services.getEmployees();

    // set sidebar closed and body solid layout mode
    $rootScope.settings.layout.pageContentWhite = true;
    $rootScope.settings.layout.pageBodySolid = false;
    $rootScope.settings.layout.pageSidebarClosed = false;

    $scope.delete = function (id, username) {
        bootbox.confirm("Are you sure to delete user " + username + "?", function (result) {
            if (result) {
                services.deleteEmployee(id);
            } else {
                // do nothing
            }
        });
    }
});

app.controller('EditEmployeeController', function ($rootScope, $scope, $location, $routeParams, services) {
    $scope.$on('$viewContentLoaded', function () {
        // initialize core components
    });
    var employee_id = ($location.search().id) ? parseInt($location.search().id) : 0;
    console.log($routeParams.employee_id);
    $rootScope.title = (employee_id > -1) ? 'Edit Employee' : 'Add Employee';
    $scope.buttonText = (employee_id > -1) ? 'Update Employee' : 'Add New Employee';

    var employee = {};

    $scope.saveEmploye = function (employee) {
        $location.path('/');
        if (employee_id <= -1) {
            services.insertCustomer(employee);
        }
        else {
            services.updateCustomer(employee_id, employee);
        }
    };
});