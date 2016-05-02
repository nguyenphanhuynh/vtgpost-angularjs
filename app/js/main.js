/***
Metronic AngularJS App Main Script
***/

/* Metronic App */
var VTGApp = angular.module("VTGApp", [
    "ui.router",
    "ui.bootstrap",
    "oc.lazyLoad",
    "ngSanitize",
    'ngRoute',
]);

/* Configure ocLazyLoader(refer: https://github.com/ocombe/ocLazyLoad) */
VTGApp.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        // global configs go here
    });
}]);

/********************************************
 BEGIN: BREAKING CHANGE in AngularJS v1.3.x:
*********************************************/
/**
`$controller` will no longer look for controllers on `window`.
The old behavior of looking on `window` for controllers was originally intended
for use in examples, demos, and toy apps. We found that allowing global controller
functions encouraged poor practices, so we resolved to disable this behavior by
default.

To migrate, register your controllers with modules rather than exposing them
as globals:

Before:

```javascript
function MyController() {
  // ...
}
```

After:

```javascript
angular.module('myApp', []).controller('MyController', [function() {
  // ...
}]);

Although it's not recommended, you can re-enable the old behavior like this:

```javascript
angular.module('myModule').config(['$controllerProvider', function($controllerProvider) {
  // this option might be handy for migrating old apps, but please don't use it
  // in new ones!
  $controllerProvider.allowGlobals();
}]);
**/

//AngularJS v1.3.x workaround for old style controller declarition in HTML
VTGApp.config(['$controllerProvider', function($controllerProvider) {
  // this option might be handy for migrating old apps, but please don't use it
  // in new ones!
  $controllerProvider.allowGlobals();
}]);

/********************************************
 END: BREAKING CHANGE in AngularJS v1.3.x:
*********************************************/

/* Setup global settings */
VTGApp.factory('settings', ['$rootScope', function($rootScope) {
    // supported languages
    var settings = {
        layout: {
            pageSidebarClosed: false, // sidebar menu state
            pageContentWhite: true, // set page content layout
            pageBodySolid: false, // solid body color state
            pageAutoScrollOnLoad: 1000 // auto scroll to top on page load
        },
        assetsPath: '../assets',
        globalPath: 'assets/global',
        layoutPath: 'assets/layouts/layout',
    };

    $rootScope.settings = settings;

    return settings;
}]);

/* Setup App Main Controller */
VTGApp.controller('AppController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.$on('$viewContentLoaded', function() {
        App.initComponents(); // init core components
        //Layout.init(); //  Init entire layout(header, footer, sidebar, etc) on page load if the partials included in server side instead of loading with ng-include directive 
    });
}]);

/***
Layout Partials.
By default the partials are loaded through AngularJS ng-include directive. In case they loaded in server side(e.g: PHP include function) then below partial 
initialization can be disabled and Layout.init() should be called on page load complete as explained above.
***/

/* Setup Layout Part - Header */
VTGApp.controller('HeaderController', ['$scope', function($scope) {
    $scope.$on('$includeContentLoaded', function() {
        Layout.initHeader(); // init header
    });
}]);

/* Setup Layout Part - Sidebar */
VTGApp.controller('SidebarController', ['$scope', function($scope) {
    $scope.$on('$includeContentLoaded', function() {
        Layout.initSidebar(); // init sidebar
    });
}]);

/* Setup Layout Part - Quick Sidebar */
VTGApp.controller('QuickSidebarController', ['$scope', function($scope) {
    $scope.$on('$includeContentLoaded', function() {
       setTimeout(function(){
            QuickSidebar.init(); // init quick sidebar        
        }, 2000)
    });
}]);

/* Setup Layout Part - Theme Panel */
VTGApp.controller('ThemePanelController', ['$scope', function($scope) {
    $scope.$on('$includeContentLoaded', function() {
        Demo.init(); // init theme panel
    });
}]);

/* Setup Layout Part - Footer */
VTGApp.controller('FooterController', ['$scope', function($scope) {
    $scope.$on('$includeContentLoaded', function() {
        Layout.initFooter(); // init footer
    });
}]);

