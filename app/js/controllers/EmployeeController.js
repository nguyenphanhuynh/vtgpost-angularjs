angular.module('VTGApp').controller('EmployeeController', function ($rootScope, $scope, $http, $timeout) {
    $scope.$on('$viewContentLoaded', function () {
        // initialize core components
        App.initAjax();
    });

    $scope.employees = [];
    $scope.getEmployees = function () {
        $scope.employees = [
            {'id': '1', 'name': 'Nguyễn Văn An', 'username': 'anguyen', 'active': false},
            {'id': '2', 'name': 'Duyen', 'username': 'Duyen', 'active': false},
            {'id': '3', 'name': 'hiền', 'username': 'hiền', 'active': true},
            {'id': '4', 'name': 'Ly', 'username': 'Ly', 'active': true},
            {'id': '5', 'name': 'Nguyễn Thị Hồng', 'username': 'nhong', 'active': true},
            {'id': '6', 'name': 'Nguyễn Quốc Đạt', 'username': 'qdat', 'active': true},
        ];
    };

    // set sidebar closed and body solid layout mode
    $rootScope.settings.layout.pageContentWhite = true;
    $rootScope.settings.layout.pageBodySolid = false;
    $rootScope.settings.layout.pageSidebarClosed = false;

    $scope.delete = function (id, username) {
        bootbox.confirm("Are you sure to delete user " + username + "?", function (result) {
            if (result) {
                alert('Deleting id: ' + id);
            } else {
                // do nothing
            }
        });
    }
});