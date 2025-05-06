$(document).ready(function() {
    $('input[type="checkbox"]').bind('change', function() {
        if($(this).is(':checked')) {
            $('.altmetric-embed').delay(100).fadeIn('fast'); // i.e., toggle altmetric badges on
        } else {
            $('.altmetric-embed').hide();
        }
    });
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.description').click(function() {
        $(this).parent().parent().find(".description.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
    $('a').removeClass('waves-effect waves-light');
});