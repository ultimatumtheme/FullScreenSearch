jQuery(function () {
    jQuery('a[href="#ult-fs-search"]').on('click', function(event) {
        event.preventDefault();
        jQuery('#ult-fs-search').addClass('open');
        jQuery('#ult-fs-search > form > input[type="text"]').focus();
    });

    jQuery('#ult-fs-search, #ult-fs-search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            jQuery(this).removeClass('open');
        }
    });


});