var app = angular.module('VTGApp', ['ngRoute']);

app.controller('ProfileDashboardController', function ($rootScope, $scope, $http, $timeout, $state, services) {
    $scope.$on('$viewContentLoaded', function () {
        // initialize core components
    });

    $scope.employee = services.getCurrentUser();

    // set sidebar closed and body solid layout mode
    $rootScope.settings.layout.pageContentWhite = true;
    $rootScope.settings.layout.pageBodySolid = true;
    $rootScope.settings.layout.pageSidebarClosed = true;

    $scope.submit = function () {
        if ($scope.employee.id != -1) {
            // change Password
            var result = services.changePassword($scope.employee.id, $scope.employee.new_password);
            if (result.success) {
                bootbox.alert('Lưu thành công');
            } else {
                bootbox.alert(result.message);
            }
        } else {
            bootbox.alert('Invalid user info!');
        }
    }
});