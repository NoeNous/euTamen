<?php

if (!function_exists('comments_like_dislike')) {

    /**
     * Displays comments like dislike buttons
     *
     * @param int $comment_id
     *
     * @since 1.1.1
     */
    function comments_like_dislike($comment_id) {
        include(CLD_PATH . '/inc/views/frontend/like-dislike-html.php');
    }

}