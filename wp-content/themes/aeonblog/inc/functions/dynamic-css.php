<?php
/**
 * File aeonblog.
 *
 * @package   AeonBlog
 * @author    AeonWP <info@aeonwp.com>
 * @copyright Copyright (c) 2019, AeonWP
 * @link      https://aeonwp.com/aeonblog
 * @license   http://www.gnu.org/licenses/gpl-2.0.html
 * Dynamic css
 *
 * @since AeonBlog 1.0.0
 */

if ( ! function_exists( 'aeonblog_dynamic_css' ) ) {
	/**
	 * Dynamic CSS
	 *
	 *  @since AeonBlog 1.0.0
	 */
	function aeonblog_dynamic_css() {

		/* Get and escape theme options */
		$aeonblog_body_font           = esc_attr( get_theme_mod( 'aeonblog_body_font', 'Open Sans' ) );
		$aeonblog_title_font          = esc_attr( get_theme_mod( 'aeonblog_title_font', 'Josefin Sans' ) );
		$aeonblog_font_size           = absint( get_theme_mod( 'aeonblog-font-size', 18 ) );
		$aeonblog_font_line_height    = esc_attr( get_theme_mod( 'aeonblog-font-line-height', 2 ) );
		$aeonblog_font_letter_spacing = absint( get_theme_mod( 'aeonblog-letter-spacing', 0 ) );
		$aeonblog_about_gravatar      = esc_attr( get_theme_mod( 'aeonblog-about-gravatar', 'circle' ) );
		$aeonblog_accent_color        = esc_attr( get_theme_mod( 'aeonblog-accent-color', '#021634' ) );
		$aeonblog_button_color        = esc_attr( get_theme_mod( 'aeonblog-button-color', '#4ea371' ) );
		$custom_css                   = '';

		/* Typography Section */

		if ( ! empty( $aeonblog_body_font ) ) {
			$custom_css .= "body { font-family: '{$aeonblog_body_font}', BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }";
		}

		if ( ! empty( $aeonblog_title_font ) ) {
			$custom_css .= ".site-title { font-family: '{$aeonblog_title_font}', BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }";
		}

		if ( ! empty( $aeonblog_font_size ) ) {
			$custom_css .= "body, input { font-size: {$aeonblog_font_size}px; }";
			if ( 14 == $aeonblog_font_size ) {
				$custom_css .= '.widget_search .search-form .search-field { height: 46px; } ';
			}
		}

		if ( ! empty( $aeonblog_font_line_height ) ) {
			$custom_css .= "body { line-height: {$aeonblog_font_line_height}; }";
		}

		if ( ! empty( $aeonblog_font_letter_spacing ) ) {
			$custom_css .= "body { letter-spacing: {$aeonblog_font_letter_spacing}px; }";
		}

		/* About section */
		if ( 'square' === $aeonblog_about_gravatar ) {
			$custom_css .= '.about-me-description a img { border-radius: 2px; }';
		} elseif ( 'hide' === $aeonblog_about_gravatar ) {
			$custom_css .= '.about-me-description a { display: none; }';
		}

		if ( ! empty( $aeonblog_accent_color ) ) {
			$custom_css .= ' button:hover,
				input[type="button"]:hover,
				input[type="reset"]:hover,
				input[type="submit"]:hover,
				button:active,
				button:focus,
				input[type="button"]:active,
				input[type="button"]:focus,
				input[type="reset"]:active,
				input[type="reset"]:focus,
				input[type="submit"]:active,
				input[type="submit"]:focus,
				#mobile-menu-toggle:hover, #mobile-menu-toggle:focus,
				.aeonblog-pagination .page-numbers.current,	.aeonblog-pagination .page-numbers:hover,
				.posts-navigation a:hover, .posts-navigation a:focus,
				.entry-header .entry-meta li .posted-in a:focus,
				.entry-header .entry-meta li .posted-in a:hover,
				.entry-footer .more-link:hover,	.entry-footer .more-link:focus,
				.site-footer {
					background: ' . $aeonblog_accent_color . ';
				}';

				$custom_css .= ' .aeonblog-pagination .page-numbers,
				.posts-navigation a,
				#mobile-menu-toggle,
				.entry-footer .more-link, .entry-footer .more-link:hover, .entry-footer .more-link:focus,
				.widget_search .search-field:focus, .widget_search .search-field:hover,
				input[type="text"]:focus,
				input[type="email"]:focus,
				input[type="url"]:focus,
				input[type="password"]:focus,
				input[type="search"]:focus,
				input[type="number"]:focus,
				input[type="tel"]:focus,
				input[type="range"]:focus,
				input[type="date"]:focus,
				input[type="month"]:focus,
				input[type="week"]:focus,
				input[type="time"]:focus,
				input[type="datetime"]:focus,
				input[type="datetime-local"]:focus,
				input[type="color"]:focus,
				textarea:focus,
				input[type="text"]:hover,
				input[type="email"]:hover,
				input[type="url"]:hover,
				input[type="password"]:hover,
				input[type="search"]:hover,
				input[type="number"]:hover,
				input[type="tel"]:hover,
				input[type="range"]:hover,
				input[type="date"]:hover,
				input[type="month"]:hover,
				input[type="week"]:hover,
				input[type="time"]:hover,
				input[type="datetime"]:hover,
				input[type="datetime-local"]:hover,
				input[type="color"]:hover,
				textarea:hover
				{
					border-color: ' . $aeonblog_accent_color . ';
				}';
		}

		if ( ! empty( $aeonblog_button_color ) ) {
			$custom_css .= ' button, input[type="button"], input[type="reset"], input[type="submit"], #toTop {
				background: ' . $aeonblog_button_color . ';
			}';
		}

		wp_add_inline_style( 'aeonblog-style', $custom_css );
	}
}
add_action( 'wp_enqueue_scripts', 'aeonblog_dynamic_css', 99 );
