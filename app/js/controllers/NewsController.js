var app = angular.module('VTGApp', ['ngRoute']);

app.controller('NewsController', function ($rootScope, $scope, $http, $timeout, $state, services) {
    $scope.$on('$viewContentLoaded', function () {
        // initialize core components
    });
    $scope.newses = services.getNewses();

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


app.controller('EditNewsController', function ($rootScope, $scope, $http, $location, $window, $timeout, $state, services) {
    $scope.$on('$viewContentLoaded', function () {
        // initialize core components
        $('input[type="text"]').maxlength({
            limitReachedClass: "label label-danger",
        });
        $scope.htmlcontent = $scope.news.content;
        $(".select2").select2({
            width: null
        });
        if (jQuery().datepicker) {
            $('.date-picker').datepicker({
                rtl: App.isRTL(),
                orientation: "left",
                autoclose: true
            });
            //$('body').removeClass("modal-open"); // fix bug when inline picker is used in modal
        }
    });
    var news_id = ($location.search().id) ? parseInt($location.search().id) : 0;
    $scope.title = (news_id > -1) ? 'Sửa tin' : 'Thêm tin mới';
    $scope.buttonText = (news_id > -1) ? 'Lưu chỉnh sửa' : 'Thêm tin mới';

    $scope.news = services.getNews(news_id);
    $scope.newsCategories = services.getNewsCategories();

    $scope.submit = function () {
        console.log($scope.news.content);
        if (news_id == -1) {
            // new news
            var result = services.newNews($scope.news);
            if (result.success) {
                $window.location.href = '#/news-list.html';
            } else {
                bootbox.alert(result.message);
            }
        } else {
            // update news
            var result = services.updateNews(news_id, $scope.news);
            if (result.success) {
                $window.location.href = '#/news-list.html';
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


app.controller('StaticPageController', function ($rootScope, $scope, $http, $location, $window, $timeout, $state, services) {
    $scope.$on('$viewContentLoaded', function () {
        // initialize core components
        $('input[type="text"]').maxlength({
            limitReachedClass: "label label-danger",
        });
    });
    var page_code = ($location.search().page) ? parseInt($location.search().page) : null;
    $scope.title = (page_code == 'about') ? 'Cập nhật trang giới thiệu' : (page_code == 'home' ? 'Cập nhật trang chủ' : 'Error title');
    $scope.buttonText = 'Cập nhật';

    $scope.news = services.getNews(page_code);
    $scope.newsCategories = services.getNewsCategories();

    $scope.submit = function () {
        console.log($scope.news.content);
        if (page_code == -1) {
            // new news
            var result = services.newNews($scope.news);
            if (result.success) {
                $window.location.href = '#/news-list.html';
            } else {
                bootbox.alert(result.message);
            }
        } else {
            // update news
            var result = services.updateNews(page_code, $scope.news);
            if (result.success) {
                $window.location.href = '#/news-list.html';
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