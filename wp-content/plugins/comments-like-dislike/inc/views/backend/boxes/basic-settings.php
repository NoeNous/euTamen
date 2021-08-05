<div class="cld-settings-section" data-settings-ref="basic">
    <div class="cld-field-wrap">
        <label><?php _e('Status', CLD_TD); ?></label>
        <div class="cld-field">
            <input type="checkbox" name="cld_settings[basic_settings][status]" class="cld-form-field" value="1" <?php checked($cld_settings['basic_settings']['status'], true); ?>/>
            <p class="description"><?php _e('Please check to enable comments like and dislike in frontend', CLD_TD); ?></p>
        </div>
    </div>
    <div class="cld-field-wrap">
        <label><?php _e('Like Dislike Positiion', CLD_TD); ?></label>
        <div class="cld-field">
            <select name="cld_settings[basic_settings][like_dislike_position]" class="cld-form-field">
                <option value="after" <?php selected($cld_settings['basic_settings']['like_dislike_position'], 'after'); ?>><?php _e('After Comment', CLD_TD); ?></option>
                <option value="before" <?php selected($cld_settings['basic_settings']['like_dislike_position'], 'before'); ?>><?php _e('Before Comment', CLD_TD); ?></option>
            </select>
        </div>
    </div>
    <div class="cld-field-wrap">
        <label><?php _e('Like Dislike Display', CLD_TD); ?></label>
        <div class="cld-field">
            <select name="cld_settings[basic_settings][like_dislike_display]" class="cld-form-field">
                <option value="both" <?php selected($cld_settings['basic_settings']['like_dislike_display'], 'both'); ?>><?php _e('Display Both', CLD_TD); ?></option>
                <option value="like_only" <?php selected($cld_settings['basic_settings']['like_dislike_display'], 'like_only'); ?>><?php _e('Display Like Only', CLD_TD); ?></option>
                <option value="dislike_only" <?php selected($cld_settings['basic_settings']['like_dislike_display'], 'dislike_only'); ?>><?php _e('Display Dislike Only', CLD_TD); ?></option>
            </select>
            <p class="description"><?php _e('Please choose where you want to display the like dislike buttons', CLD_TD); ?></p>
        </div>
    </div>
    <div class="cld-field-wrap">
        <label><?php _e('Like Dislike Restriction', CLD_TD); ?></label>
        <div class="cld-field">
            <select name="cld_settings[basic_settings][like_dislike_resistriction]" class="cld-form-field cld-toggle-trigger" data-toggle-class="cld-login-link">
                <option value="cookie" <?php selected($cld_settings['basic_settings']['like_dislike_resistriction'], 'cookie'); ?>><?php _e('Cookie Restriction', CLD_TD); ?></option>
                <option value="ip" <?php selected($cld_settings['basic_settings']['like_dislike_resistriction'], 'ip'); ?>><?php _e('IP Restriction', CLD_TD); ?></option>
                <option value="user" <?php selected($cld_settings['basic_settings']['like_dislike_resistriction'], 'user'); ?>><?php _e('Logged In User Restriction', CLD_TD); ?></option>
                <option value="no" <?php selected($cld_settings['basic_settings']['like_dislike_resistriction'], 'no'); ?>><?php _e('No Restriction', CLD_TD); ?></option>
            </select>
            <p class="description"><?php _e('Please choose the restriction you want to assign to likers and dislikers', CLD_TD); ?></p>
        </div>
    </div>
    <div class="cld-field-wrap cld-login-link" data-toggle-value="user" <?php $this->display_none($cld_settings['basic_settings']['like_dislike_resistriction'], 'user'); ?>>
        <label><?php _e('Login Link', CLD_TD); ?></label>
        <div class="cld-field">
            <input type="text" name="cld_settings[basic_settings][login_link]" class="cld-form-field" value="<?php echo (!empty($cld_settings['basic_settings']['login_link'])) ? esc_url($cld_settings['basic_settings']['login_link']) : ''; ?>"/>
            <p class="description"><?php esc_html_e('Please enter the login link where users will be redirected while trying to like or dislike without logging in. Please leave blank if you don\'t want to redirect users to login page.', CLD_TD); ?></p>
        </div>
    </div>
    <div class="cld-field-wrap">
        <label><?php _e('Like Dislike Display Order', CLD_TD); ?></label>
        <div class="cld-field">
            <select name="cld_settings[basic_settings][display_order]" class="cld-form-field">
                <option value="like-dislike" <?php selected($cld_settings['basic_settings']['display_order'], 'like-dislike'); ?>><?php _e('Like Dislike', CLD_TD); ?></option>
                <option value="dislike-like" <?php selected($cld_settings['basic_settings']['display_order'], 'dislike-like'); ?>><?php _e('Dislike Like', CLD_TD); ?></option>
            </select>
        </div>
    </div>
    <div class="cld-field-wrap">
        <label><?php _e("Like hover text", CLD_TD); ?></label>
        <div class="cld-field">
            <input type="text" name="cld_settings[basic_settings][like_hover_text]" class="cld-form-field" value="<?php echo isset($cld_settings['basic_settings']['like_hover_text']) ? esc_attr($cld_settings['basic_settings']['like_hover_text']) : ''; ?>" placeholder="<?php _e("Like", CLD_TD); ?>"/>
        </div>
    </div>
    <div class="cld-field-wrap">
        <label><?php _e("Dislike hover text", CLD_TD); ?></label>
        <div class="cld-field">
            <input type="text" name="cld_settings[basic_settings][dislike_hover_text]" class="cld-form-field" value="<?php echo isset($cld_settings['basic_settings']['dislike_hover_text']) ? esc_attr($cld_settings['basic_settings']['dislike_hover_text']) : ''; ?>" placeholder="<?php _e('Dislike', CLD_TD); ?>"/>
        </div>
    </div>
    <div class="cld-field-wrap">
        <label><?php _e('Hide Like Dislike Column in Admin', CLD_TD); ?></label>
        <div class="cld-field">
            <input type="checkbox" name="cld_settings[basic_settings][hide_like_dislike_admin]" class="cld-form-field" value="1" <?php echo (!empty($cld_settings['basic_settings']['hide_like_dislike_admin'])) ? 'checked="checked"' : ''; ?>/>
            <p class="description"><?php _e('Please check if you want to hide  the like dislike column from comments list table in admin screen.', CLD_TD); ?></p>
        </div>
    </div>
    <div class="cld-field-wrap">
        <label><?php esc_html_e('Display 0(Zero) by default', 'comments-like-dislike'); ?></label>
        <div class="cld-field">
            <input type="checkbox" name="cld_settings[basic_settings][display_zero]" class="cld-form-field" value="1" <?php echo (!empty($cld_settings['basic_settings']['display_zero'])) ? 'checked="checked"' : ''; ?>/>
            <p class="description"><?php _e('Please check if you want to show 0 for no likes and dislikes', CLD_TD); ?></p>
        </div>
    </div>
</div>