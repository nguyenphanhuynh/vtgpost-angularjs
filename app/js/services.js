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
    obj.getEmployees = function (ppp, currentPage) {
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


    /************************
     *        Customer        *
     ************************/
    /**
     * Get all customers
     * @returns {*[]}
     */
    obj.getCustomers = function () {
        //return $http.get(serviceBase + 'Employees');
        return [
            {
                'id': '1',
                'customer_name': 'Ngân hàng Liên Việt',
                'address': '1 Nguyễn Thị Minh Khai, Quận 1, Tp.HCM',
                'contact_person': 'Sunny Vo',
                'customer_phone': '01234567890',
                'customer_mobile': '0938 704 706',
                'website': 'http://lienvietbank.com',
                'logo': 'http://vtgpost.vn/Images/recent-customers/2705140000001.jpg',
            },
            {
                'id': '2',
                'customer_name': 'Zuellig Pharma',
                'address': '',
                'contact_person': '',
                'customer_phone': '',
                'customer_mobile': '',
                'website': 'http://www.zuelligPharma.com',
                'logo': 'http://vtgpost.vn/Images/recent-customers/2705140000003.jpg',
            },
            {
                'id': '3',
                'customer_name': 'GTel',
                'address': '',
                'contact_person': 'Nguyễn Phan Huỳnh',
                'customer_phone': '',
                'customer_mobile': '',
                'website': '',
                'logo': 'http://vtgpost.vn/Images/recent-customers/2705140000004.jpg',
            },
            {
                'id': '4',
                'customer_name': 'ABC Securities',
                'address': '',
                'contact_person': '',
                'customer_phone': '',
                'customer_mobile': '',
                'website': '',
                'logo': 'http://vtgpost.vn/Images/recent-customers/2705140000002.jpg',
            },
            {
                'id': '5',
                'customer_name': 'Vinaconex',
                'address': '',
                'contact_person': '',
                'customer_phone': '',
                'customer_mobile': '',
                'website': '',
                'logo': 'http://vtgpost.vn/Images/recent-customers/2705140000005.jpg',
            }, {
                'id': '6',
                'customer_name': 'NH nông nghiệp và phát triển nông thôn VN	',
                'address': '',
                'contact_person': '',
                'customer_phone': '',
                'customer_mobile': '',
                'website': '',
                'logo': 'http://vtgpost.vn/Images/recent-customers/2705140000006.jpg',
            }, {
                'id': '7',
                'customer_name': 'Toshiba',
                'address': '',
                'contact_person': 'TOSHIBA',
                'customer_phone': '0838242823',
                'customer_mobile': '',
                'website': '',
                'logo': '',
            }, {
                'id': '8',
                'customer_name': 'BH PJICO',
                'address': '',
                'contact_person': 'BH PJICO',
                'customer_phone': '0838208341',
                'customer_mobile': '0904567657',
                'website': '',
                'logo': '',
            }, {
                'id': '9',
                'customer_name': 'CK THÀNH CÔNG',
                'address': '',
                'contact_person': 'CK THÀNH CÔNG',
                'customer_phone': '0938808036',
                'customer_mobile': '',
                'website': '',
                'logo': '',
            }, {
                'id': '10',
                'customer_name': 'DEKALB',
                'address': '',
                'contact_person': 'DEKALB',
                'customer_phone': '0838233474',
                'customer_mobile': '',
                'website': '',
                'logo': '',
            }, {
                'id': '11',
                'customer_name': 'MEINHARDT',
                'address': '',
                'contact_person': 'MEINHARDT',
                'customer_phone': '',
                'customer_mobile': '',
                'website': '',
                'logo': '',
            }, {
                'id': '12',
                'customer_name': 'HARRISCHEM INC',
                'address': '',
                'contact_person': 'HARRISCHEM INC',
                'customer_phone': '01213231990',
                'customer_mobile': '',
                'website': '',
                'logo': '',
            }, {
                'id': '13',
                'customer_name': 'PVCOMBANK',
                'address': '',
                'contact_person': 'PVCOMBANK',
                'customer_phone': '',
                'customer_mobile': '',
                'website': '',
                'logo': '',
            }, {
                'id': '14',
                'customer_name': 'VP BANK',
                'address': '',
                'contact_person': 'VP BANK',
                'customer_phone': '0854041954',
                'customer_mobile': '',
                'website': '',
                'logo': '',
            }, {
                'id': '15',
                'customer_name': 'ELLESHOP',
                'address': '',
                'contact_person': 'ELLESHOP',
                'customer_phone': '0949220006',
                'customer_mobile': '',
                'website': '',
                'logo': '',
            }, {
                'id': '16',
                'customer_name': 'NATIONAL',
                'address': '',
                'contact_person': 'MR.KHOA',
                'customer_phone': '0969042802',
                'customer_mobile': '',
                'website': '',
                'logo': '',
            }, {
                'id': '17',
                'customer_name': 'HÀN VIỆT',
                'address': '',
                'contact_person': '',
                'customer_phone': '',
                'customer_mobile': '',
                'website': '',
                'logo': '',
            }, {
                'id': '18',
                'customer_name': 'ĐỊA VIỆT',
                'address': '',
                'contact_person': '',
                'customer_phone': '',
                'customer_mobile': '',
                'website': '',
                'logo': '',
            }, {
                'id': '19',
                'customer_name': 'INDOCHINA',
                'address': '',
                'contact_person': '',
                'customer_phone': '',
                'customer_mobile': '',
                'website': '',
                'logo': '',
            }, {
                'id': '20',
                'customer_name': 'INCENTER',
                'address': '',
                'contact_person': '',
                'customer_phone': '',
                'customer_mobile': '',
                'website': '',
                'logo': '',
            }, {
                'id': '21',
                'customer_name': 'MEINHART',
                'address': '',
                'contact_person': 'MS LINH',
                'customer_phone': '0835268973',
                'customer_mobile': '',
                'website': '',
                'logo': '',
            }, {
                'id': '22',
                'customer_name': 'KANTANA',
                'address': '',
                'contact_person': 'Kantana',
                'customer_phone': '0902584117',
                'customer_mobile': '',
                'website': '',
                'logo': '',
            }, {
                'id': '23',
                'customer_name': 'THÀNH Ý',
                'address': '',
                'contact_person': 'THÀNH Ý',
                'customer_phone': '',
                'customer_mobile': '',
                'website': '',
                'logo': '',
            },
            {
                'id': '24',
                'customer_name': 'CTY CP GIÁC QUAN THỨ 6',
                'address': '',
                'contact_person': 'CTY CP GIÁC QUAN THỨ 6',
                'customer_phone': '',
                'customer_mobile': '',
                'website': '',
                'logo': '',
            }, {
                'id': '25',
                'customer_name': 'EUROASIATIC',
                'address': '',
                'contact_person': 'EUROASIATIC',
                'customer_phone': '',
                'customer_mobile': '',
                'website': '',
                'logo': '',
            }, {
                'id': '26',
                'customer_name': 'CTY DINH DƯỠNG SG',
                'address': '',
                'contact_person': 'CTY DINH DƯỠNG SG',
                'customer_phone': '',
                'customer_mobile': '',
                'website': '',
                'logo': '',
            }, {
                'id': '27',
                'customer_name': 'CTY ĐƯỜNG NÉT',
                'address': '',
                'contact_person': 'CTY ĐƯỜNG NÉT',
                'customer_phone': '',
                'customer_mobile': '',
                'website': '',
                'logo': '',
            }, {
                'id': '28',
                'customer_name': 'SÀI GÒN PART',
                'address': '',
                'contact_person': 'SÀI GÒN PART',
                'customer_phone': '',
                'customer_mobile': '',
                'website': '',
                'logo': '',
            }, {
                'id': '29',
                'customer_name': 'ĐIỆN TỬ HÀN VIỆT',
                'address': '',
                'contact_person': 'ĐIỆN TỬ HÀN VIỆT',
                'customer_phone': '',
                'customer_mobile': '',
                'website': '',
                'logo': '',
            }, {
                'id': '30',
                'customer_name': 'HIỆP HỘI LOGISTIC Q.4',
                'address': '',
                'contact_person': 'HIỆP HỘI LOGISTIC Q.4',
                'customer_phone': '',
                'customer_mobile': '',
                'website': '',
                'logo': '',
            }, {
                'id': '31',
                'customer_name': 'CONCEPTION',
                'address': '',
                'contact_person': 'CONCEPTION',
                'customer_phone': '',
                'customer_mobile': '',
                'website': '',
                'logo': '',
            }, {
                'id': '32',
                'customer_name': 'VPA',
                'address': '',
                'contact_person': 'VPA',
                'customer_phone': '',
                'customer_mobile': '',
                'website': '',
                'logo': '',
            }
        ];
    };

    /**
     * Search customer by id
     * @param CustomerID
     * @returns {*}
     */
    obj.getCustomer = function (CustomerID) {
        var tmpArr = this.getCustomers();
        var foundIndex = -1;
        angular.forEach(tmpArr, function (value, index) {
            if (value.id == CustomerID) {
                foundIndex = index;
            }
        });
        if (foundIndex == -1) {
            return {'id': '-1', 'title': '', 'desc': '', 'url': '', 'active': true, 'customer_type': ''};
        } else {
            return tmpArr[foundIndex];
        }
    };

    /**
     * New customer
     * @param customer
     * @returns {{success: boolean, message: string}}
     */
    obj.newCustomer = function (customer) {
        return {'success': true, 'message': ''};
        //return {'success': false, 'message': 'Demo error message'};
        //return $http.post(serviceBase + 'newEmployee', employee).then(function (results) {
        //    return results;
        //});
    };

    /**
     * Update customer
     * @param id
     * @param employee
     * @returns {{success: boolean, message: string}}
     */
    obj.updateCustomer = function (id, customer) {
        return {'success': true, 'message': ''};
        //return $http.post(serviceBase + 'updateEmployee', {id: id, Employee: employee}).then(function (status) {
        //    return status.data;
        //});
    };

    /**
     * Delete customer by id
     * @param id
     * @returns {{success: boolean, message: string}}
     */
    obj.deleteCustomer = function (id) {
        return {'success': true, 'message': ''};
        //return $http.delete(serviceBase + 'deleteEmployee?id=' + id).then(function (status) {
        //    return status.data;
        //});
    };

    /************************
     *        News          *
     ************************/
    /**
     * Get all news category
     * @returns {*[]}
     */
    obj.getNewsCategories = function () {
        return [
            {'id': 1, 'name': 'Services - Dịch vụ'},
            {'id': 2, 'name': 'Quality Control - Quản lý chất lượng'},
            {'id': 3, 'name': 'Recruitment - Tuyển dụng'},
            {'id': 4, 'name': 'News - Tin tức'},
        ];
    };

    /**
     * Get all news
     * @returns {*[]}
     */
    obj.getNewses = function () {
        return [
            {
                'id': 1,
                'title': 'Hệ thống bảng giá',
                'abstract': 'abstract demo',
                'content': "<p>1.Bảng gi&aacute; CPN trong nước&nbsp;VTG</p><p>2.Bảng gi&aacute; V&acirc;̣n chuy&ecirc;̉n nhanh ti&ecirc;́t ki&ecirc;̣m</p><p>3.Bảng gi&aacute; V&acirc;̣n tải thường</p><p>4.Bảng gi&aacute; qu&ocirc;́c t&ecirc;́</p>",
                'category_id': '1',
                'category_name': 'Services - Dịch vụ',
                'posted_date': '13/07/2016'
            }
        ];
    };

    /**
     * Get news by NewsId
     * @param NewsID
     * @returns {*}
     */
    obj.getNews = function (NewsID) {
        var tmpArr = this.getNewses();
        var foundIndex = -1;
        angular.forEach(tmpArr, function (value, index) {
            if (value.id == NewsID) {
                foundIndex = index;
            }
        });
        if (foundIndex == -1) {
            return {
                'id': -1,
                'title': '',
                'abstract': '',
                'content': "",
                'category_id': '',
                'category_name': '',
                'posted_date': ''
            };
        } else {
            return tmpArr[foundIndex];
        }
    };

    obj.getStaticPage = function (pageCode) {
        var page = {
            'id': 0,
            'title': '',
            'abstract': '',
            'content': "",
            'category_id': '',
            'category_name': '',
            'posted_date': ''
        };
        if(pageCode == 'home') {
            page.id = 111;
            page.title = 'Trang Chủ';
            page.content = '<p>Giới thiệu về C&ocirc;ng ty Chuyển ph&aacute;t nhanh <strong>Vượt Thời Gian</strong></p>' +
                '<p><strong>Uy T&iacute;n-Ch&iacute;nh X&aacute;c Chất Lượng H&agrave;ng Đầu!!!</strong></p>';
        } else if (pageCode == 'about') {
            page.id = 112;
            page.title = 'Trang giới thiệu';
            page.content = 'Trang giới thiệu';
        } else {
            // return error if need
        }
        return page;
    };

    /**
     * New news
     * @param news
     * @returns {{success: boolean, message: string}}
     */
    obj.newNews = function (news) {
        return {'success': true, 'message': ''};
        //return {'success': false, 'message': 'Demo error message'};
        //return $http.post(serviceBase + 'newEmployee', employee).then(function (results) {
        //    return results;
        //});
    };

    /**
     * Update news
     * @param id
     * @param news
     * @returns {{success: boolean, message: string}}
     */
    obj.updateNews = function (id, news) {
        return {'success': true, 'message': ''};
        //return $http.post(serviceBase + 'updateEmployee', {id: id, Employee: employee}).then(function (status) {
        //    return status.data;
        //});
    };

    /**
     * Delete news by id
     * @param id
     * @returns {{success: boolean, message: string}}
     */
    obj.deleteNews = function (id) {
        return {'success': true, 'message': ''};
        //return $http.delete(serviceBase + 'deleteEmployee?id=' + id).then(function (status) {
        //    return status.data;
        //});
    };

    /**
     * Get bill list
     * @param ppp: product per page
     * @param currentPage: current page
     * @returns {*[]}
     */
    obj.getBills = function (ppp, currentPage) {
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

    return obj;
}]);