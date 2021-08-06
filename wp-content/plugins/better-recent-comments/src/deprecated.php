<?php

class Better_Recent_Comments_Util {

	public static function default_shortcode_args() {
		_deprecated_function( __FUNCTION__, '1.1', 'Barn2\\Plugin\\Better_Recent_Comments\\Util::default_shortcode_args()' );
		return \Barn2\Plugin\Better_Recent_Comments\Util::default_shortcode_args();
	}

	public static function get_comment_format( $date = true, $comment = true, $post_link = true, $avatar = false ) {
		_deprecated_function( __FUNCTION__, '1.1', 'Barn2\\Plugin\\Better_Recent_Comments\\Util::get_comment_format()' );
		return \Barn2\Plugin\Better_Recent_Comments\Util::get_comment_format( $date, $comment, $post_link, $avatar );
	}

	public static function get_recent_comments( $args ) {
		_deprecated_function( __FUNCTION__, '1.1', 'Barn2\\Plugin\\Better_Recent_Comments\\Util::get_recent_comments()' );
		return \Barn2\Plugin\Better_Recent_Comments\Util::get_recent_comments( $args );
	}

}

class Better_Recent_Comments_Plugin {

	public function shortcode( $atts, $content = '' ) {
		_deprecated_function( __FUNCTION__, '1.1', 'Barn2\\Plugin\\Better_Recent_Comments\\Plugin->shortcode()' );
		return \Barn2\Plugin\Better_Recent_Comments\better_recent_comments()->shortcode( $atts, $content );
	}

}
