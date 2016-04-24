var app = angular.module('VTGApp', ['ngRoute']);

app.controller('HotlineController', function ($rootScope, $scope, $http, $timeout, services) {
    $scope.$on('$viewContentLoaded', function () {
        // initialize core components
    });

    $scope.hotlines = services.getHotlines();
    // set sidebar closed and body solid layout mode
    $rootScope.settings.layout.pageContentWhite = true;
    $rootScope.settings.layout.pageBodySolid = false;
    $rootScope.settings.layout.pageSidebarClosed = false;
});

app.controller('EditHotlineController', function ($rootScope, $scope, $http, $timeout, $location, $window, $state, services) {
    $scope.$on('$viewContentLoaded', function () {
        // initialize core components
    });

    var hotline_id = ($location.search().id) ? parseInt($location.search().id) : 0;
    $scope.title = (hotline_id > -1) ? 'Sửa hotline' : 'Thêm hotline mới';
    $scope.buttonText = (hotline_id > -1) ? 'Lưu chỉnh sửa' : 'Thêm hotline mới';
    $state.$current.data.pageTitle = $scope.title;

    $scope.hotline = services.getHotline(hotline_id);

    $scope.submit = function () {

    };

    // set sidebar closed and body solid layout mode
    $rootScope.settings.layout.pageContentWhite = true;
    $rootScope.settings.layout.pageBodySolid = false;
    $rootScope.settings.layout.pageSidebarClosed = false;
});