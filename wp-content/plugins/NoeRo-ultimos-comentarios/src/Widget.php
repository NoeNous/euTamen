<?php

namespace Barn2\Plugin\Better_Recent_Comments;

use WP_Widget,
	Barn2\Plugin\Better_Recent_Comments\Util;

/**
 * This class provides the Better Recent Comments widget.
 *
 * @package   Barn2\better-recent-comments
 * @author    Barn2 Plugins <support@barn2.com>
 * @license   GPL-3.0
 * @copyright Barn2 Media Ltd
 */
class Widget extends WP_Widget {

	// A unique identifier for the widget
	const WIDGET_ID = 'better_recent_comments';

	public function __construct() {
		parent::__construct(
			self::WIDGET_ID, __( 'Better Recent Comments', 'better-recent-comments' ), [
				'classname'   => 'widget_recent_comments',
				'description' => __( 'An improved widget to show your site&#8217;s most recent comments.', 'better-recent-comments' )
			]
		);

		add_action( 'comment_post', [ $this, 'flush_widget_cache' ] );
		add_action( 'edit_comment', [ $this, 'flush_widget_cache' ] );
		add_action( 'transition_comment_status', [ $this, 'flush_widget_cache' ] );
	}

	public function flush_widget_cache() {
		wp_cache_delete( self::WIDGET_ID, 'widget' );
	}

	/**
	 * Outputs the content of the widget.
	 *
	 * @param array args  The array of form elements
	 * @param array instance The current instance of the widget
	 */
	public function widget( $args, $instance ) {

		// Check if there is a cached output
		$cache = wp_cache_get( self::WIDGET_ID, 'widget' );

		if ( ! is_array( $cache ) ) {
			$cache = [];
		}

		if ( ! isset( $args['widget_id'] ) ) {
			$args['widget_id'] = $this->id;
		}

		if ( isset( $cache[ $args['widget_id'] ] ) ) {
			echo $cache[ $args['widget_id'] ];
			return;
		}

		$output = $args['before_widget'];

		$title = ( ! empty( $instance['title'] ) ) ? $instance['title'] : __( 'Recent Comments', 'better-recent-comments' );
		// This filter is documented in wp-includes/default-widgets.php
		$title = apply_filters( 'widget_title', $title, $instance, $this->id_base );

		if ( $title ) {
			$output .= $args['before_title'] . $title . $args['after_title'];
		}

		$instance['format']      = Util::get_comment_format( $instance['date'], $instance['comment'], $instance['link'], $instance['avatar'] );
		$instance['avatar_size'] = apply_filters( 'recent_comments_lang_widget_avatar_size', 40 );

		$output .= Util::get_recent_comments( $instance );

		$output .= $args['after_widget'];

		echo $output;

		if ( ! $this->is_preview() ) {
			$cache[ $args['widget_id'] ] = $output;
			wp_cache_set( self::WIDGET_ID, $cache, 'widget' );
		}
	}

	/**
	 * Processes the widget's options to be saved.
	 *
	 * @param array new_instance The new instance of values to be generated via the update.
	 * @param array old_instance The previous instance of values before the update.
	 */
	public function update( $new_instance, $old_instance ) {

		$instance = $old_instance;

		$instance['title']   = wp_strip_all_tags( $new_instance['title'] );
		$instance['number']  = absint( $new_instance['number'] );
		$instance['avatar']  = isset( $new_instance['avatar'] );
		$instance['date']    = isset( $new_instance['date'] );
		$instance['comment'] = isset( $new_instance['comment'] );
		$instance['link']    = isset( $new_instance['link'] );

		$this->flush_widget_cache();
		return $instance;
	}

	/**
	 * Generates the administration form for the widget.
	 *
	 * @param array instance The array of keys and values for the widget.
	 */
	public function form( $instance ) {
		$instance = wp_parse_args( $instance, [ 'title' => '' ] );

		$number = isset( $instance['number'] ) ? filter_var( $instance['number'], FILTER_VALIDATE_INT ) : false;
		if ( ! $number ) {
			$number = 150;
		}
		$show_avatar  = isset( $instance['avatar'] ) ? (bool) $instance['avatar'] : true;
		$show_date    = isset( $instance['date'] ) ? (bool) $instance['date'] : true;
		$show_comment = isset( $instance['comment'] ) ? (bool) $instance['comment'] : true;
		$show_link    = isset( $instance['link'] ) ? (bool) $instance['link'] : true;
		?>
		<p>
			<label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php _e( 'Title:', 'better-recent-comments' ); ?></label>
			<input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" type="text"
				   value="<?php echo esc_attr( $instance['title'] ); ?>"/>
		</p>
		<p>
			<label for="<?php echo $this->get_field_id( 'number' ); ?>"><?php _e( 'Number of comments to show:', 'better-recent-comments' ); ?></label>
			<input id="<?php echo $this->get_field_id( 'number' ); ?>" name="<?php echo $this->get_field_name( 'number' ); ?>" type="text" value="<?php echo $number; ?>" size="3"/>
		</p>
		<p>
			<input type="checkbox" class="checkbox" id="<?php echo $this->get_field_id( 'avatar' ); ?>" name="<?php echo $this->get_field_name( 'avatar' ); ?>"<?php checked( $show_avatar ); ?> />
			<label for="<?php echo $this->get_field_id( 'avatar' ); ?>"><?php _e( 'Show avatar', 'better-recent-comments' ); ?></label><br/>

			<input type="checkbox" class="checkbox" id="<?php echo $this->get_field_id( 'date' ); ?>" name="<?php echo $this->get_field_name( 'date' ); ?>"<?php checked( $show_date ); ?> />
			<label for="<?php echo $this->get_field_id( 'date' ); ?>"><?php _e( 'Show date', 'better-recent-comments' ); ?></label><br/>

			<input type="checkbox" class="checkbox" id="<?php echo $this->get_field_id( 'comment' ); ?>" name="<?php echo $this->get_field_name( 'comment' ); ?>"<?php checked( $show_comment ); ?> />
			<label for="<?php echo $this->get_field_id( 'comment' ); ?>"><?php _e( 'Show comment', 'better-recent-comments' ); ?></label><br/>

			<input type="checkbox" class="checkbox" id="<?php echo $this->get_field_id( 'link' ); ?>" name="<?php echo $this->get_field_name( 'link' ); ?>"<?php checked( $show_link ); ?> />
			<label for="<?php echo $this->get_field_id( 'link' ); ?>"><?php _e( 'Show post link', 'better-recent-comments' ); ?></label>
		</p>
		<?php
	}

}
