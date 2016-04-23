/*
 * Global factory
 */

VTGApp.service("services", ['$http', function ($http) {
    var serviceBase = 'services/';
    var obj = {};
    /**
     * Get all employees
     * @returns {*[]}
     */
    obj.getEmployees = function () {
        //return $http.get(serviceBase + 'Employees');
        return [
            {'id': '1', 'fullname': 'Nguyễn Văn An', 'username': 'anguyen', 'active': true},
            {'id': '2', 'fullname': 'Duyen', 'username': 'Duyen', 'active': false},
            {'id': '3', 'fullname': 'hiền', 'username': 'hiền', 'active': true},
            {'id': '4', 'fullname': 'Ly', 'username': 'Ly', 'active': true},
            {'id': '5', 'fullname': 'Nguyễn Thị Hồng', 'username': 'nhong', 'active': true},
            {'id': '6', 'fullname': 'Nguyễn Quốc Đạt', 'username': 'qdat', 'active': true},
        ];
    };
    /**
     * Find employee by ID
     * @param EmployeeID
     * @returns {{id: string, fullname: string, username: string, active: boolean}}
     */
    obj.getEmployee = function (EmployeeID) {
        var tmpArr = this.getEmployees();
        var foundIndex = -1;
        angular.forEach(tmpArr, function (value, index) {
            if (value.id == EmployeeID) {
                foundIndex = index;
            }
        });
        if (foundIndex == -1) {
            return {'id': '-1', 'fullname': '', 'username': '', 'active': true};
        } else {
            return tmpArr[foundIndex];
        }
    };

    /**
     *
     * @param EmployeeId
     * @returns {{in: Array, notIn: Array}}
     */
    obj.getGroupOfEmployee = function (EmployeeId) {
        // create fake data
        var tmpArr = this.getEmployeeGroups();
        var inArr = [];
        var notInArr = [];
        for (var i = 0; i < 3; i++) {
            inArr.push(tmpArr[i]);
        }
        for (var i = 3; i < tmpArr.length; i++) {
            notInArr.push(tmpArr[i]);
        }
        return {'in': inArr, 'notIn': notInArr};
    };

    /**
     * Create new employee
     * @param employee
     * @returns {*}
     */
    obj.newEmployee = function (employee) {
        return {'success': true, 'message': ''};
        //return {'success': false, 'message': 'Demo error message'};
        //return $http.post(serviceBase + 'newEmployee', employee).then(function (results) {
        //    return results;
        //});
    };

    /**
     * Update an employee
     * @param id
     * @param employee
     * @returns {*}
     */
    obj.updateEmployee = function (id, employee) {
        return {'success': true, 'message': ''};
        //return $http.post(serviceBase + 'updateEmployee', {id: id, Employee: employee}).then(function (status) {
        //    return status.data;
        //});
    };

    /**
     * Delete an employee by ID
     * @param id
     */
    obj.deleteEmployee = function (id) {
        return {'success': true, 'message': ''};
        //return $http.delete(serviceBase + 'deleteEmployee?id=' + id).then(function (status) {
        //    return status.data;
        //});
    };

    /**
     * Change password
     * @param id
     * @param password
     * @returns {{success: boolean, message: string}}
     */
    obj.changePassword = function (id, password) {
        alert('delete ' + id);
        return {'success': true, 'message': ''};
    };

    /**
     * Get all groups
     * @returns {*[]}
     */
    obj.getEmployeeGroups = function () {
        return [
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

    return obj;
}]);