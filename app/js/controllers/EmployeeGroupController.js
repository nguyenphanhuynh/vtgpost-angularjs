angular.module('VTGApp').controller('EmployeeGroupController', function ($rootScope, $scope, $http, $timeout) {
    $scope.$on('$viewContentLoaded', function () {
        // initialize core components
    });

    $scope.employee_groups = [];
    $scope.getEmployeeGroups = function () {
        $scope.employee_groups = [
            {'id': '1', 'name': 'Manage Banner', 'note': 'Quản lý banner: thêm banner, chỉnh sửa banner'},
            {'id': '2', 'name': 'Manage Bill', 'note': 'Quản lý vận đơn: nhập vận đơn, cập nhật vận đơn...'},
            {'id': '3', 'name': 'Manage Customer', 'note': 'Quản lý thông tin khách hàng'},
            {'id': '4', 'name': 'Manage Information', 'note': 'Quản lý thông tin chung'},
            {
                'id': '5',
                'name': 'Manage News',
                'note': 'Quản lý tin tức: đăng tin mới, cập nhật trang chủ, trang giới thiệu...'
            },
            {
                'id': '6',
                'name': 'Manage User',
                'note': 'Quản lý tài khoản người dùng: tạo tài khoản mới, đổi mật khẩu, cấp quyền truy cập trang quản trị...'
            },

        ];
    };

    // set sidebar closed and body solid layout mode
    $rootScope.settings.layout.pageContentWhite = true;
    $rootScope.settings.layout.pageBodySolid = false;
    $rootScope.settings.layout.pageSidebarClosed = false;
});