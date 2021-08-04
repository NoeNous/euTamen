<?php
defined('ABSPATH') or die('No script kiddies please!!');
wp_nonce_field('cld_metabox_nonce', 'cld_metabox_nonce_field');
?>
<div class="cld-field-wrap">
    <label><?php esc_html_e('Like Count', 'comments-like-dislike'); ?></label>
    <div class="cld-field">
        <input type="text" name="cld_like_count" value="<?php echo esc_attr($like_count); ?>"/>
    </div>
</div>
<div class="cld-field-wrap">
    <label><?php esc_html_e('Dislike Count', 'comments-like-dislike'); ?></label>
    <div class="cld-field">
        <input type="text" name="cld_dislike_count" value="<?php echo esc_attr($dislike_count); ?>"/>
    </div>
</div>