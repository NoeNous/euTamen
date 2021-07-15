function cld_setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function cld_getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

jQuery(document).ready(function ($) {
    var ajax_flag = 0;
    $('body').on('click', '.cld-like-dislike-trigger', function () {
        if (ajax_flag == 0) {
            var selector = $(this);
            var comment_id = $(this).data('comment-id');
            var trigger_type = $(this).data('trigger-type');
            var current_count = selector.closest('.cld-common-wrap').find('.cld-count-wrap').html();
            var like_dislike_flag = 1;
            var already_liked = $(this).data('already-liked');
            var restriction_type = $(this).data('restriction');
            if (already_liked == 0) {
                $.ajax({
                    type: 'post',
                    url: cld_js_object.admin_ajax_url,
                    data: {
                        comment_id: comment_id,
                        action: 'cld_comment_ajax_action',
                        type: trigger_type,
                        _wpnonce: cld_js_object.admin_ajax_nonce
                    },
                    beforeSend: function (xhr) {
                        ajax_flag = 1;
                    },
                    success: function (res) {
                        ajax_flag = 0;
                        res = $.parseJSON(res);
                        if (res.success) {
                            var latest_count = res.latest_count;
                            selector.closest('.cld-common-wrap').find('.cld-count-wrap').html(latest_count);
                            if (restriction_type != 'no') {
                                selector.closest('.cld-like-dislike-wrap').find('.cld-like-dislike-trigger').data('already-liked', 1);
                            }
                        }
                    }

                });
            }
        }
    });
    $('.cld-like-dislike-wrap br,.cld-like-dislike-wrap p').remove();
});