var app = angular.module('VTGApp', ['ngRoute']);

app.controller('CustomerController', function ($rootScope, $scope, $http, $timeout, $state, services) {
    $scope.$on('$viewContentLoaded', function () {
        // initialize core components
    });
    // Get datas from server
    $scope.totalItems = services.getCustomers().length;
    $scope.itemsPerPage = 10; // default is 10
    $scope.currentPage = 1;
    $scope.customers = services.getCustomers().splice(($scope.currentPage - 1) * $scope.itemsPerPage, $scope.currentPage * $scope.itemsPerPage);
    // Complete getting data from server

    // set sidebar closed and body solid layout mode
    $rootScope.settings.layout.pageContentWhite = true;
    $rootScope.settings.layout.pageBodySolid = false;
    $rootScope.settings.layout.pageSidebarClosed = false;

    $scope.delete = function (id, username, index) {
        bootbox.confirm("Are you sure to delete this customer?", function (result) {
            if (result) {
                var result = services.deleteCustomer(id);

                $scope.$apply(function () {
                    $scope.customers.splice(index, 1);
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

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function () {
        console.log('Page changed to: ' + $scope.currentPage);
        // reload $scope.employees here
        $scope.customers = $scope.tmpAll.splice(($scope.currentPage - 1) * $scope.itemsPerPage, $scope.currentPage * $scope.itemsPerPage);
    };

});

app.controller('EditCustomerController', function ($rootScope, $scope, $http, $location, $window, $timeout, $state, services) {
    $scope.$on('$viewContentLoaded', function () {
        // initialize core components
    });
    var customer_id = ($location.search().id) ? parseInt($location.search().id) : 0;
    $scope.title = (customer_id > -1) ? 'Sửa thông tin' : 'Thêm khách hàng mới';
    $scope.buttonText = (customer_id > -1) ? 'Lưu chỉnh sửa' : 'Thêm khách hàng mới';

    $scope.customer = services.getCustomer(customer_id);
    console.log($scope.customer);

    $scope.submit = function () {
        if (customer_id == -1) {
            // new customer
            var result = services.newCustomer($scope.customer);
            if (result.success) {
                $window.location.href = '#/customer-list.html';
            } else {
                bootbox.alert(result.message);
            }
        } else {
            // update customer
            var result = services.updateCustomer(customer_id, $scope.customer);
            if (result.success) {
                $window.location.href = '#/customer-list.html';
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