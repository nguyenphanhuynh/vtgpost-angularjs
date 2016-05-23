'use strict';

angular.module('Authentication')

    .controller('LoginController',
        ['$scope', '$rootScope', '$location', 'AuthenticationService',
            function ($scope, $rootScope, $location, AuthenticationService) {
                // set sidebar closed and body solid layout mode
                $rootScope.settings.layout.pageContentWhite = true;
                $rootScope.settings.layout.pageBodySolid = false;
                $rootScope.settings.layout.pageSidebarClosed = true;

                // reset login status
                AuthenticationService.ClearCredentials();

                $scope.login = function () {
                    $scope.dataLoading = true;
                    AuthenticationService.Login($scope.username, $scope.password, function (response) {
                        if (response.success) {
                            AuthenticationService.SetCredentials($scope.username, $scope.password);
                            $location.path('/dashboard.html');
                        } else {
                            $scope.error = response.message;
                            $scope.dataLoading = false;
                        }
                    });
                };
            }]);