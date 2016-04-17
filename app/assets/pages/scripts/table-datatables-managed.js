var TableDatatablesManaged = function () {

    var initTable1 = function () {

        var table = $('#tbl_employees');

        // begin first table
        table.dataTable({

            // Internationalisation. For more info refer to http://datatables.net/manual/i18n
            "language": {
                "aria": {
                    "sortAscending": ": activate to sort column ascending",
                    "sortDescending": ": activate to sort column descending"
                },
                "emptyTable": "No data available in table",
                "info": "Hiển thị _START_ tới _END_ trong _TOTAL_ ",
                "infoEmpty": "Không tìm thấy mục nào",
                "infoFiltered": "(filtered1 from _MAX_ total mục)",
                "lengthMenu": "Hiển thị _MENU_",
                "search": "",
                "zeroRecords": "Không tìm thấy kết quả nào",
                "paginate": {
                    "previous":"Trang trước",
                    "next": "Trang kế tiếp",
                    "last": "Trang cuối",
                    "first": "Trang đầu"
                }
            },

            // Or you can use remote translation file
            //"language": {
            //   url: '//cdn.datatables.net/plug-ins/3cfcc339e89/i18n/Portuguese.json'
            //},

            // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
            // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js). 
            // So when dropdowns used the scrollable div should be removed. 
            //"dom": "<'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",

            "bStateSave": true, // save datatable state(pagination, sort, etc) in cookie.

            "columnDefs": [ {
                "targets": [0, 1, 2, 3, 4, 5, 6],
                "orderable": false,
                "searchable": false
            }],

            "lengthMenu": [
                [5, 15, 20, -1],
                [5, 15, 20, "All"] // change per page values here
            ],
            // set the initial value
            "pageLength": 5,            
            "pagingType": "bootstrap_full_number",
            "columnDefs": [{  // set default column settings
                'orderable': false,
                'targets': [0, 1, 2, 3, 4, 5, 6]
            }, {
                "searchable": false,
                "targets": [0, 1, 2, 3, 4, 5, 6]
            }],
            "order": [
                [1, "asc"]
            ] // set first column as a default sort by asc
        });
    }

    return {

        //main function to initiate the module
        init: function () {
            if (!jQuery().dataTable) {
                return;
            }

            initTable1();
        }

    };

}();

if (App.isAngularJsApp() === false) { 
    jQuery(document).ready(function() {
        TableDatatablesManaged.init();
    });
}