$(document).ready(function () {
    $('.jsInput').keyup(function () {

        var empty = false;
        $('.jsInput').each(function () {
            if ($(this).val() == '') {
                empty = true;
            }
        });

        if (empty) {
            $('#SendMessage').attr('disabled', 'disabled');
        } else {
            $('#SendMessage').removeAttr('disabled');
        }
    });

    $('.jsInput').change(function () {
        var value = $(this).val();
        if (value == "") {
            $(this).addClass("border-red");
            $(this).focus();
        } else {
            $(this).removeClass("border-red");
        }
    });

    $('#name').on('input', function () {
        var input = $(this);
        var is_name = input.val();
        if (is_name) {
            input.removeClass("invalid").addClass("valid");
        } else {
            input.removeClass("valid").addClass("invalid");
        }
    });

    $('#email').on('input', function () {
        var input = $(this);
        var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var is_email = re.test(input.val());
        if (is_email) {
            input.removeClass("invalid").addClass("valid");
        } else {
            input.removeClass("valid").addClass("invalid");
        }
    });

    $('#message').keyup(function (event) {
        var input = $(this);
        var message = $(this).val();
        console.log(message);
        if (message) {
            input.removeClass("invalid").addClass("valid");
        } else {
            input.removeClass("valid").addClass("invalid");
        }
    });

    $("#SendMessage button").click(function (event) {
        var form_data = $("#contactForm").serializeArray();
        var error_free = true;
        for (var input in form_data) {
            var element = $(form_data[input]['name']);
            var valid = element.hasClass("valid");
            var error_element = $("span", element.parent());
            if (!valid) {
                error_element.removeClass("error").addClass("error_show");
                error_free = false;
            } else {
                error_element.removeClass("error_show").addClass("error");
            }
        }
        if (!error_free) {
            event.preventDefault();
        } else {
            alert('No errors: Form will be submitted');
        }
    });
});