/* Setup Rounting For All Pages */
VTGApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    // Redirect any unmatched url
    $urlRouterProvider.otherwise("/dashboard.html");  
    
    $stateProvider

        // Dashboard
        .state('dashboard', {
            url: "/dashboard.html",
            templateUrl: "views/dashboard.html",            
            data: {pageTitle: 'Admin Dashboard Template'},
            controller: "DashboardController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'VTGApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            'assets/global/plugins/morris/morris.css',
                            'assets/global/plugins/morris/morris.min.js',
                            'assets/global/plugins/morris/raphael-min.js',
                            'assets/global/plugins/jquery.sparkline.min.js',

                            'assets/pages/scripts/dashboard.min.js',
                            'js/controllers/DashboardController.js',
                        ] 
                    });
                }]
            }
        })
        /*********************************
         *            Employee           *
         *********************************/
        // Employee list
        .state('employee_list', {
            url: "/employee-list.html",
            templateUrl: "views/employee/employee_list.html",
            data: {pageTitle: 'Danh Sách Nhân Viên'},
            controller: "EmployeeController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'VTGApp',
                        insertBefore: '#', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            'assets/global/plugins/datatables/datatables.min.css',
                            'assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',
                            'assets/global/plugins/datatables/datatables.all.min.js',
                            //'assets/pages/scripts/tblEmployeeList.js',
                            'assets/global/plugins/bootbox/bootbox.min.js',
                            'assets/pages/scripts/ui-notific8.min.js',
                            'js/controllers/EmployeeController.js',
                        ]
                    });
                }]
            }
        })

        // Update employee
        .state('employee_edit', {
            url: "/edit-employee.html",
            templateUrl: "views/employee/edit_employee.html",
            data: {pageTitle: 'Thêm / Sửa thông tin nhân viên'},
            controller: "EditEmployeeController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'VTGApp',
                        insertBefore: '#', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            'assets/global/plugins/bootstrap-maxlength/bootstrap-maxlength.min.js',
                            'js/controllers/EmployeeController.js',
                        ]
                    });
                }]
            }
        })

        // Change password
        .state('change_password', {
            url: "/change-password.html",
            templateUrl: "views/employee/change_password.html",
            data: {pageTitle: 'Change password - Đổi mật khẩu'},
            controller: "ChangePasswordEmployeeController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'VTGApp',
                        insertBefore: '#', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            'js/controllers/EmployeeController.js',
                        ]
                    });
                }]
            }
        })

        // Manage employee group
        .state('manage_employee_group', {
            url: "/manage-employee-group.html",
            templateUrl: "views/employee/update_employee_group.html",
            data: {pageTitle: 'Quản lý nhóm - Phân quyền'},
            controller: "UpdateEmployeeGroupController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'VTGApp',
                        insertBefore: '#', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            'assets/global/plugins/bootbox/bootbox.min.js',
                            'js/controllers/EmployeeGroupController.js',
                        ]
                    });
                }]
            }
        })

        // Employee group list
        .state('employee_group', {
            url: "/employee_group.html",
            templateUrl: "views/employee/employee_group_list.html",
            data: {pageTitle: 'User Groups - Danh Sách Nhóm'},
            controller: "EmployeeGroupController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'VTGApp',
                        insertBefore: '#', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            'assets/global/plugins/datatables/datatables.min.css',
                            'assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',
                            'js/controllers/EmployeeGroupController.js',
                        ]
                    });
                }]
            }
        })

        /*********************************
         *            Banner             *
         *********************************/
        // Banner list
        .state('banner_list', {
            url: "/banner-list.html",
            templateUrl: "views/banner/banner_list.html",
            data: {pageTitle: 'Danh sách banner'},
            controller: "BannerController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'VTGApp',
                        insertBefore: '#', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            'assets/global/plugins/datatables/datatables.min.css',
                            'assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',
                            'assets/global/plugins/bootbox/bootbox.min.js',
                            'assets/global/plugins/fancybox/source/jquery.fancybox.pack.js',
                            'assets/global/plugins/fancybox/source/jquery.fancybox.css',
                            'js/controllers/BannerController.js',
                        ]
                    });
                }]
            }
        })

        // Create / Edit banner
        .state('banner_edit', {
            url: "/edit-banner.html",
            templateUrl: "views/banner/edit_banner.html",
            data: {pageTitle: 'Thêm / Sửa thông tin banner'},
            controller: "EditBannerController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'VTGApp',
                        insertBefore: '#', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            'assets/global/plugins/fancybox/source/jquery.fancybox.pack.js',
                            'assets/global/plugins/fancybox/source/jquery.fancybox.css',
                            'assets/global/plugins/bootstrap-maxlength/bootstrap-maxlength.min.js',
                            'js/controllers/BannerController.js',
                        ]
                    });
                }],
            }
        })

        /*********************************
         *            Hotline            *
         *********************************/
        // Hot line list
        .state('hotline_list', {
            url: "/hotline-list.html",
            templateUrl: "views/hotline/hotline_list.html",
            data: {pageTitle: 'Danh sách hotline'},
            controller: "HotlineController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'VTGApp',
                        insertBefore: '#', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            'assets/global/plugins/bootbox/bootbox.min.js',
                            'js/controllers/HotlineController.js',
                        ]
                    });
                }],
            }
        })

        // Create / Update line list
        .state('edit_hotline', {
            url: "/edit-hotline.html",
            templateUrl: "views/hotline/edit_hotline.html",
            data: {pageTitle: 'Thêm / Chỉnh sửa hotline'},
            controller: "EditHotlineController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'VTGApp',
                        insertBefore: '#', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            'assets/global/plugins/bootstrap-maxlength/bootstrap-maxlength.min.js',
                            'js/controllers/HotlineController.js',
                        ]
                    });
                }],
            }
        })

        /*********************************
         *            Customer             *
         *********************************/
        // Customer list
        .state('customer_list', {
            url: "/customer-list.html",
            templateUrl: "views/customer/customer_list.html",
            data: {pageTitle: 'Danh sách khách hàng'},
            controller: "CustomerController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'VTGApp',
                        insertBefore: '#', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            'assets/global/plugins/datatables/datatables.min.css',
                            'assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',
                            'assets/global/plugins/bootbox/bootbox.min.js',
                            'assets/global/plugins/fancybox/source/jquery.fancybox.pack.js',
                            'assets/global/plugins/fancybox/source/jquery.fancybox.css',
                            'js/controllers/CustomerController.js',
                        ]
                    });
                }]
            }
        })

        // Create / Edit customer
        .state('customer_edit', {
            url: "/edit-customer.html",
            templateUrl: "views/customer/edit_customer.html",
            data: {pageTitle: 'Thêm / Sửa thông tin khách hàng'},
            controller: "EditCustomerController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'VTGApp',
                        insertBefore: '#', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            'assets/global/plugins/fancybox/source/jquery.fancybox.pack.js',
                            'assets/global/plugins/fancybox/source/jquery.fancybox.css',
                            'assets/global/plugins/bootstrap-maxlength/bootstrap-maxlength.min.js',
                            'js/controllers/CustomerController.js',
                        ]
                    });
                }],
            }
        })

        /*********************************
         *            News               *
         *********************************/
        // News list
        .state('news_list', {
            url: "/news-list.html",
            templateUrl: "views/news/news_list.html",
            data: {pageTitle: 'Danh sách tin tức'},
            controller: "NewsController",
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'VTGApp',
                        insertBefore: '#', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            'assets/global/plugins/bootbox/bootbox.min.js',
                            'js/controllers/NewsController.js',
                        ]
                    });
                }],
            }
        })

        // User Profile Dashboard
        .state("profile.dashboard", {
            url: "/dashboard",
            templateUrl: "views/profile/dashboard.html",
            data: {pageTitle: 'User Profile'}
        })

        // User Profile Account
        .state("profile.account", {
            url: "/account",
            templateUrl: "views/profile/account.html",
            data: {pageTitle: 'User Account'}
        })

        // User Profile Help
        .state("profile.help", {
            url: "/help",
            templateUrl: "views/profile/help.html",
            data: {pageTitle: 'User Help'}      
        })

}]);

/* Init global settings and run the app */
VTGApp.run(["$rootScope", "settings", "$state", function($rootScope, settings, $state) {
    $rootScope.$state = $state; // state to be accessed from view
    $rootScope.$settings = settings; // state to be accessed from view
}]);