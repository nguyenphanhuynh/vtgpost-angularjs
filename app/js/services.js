/*
 * Global factory
 */

VTGApp.service("services", ['$http', function ($http) {
    var serviceBase = 'services/';
    var obj = {};
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
    obj.getEmployee = function (EmployeeID) {
        if (EmployeeID > -1) {
            // find employee
            //return $http.get(serviceBase + 'Employee?id=' + EmployeeID);
            return {'id': '1', 'fullname': 'Nguyễn Văn An', 'username': 'anguyen', 'active': true};
        } else {
            // create new employee
            return {'id': '', 'fullname': '', 'username': '', 'active': true};
        }
    };

    obj.insertEmployee = function (Employee) {
        return $http.post(serviceBase + 'insertEmployee', Employee).then(function (results) {
            return results;
        });
    };

    obj.updateEmployee = function (id, Employee) {
        return $http.post(serviceBase + 'updateEmployee', {id: id, Employee: Employee}).then(function (status) {
            return status.data;
        });
    };

    obj.deleteEmployee = function (id) {
        alert('delete ' + id);
        //return $http.delete(serviceBase + 'deleteEmployee?id=' + id).then(function (status) {
        //    return status.data;
        //});
    };

    return obj;
}]);