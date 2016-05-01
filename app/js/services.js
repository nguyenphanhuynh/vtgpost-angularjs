/*
 * Global factory
 */

VTGApp.service("services", ['$http', function ($http) {
    var serviceBase = 'services/';
    var obj = {};
    /************************
     *        Employee      *
     ************************/
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

    /************************
     *        Banner        *
     ************************/
    /**
     * Get all banners
     * @returns {*[]}
     */
    obj.getBanners = function () {
        //return $http.get(serviceBase + 'Employees');
        return [
            {
                'id': '1',
                'title': '',
                'desc': '',
                'url': 'http://vtgpost.vn/Images/banners/2.png',
                'active': true,
                'banner_type': 'Top banner'
            },
            {
                'id': '2',
                'title': '',
                'desc': '',
                'url': 'http://vtgpost.vn/Images/banners/3.jpg',
                'active': true,
                'banner_type': 'Top banner'
            },
            {
                'id': '3',
                'title': '',
                'desc': '',
                'url': 'http://vtgpost.vn/Images/banners/2.png',
                'active': true,
                'banner_type': 'Ads banner'
            },
            {
                'id': '4',
                'title': 'Dịch vụ chuyển phát nhanh',
                'desc': '',
                'url': 'http://vtgpost.vn/Images/ads/chuyenphatnhanh.jpg',
                'active': true,
                'banner_type': 'Ads banner'
            },
            {
                'id': '5',
                'title': 'Dịch vụ vận tải đường bộ',
                'desc': '',
                'url': 'http://vtgpost.vn/Images/ads/container-truck.jpg',
                'active': true,
                'banner_type': 'Ads banner'
            },
            {
                'id': '6',
                'title': 'Các dịch vụ gia tăng',
                'desc': '',
                'url': 'http://vtgpost.vn/Images/ads/dv_gia_tang.jpg',
                'active': true,
                'banner_type': 'Ads banner'
            },
            {
                'id': '7',
                'title': 'Dịch vụ chuyển phát tiết kiệm quốc tế',
                'desc': '',
                'url': 'http://vtgpost.vn/Images/ads/tiet-kiem.jpg',
                'active': true,
                'banner_type': 'Ads banner'
            },
            {
                'id': '8',
                'title': 'Dịch vụ hạng nặng quốc tế',
                'desc': '',
                'url': 'http://vtgpost.vn/Images/ads/van-tai-noi-dia.jpg',
                'active': true,
                'banner_type': 'Ads banner'
            },
            {
                'id': '9',
                'title': 'Dịch vụ chuyển phát nhanh quốc tế',
                'desc': '',
                'url': 'http://vtgpost.vn/Images/ads/Van_tai_nuoc_ngoai.jpg',
                'active': true,
                'banner_type': 'Ads banner'
            },
            {
                'id': '10',
                'title': 'New top banner',
                'desc': '',
                'url': 'http://vtgpost.vn/Images/banners/15051400000010999410.jpg',
                'active': true,
                'banner_type': 'Ads banner'
            },
        ];
    };

    /**
     * Search banner by id
     * @param BannerID
     * @returns {*}
     */
    obj.getBanner = function (BannerID) {
        var tmpArr = this.getBanners();
        var foundIndex = -1;
        angular.forEach(tmpArr, function (value, index) {
            if (value.id == BannerID) {
                foundIndex = index;
            }
        });
        if (foundIndex == -1) {
            return {'id': '-1', 'title': '', 'desc': '', 'url': '', 'active': true, 'banner_type': ''};
        } else {
            return tmpArr[foundIndex];
        }
    };

    /**
     * New banner
     * @param banner
     * @returns {{success: boolean, message: string}}
     */
    obj.newBanner = function (banner) {
        return {'success': true, 'message': ''};
        //return {'success': false, 'message': 'Demo error message'};
        //return $http.post(serviceBase + 'newEmployee', employee).then(function (results) {
        //    return results;
        //});
    };

    /**
     * Update banner
     * @param id
     * @param employee
     * @returns {{success: boolean, message: string}}
     */
    obj.updateBanner = function (id, banner) {
        return {'success': true, 'message': ''};
        //return $http.post(serviceBase + 'updateEmployee', {id: id, Employee: employee}).then(function (status) {
        //    return status.data;
        //});
    };

    /**
     * Delete banner by id
     * @param id
     * @returns {{success: boolean, message: string}}
     */
    obj.deleteBanner = function (id) {
        return {'success': true, 'message': ''};
        //return $http.delete(serviceBase + 'deleteEmployee?id=' + id).then(function (status) {
        //    return status.data;
        //});
    };

    /************************
     *        Hotlines      *
     ************************/
    obj.getHotlines = function () {
        return [
            {'id': 1, 'display_text': 'TP.HCM', 'login_name': 'johnny.huynhnguyen', 'type': true},
            {'id': 2, 'display_text': 'TP.HCM', 'login_name': 'methailan2007', 'type': false},
        ];
    };

    obj.getHotline = function (HotlineID) {
        var tmpArr = this.getEmployees();
        var foundIndex = -1;
        angular.forEach(tmpArr, function (value, index) {
            if (value.id == HotlineID) {
                foundIndex = index;
            }
        });
        if (foundIndex == -1) {
            return {'id': -1, 'display_text': '', 'login_name': '', 'type': true};
        } else {
            return tmpArr[foundIndex];
        }
    };

    /**
     * New hot line
     * @param hotline
     * @returns {{success: boolean, message: string}}
     */
    obj.newHotline = function (hotline) {
        return {'success': true, 'message': ''};
        //return {'success': false, 'message': 'Demo error message'};
        //return $http.post(serviceBase + 'newEmployee', employee).then(function (results) {
        //    return results;
        //});
    };

    /**
     * Update hotline
     * @param id
     * @param hotline
     * @returns {{success: boolean, message: string}}
     */
    obj.updateHotline = function (id, hotline) {
        return {'success': true, 'message': ''};
        //return $http.post(serviceBase + 'updateEmployee', {id: id, Employee: employee}).then(function (status) {
        //    return status.data;
        //});
    };

    /**
     * Delete hotline
     * @param id
     * @returns {{success: boolean, message: string}}
     */
    obj.deleteHotline = function (id) {
        return {'success': true, 'message': ''};
        //return $http.delete(serviceBase + 'deleteEmployee?id=' + id).then(function (status) {
        //    return status.data;
        //});
    };
    return obj;
}]);