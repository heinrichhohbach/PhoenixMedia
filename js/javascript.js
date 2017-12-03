$(document).ready(function() {
    $('.jsInput').keyup(function() {

        var empty = false;
        $('.jsInput').each(function() {
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
});