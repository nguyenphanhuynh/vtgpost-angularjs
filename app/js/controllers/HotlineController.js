var app = angular.module('VTGApp', ['ngRoute']);

app.controller('HotlineController', function ($rootScope, $scope, $http, $timeout, services) {
    $scope.$on('$viewContentLoaded', function () {
        // initialize core components
    });

    $scope.hotlines = services.getHotlines();

    $scope.delete = function (id, index) {
        bootbox.confirm("Are you sure to delete this hotline?", function (result) {
            if (result) {
                var result = services.deleteBanner(id);

                $scope.$apply(function () {
                    $scope.hotlines.splice(index, 1);
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

    // set sidebar closed and body solid layout mode
    $rootScope.settings.layout.pageContentWhite = true;
    $rootScope.settings.layout.pageBodySolid = false;
    $rootScope.settings.layout.pageSidebarClosed = false;
});

app.controller('EditHotlineController', function ($rootScope, $scope, $http, $timeout, $location, $window, $state, services) {
    $scope.$on('$viewContentLoaded', function () {
        // initialize core components
        // auto set state for switch
        $('#type').bootstrapSwitch('state', $scope.hotline.type);
    });

    var hotline_id = ($location.search().id) ? parseInt($location.search().id) : 0;
    $scope.title = (hotline_id > -1) ? 'Sửa hotline' : 'Thêm hotline mới';
    $scope.buttonText = (hotline_id > -1) ? 'Lưu chỉnh sửa' : 'Thêm hotline mới';
    $state.$current.data.pageTitle = $scope.title;

    $scope.hotline = services.getHotline(hotline_id);

    $scope.submit = function () {
        if (hotline_id == -1) {
            // new hotline
            var result = services.newHotline($scope.hotline);
            if (result.success) {
                $window.location.href = '#/hotline-list.html';
            } else {
                bootbox.alert(result.message);
            }
        } else {
            // update hotline
            var result = services.updateHotline(hotline_id, $scope.hotline);
            if (result.success) {
                $window.location.href = '#/hotline-list.html';
            } else {
                bootbox.alert(result.message);
            }
        }
    };

    // set sidebar closed and body solid layout mode
    $rootScope.settings.layout.pageContentWhite = true;
    $rootScope.settings.layout.pageBodySolid = false;
    $rootScope.settings.layout.pageSidebarClosed = false;
});