var FormValidation = function () {

    // basic validation
    var handleValidationEditEmployee = function () {
        // for more info visit the official plugin documentation: 
            // http://docs.jquery.com/Plugins/Validation
        var form1 = $('#frm_edit_employee');
            var error1 = $('.alert-danger', form1);
            var success1 = $('.alert-success', form1);

            form1.validate({
                errorElement: 'span', //default input error message container
                errorClass: 'help-block help-block-error', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",  // validate all fields including form hidden input
                messages: {
                    fullname: {
                        maxlength: 'Tên không được dài hơn 50 ký tự'
                    }
                },
                rules: {
                    fullname: {
                        maxlength: 50,
                        required: true
                    },
                    username: {
                        minlength: 5,
                        maxlength: 20,
                        required: true
                    },
                    password: {
                        minlength: 6,
                        required: true
                    },
                    repeat_password: {
                        minlength: 6,
                        required: true
                    }
                },

                invalidHandler: function (event, validator) { //display error alert on form submit              
                    alert('Holly shit!');
                    success1.hide();
                    error1.show();
                    App.scrollTo(error1, -200);
                },

                highlight: function (element) { // hightlight error inputs
                    $(element)
                        .closest('.form-group').addClass('has-error'); // set error class to the control group
                },

                unhighlight: function (element) { // revert the change done by hightlight
                    $(element)
                        .closest('.form-group').removeClass('has-error'); // set error class to the control group
                },

                success: function (label) {
                    label
                        .closest('.form-group').removeClass('has-error'); // set success class to the control group
                },

                submitHandler: function (form) {
                    success1.show();
                    error1.hide();
                }
            });


    };
    var handleValidation1 = function () {
        // for more info visit the official plugin documentation:
        // http://docs.jquery.com/Plugins/Validation

        var form1 = $('#form_sample_1');
        var error1 = $('.alert-danger', form1);
        var success1 = $('.alert-success', form1);

        form1.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",  // validate all fields including form hidden input
            messages: {
                select_multi: {
                    maxlength: jQuery.validator.format("Max {0} items allowed for selection"),
                    minlength: jQuery.validator.format("At least {0} items must be selected")
                }
            },
            rules: {
                name: {
                    minlength: 2,
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                url: {
                    required: true,
                    url: true
                },
                number: {
                    required: true,
                    number: true
                },
                digits: {
                    required: true,
                    digits: true
                },
                creditcard: {
                    required: true,
                    creditcard: true
                },
                occupation: {
                    minlength: 5,
                },
                select: {
                    required: true
                },
                select_multi: {
                    required: true,
                    minlength: 1,
                    maxlength: 3
                }
            },

            invalidHandler: function (event, validator) { //display error alert on form submit
                success1.hide();
                error1.show();
                App.scrollTo(error1, -200);
            },

            highlight: function (element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            unhighlight: function (element) { // revert the change done by hightlight
                $(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },

            submitHandler: function (form) {
                success1.show();
                error1.hide();
            }
        });


    };

    return {
        //main function to initiate the module
        init: function () {
            handleValidationEditEmployee();
            handleValidation1();
        }

    };

}();

jQuery(document).ready(function() {
    FormValidation.init();
});