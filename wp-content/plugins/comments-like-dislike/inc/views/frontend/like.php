<div class="cld-like-wrap  cld-common-wrap">
    <a href="<?php echo esc_attr($href); ?>"
       class="cld-like-trigger cld-like-dislike-trigger <?php echo ($already_liked == 1) ? 'cld-prevent' : ''; ?>"
       title="<?php echo esc_attr($like_title); ?>"
       data-comment-id="<?php echo intval($comment_id); ?>"
       data-trigger-type="like"
       data-restriction="<?php echo esc_attr($cld_settings['basic_settings']['like_dislike_resistriction']); ?>"
       data-already-liked="<?php echo esc_attr($already_liked) ?>"

       >
           <?php
           $template = esc_attr($cld_settings['design_settings']['template']);
           switch ($template) {
               case 'template-1':
                   ?>
                <i class="fas fa-thumbs-up"></i>
                <?php
                break;
            case 'template-2':
                ?>
                <i class="fas fa-heart"></i>
                <?php
                break;
            case 'template-3':
                ?>
                <i class="fas fa-check"></i>
                <?php
                break;
            case 'template-4':
                ?>
                <i class="far fa-smile"></i>
                <?php
                break;
            case 'custom':
                if ($cld_settings['design_settings']['like_icon'] != '') {
                    ?>
                    <img src="<?php echo esc_url($cld_settings['design_settings']['like_icon']); ?>" alt="<?php echo esc_attr($like_title); ?>"/>
                    <?php
                }
                break;
        }
        /**
         * Fires when template is being loaded
         *
         * @param array $cld_settings
         *
         * @since 1.0.0
         */
        do_action('cld_like_template', $cld_settings);
        ?>
    </a>
    <span class="cld-like-count-wrap cld-count-wrap"><?php echo $like_count; ?>
    </span>
</div>