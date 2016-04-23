var app = angular.module('VTGApp', ['ngRoute']);

app.controller('EmployeeGroupController', function ($rootScope, $scope, $http, $timeout, services) {
    $scope.$on('$viewContentLoaded', function () {
        // initialize core components
    });

    $scope.employee_groups = services.getEmployeeGroups();
    // set sidebar closed and body solid layout mode
    $rootScope.settings.layout.pageContentWhite = true;
    $rootScope.settings.layout.pageBodySolid = false;
    $rootScope.settings.layout.pageSidebarClosed = false;
});

app.controller('UpdateEmployeeGroupController', function ($rootScope, $scope, $http, $timeout, $location, $window, $state, services) {
    $scope.$on('$viewContentLoaded', function () {
        // initialize core components
    });

    var employee_id = ($location.search().id) ? parseInt($location.search().id) : 0;

    $scope.employee = services.getEmployee(employee_id);

    // check employee is valid or not
    if ($scope.employee.id <= -1) {
        $window.location.href = '';
    }

    $scope.selectedIn = [];
    $scope.selectedNotIn = [];

    // get groups of employee
    $scope.employee['group'] = services.getGroupOfEmployee(employee_id);

    $scope.submit = function () {
        console.log($scope.selectedIn);
        console.log($scope.selectedNotIn);
    };

    // set sidebar closed and body solid layout mode
    $rootScope.settings.layout.pageContentWhite = true;
    $rootScope.settings.layout.pageBodySolid = false;
    $rootScope.settings.layout.pageSidebarClosed = false;
});