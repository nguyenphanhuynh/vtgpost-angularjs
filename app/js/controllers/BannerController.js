var app = angular.module('VTGApp', ['ngRoute']);

app.controller('BannerController', function ($rootScope, $scope, $http, $timeout, $state, services) {
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

app.controller('EditBannerController', function ($rootScope, $scope, $http, $location, $window, $timeout, $state, services) {
    $scope.$on('$viewContentLoaded', function () {
        // initialize core components
        $('#active').bootstrapSwitch('state', $scope.banner.active);
        $("a.fancy").fancybox();
        $('input[type="text"]').maxlength({
            limitReachedClass: "label label-danger",
        });
    });
    var banner_id = ($location.search().id) ? parseInt($location.search().id) : 0;
    $scope.title = (banner_id > -1) ? 'Sửa banner' : 'Thêm banner mới';
    $scope.buttonText = (banner_id > -1) ? 'Lưu chỉnh sửa' : 'Thêm banner mới';

    $scope.banner = services.getBanner(banner_id);
    console.log($scope.banner);

    $scope.submit = function () {
        if (banner_id == -1) {
            // new banner
            var result = services.newBanner($scope.banner);
            if (result.success) {
                $window.location.href = '#/banner-list.html';
            } else {
                bootbox.alert(result.message);
            }
        } else {
            // update banner
            var result = services.updateBanner(banner_id, $scope.banner);
            if (result.success) {
                $window.location.href = '#/banner-list.html';
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