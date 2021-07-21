<?php
/**
 * File aeonblog.
 *
 * @package   AeonBlog
 * @author    AeonWP <info@aeonwp.com>
 * @copyright Copyright (c) 2019, AeonWP
 * @link      https://aeonwp.com/aeonblog
 * @license   http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Sanitize functions.
 */

/**
 * Checkbox sanitization callback example.
 *
 * Sanitization callback for 'checkbox' type controls. This callback sanitizes `$checked`
 * as a boolean value, either TRUE or FALSE.
 *
 * @param bool $checked Whether the checkbox is checked.
 * @return bool Whether the checkbox is checked.
 */
function aeonblog_sanitize_checkbox( $checked ) {
	// Boolean check.
	return ( ( isset( $checked ) && true == $checked ) ? true : false );
}

if ( ! function_exists( 'aeonblog_sanitize_number' ) ) {
	/**
	 * Adds sanitization callback function: Number.
	 *
	 * @param int $input Input from the option.
	 * @since AeonBlog 1.0.0
	 */
	function aeonblog_sanitize_number( $input ) {
		if ( isset( $input ) && is_numeric( $input ) ) {
			return $input;
		}
	}
}

if ( ! function_exists( 'aeonblog_sanitize_select' ) ) {
	/**
	 * Sanitize selection.
	 *
	 * @param string $input Input from the option.
	 * @param array  $setting INformation about the customizer control.
	 *
	 * @since AeonBlog 1.0.0
	 */
	function aeonblog_sanitize_select( $input, $setting ) {
		// Ensure input is a slug.
		$input = sanitize_text_field( $input );
		// Get list of choices from the control associated with the setting.
		$choices = $setting->manager->get_control( $setting->id )->choices;
		// If the input is a valid key, return it; otherwise, return the default.
		return ( array_key_exists( $input, $choices ) ? $input : $setting->default );
	}
}
