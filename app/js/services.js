/*
 * Global factory
 */

VTGApp.service("services", ['$http', function ($http) {
    var serviceBase = 'services/';
    var obj = {};
    obj.getEmployees = function () {
        //return $http.get(serviceBase + 'Employees');
        return [
            {'id': '1', 'name': 'Nguyễn Văn An', 'username': 'anguyen', 'active': false},
            {'id': '2', 'name': 'Duyen', 'username': 'Duyen', 'active': false},
            {'id': '3', 'name': 'hiền', 'username': 'hiền', 'active': true},
            {'id': '4', 'name': 'Ly', 'username': 'Ly', 'active': true},
            {'id': '5', 'name': 'Nguyễn Thị Hồng', 'username': 'nhong', 'active': true},
            {'id': '6', 'name': 'Nguyễn Quốc Đạt', 'username': 'qdat', 'active': true},
        ];
    };
    obj.getEmployee = function (EmployeeID) {
        //return $http.get(serviceBase + 'Employee?id=' + EmployeeID);
        return {'id': '1', 'name': 'Nguyễn Văn An', 'username': 'anguyen', 'active': false};
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