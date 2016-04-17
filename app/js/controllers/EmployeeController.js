angular.module('VTGApp').controller('EmployeeController', function ($rootScope, $scope, $http, $timeout) {
    $scope.$on('$viewContentLoaded', function() {
        // initialize core components
        App.initAjax();
    });

    $scope.employees = [];
    $scope.getEmployees = function () {
        $scope.employees = [
            {'id': '1', 'name': 'Nguyễn Văn An', 'username': 'anguyen', 'status': 'actived'},
            {'id': '2', 'name': 'Duyen', 'username': 'Duyen', 'status': 'actived'},
            {'id': '3', 'name': 'hiền', 'username': 'hiền', 'status': 'actived'},
            {'id': '4', 'name': 'Ly', 'username': 'Ly', 'status': 'actived'},
            {'id': '5', 'name': 'Nguyễn Thị Hồng', 'username': 'Nguyễn Thị Hồng', 'status': 'actived'},
            {'id': '6', 'name': 'Nguyễn Quốc Đạt', 'username': 'Nguyễn Quốc Đạt', 'status': 'actived'},
        ];
    };

    // set sidebar closed and body solid layout mode
    $rootScope.settings.layout.pageContentWhite = true;
    $rootScope.settings.layout.pageBodySolid = false;
    $rootScope.settings.layout.pageSidebarClosed = false;
});