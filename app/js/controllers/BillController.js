var app = angular.module('VTGApp', ['ngRoute']);

app.controller('BillController', function ($rootScope, $scope, $http, $timeout, $state, services) {
    $scope.$on('$viewContentLoaded', function () {
        // initialize core components
    });
    $scope.banners = services.getBanners();

    $scope.totalItems = $scope.banners.length;
    $scope.itemsPerPage = 10; // default is 10
    $scope.currentPage = 1;

    // set sidebar closed and body solid layout mode
    $rootScope.settings.layout.pageContentWhite = true;
    $rootScope.settings.layout.pageBodySolid = false;
    $rootScope.settings.layout.pageSidebarClosed = false;

    $scope.delete = function (id, username, index) {
        bootbox.confirm("Are you sure to delete this banner?", function (result) {
            if (result) {
                var result = services.deleteBanner(id);

                $scope.$apply(function () {
                    $scope.banners.splice(index, 1);
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
    }
});
