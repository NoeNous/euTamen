<?php
/**
 * Loading theme functionality.
 *
 * @link  https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package    Michelle
 * @copyright  WebMan Design, Oliver Juhas
 *
 * @since  1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

// Check that the site meets the minimum requirements:

	define( 'MICHELLE_WP_VERSION', '5.5' );
	define( 'MICHELLE_PHP_VERSION', '7.0' );

	if (
		version_compare( $GLOBALS['wp_version'], MICHELLE_WP_VERSION, '<' )
		|| version_compare( PHP_VERSION, MICHELLE_PHP_VERSION, '<' )
	) {
		require_once get_template_directory() . '/includes/Compatibility.php';
		return;
	}

// Constants:

	define( 'MICHELLE_THEME_VERSION', wp_get_theme( 'michelle' )->get( 'Version' ) );

	define( 'MICHELLE_PATH', trailingslashit( get_template_directory() ) );
		define( 'MICHELLE_PATH_INCLUDES', MICHELLE_PATH . 'includes/' );
		define( 'MICHELLE_PATH_VENDOR',   MICHELLE_PATH . 'vendor/' );

	if ( ! defined( 'MICHELLE_ENQUEUE_PRIORITY' ) ) {
		/**
		 * Theme assets enqueue priority.
		 *
		 * To rise the priority use:
		 * =========================
		 * + 1...9 for core theme assets setup,
		 * + 10...98 for additional assets setup,
		 * + 99 for modifications, such as deregistering and dequeuing.
		 */
		define( 'MICHELLE_ENQUEUE_PRIORITY', 11 );
	}

// Load theme functionality.
require_once MICHELLE_PATH_INCLUDES . 'Autoload.php';
WebManDesign\Michelle\Theme::init();


//Para que solo sexa obrigatorio o email, non o nome
function wp_modificar_form_comentarios($fields) {

	// Modificamos el campo nombre y lo marcamos como opcional 
	$fields['author'] = '<p class="comment-form-author">' . '<label for="author">' . __( 'Nombre (Opcional)' ) . '</label> ' . ( $req ? '<span class="required">*</span>' : '' ) .
	'<input id="author" name="author" type="text" value="' . esc_attr( $commenter['comment_author'] ) . '" size="30"' . $aria_req . ' /></p>';

	// Esta línea elimina el campo url del formulario. 	  
	  $fields['url'] = '';

    return $fields;
	}
	add_filter('comment_form_default_fields', 'wp_modificar_form_comentarios');

//Para que non saia o campo do nome:
	function wp_alter_comment_form_fields($fields) {
    unset($fields['author']);
    unset($fields['url']);
    return $fields;
	}
	add_filter('comment_form_default_fields', 'wp_alter_comment_form_fields');
