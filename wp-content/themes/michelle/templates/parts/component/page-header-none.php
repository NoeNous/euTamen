<?php // phpcs:ignore WPThemeReview.Templates.ReservedFileNamePrefix.ReservedTemplatePrefixFound
/**
 * Page header, for nothing found page.
 *
 * @package    Michelle
 * @copyright  WebMan Design, Oliver Juhas
 *
 * @since  1.0.0
 */

namespace WebManDesign\Michelle;

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

if ( ! Content\Component::show_primary_title() ) {
	return;
}

?>

<header class="page-header not-found">
	<div class="page-header-content">
		<?php

		/**
		 * Fires before page header text content.
		 *
		 * @since  1.0.0
		 */
		do_action( 'michelle/page_header/top' );

		?>
		<div class="page-header-text">
			<h1 class="page-title"><?php esc_html_e( 'Nothing Found', 'michelle' ); ?></h1>
		</div>
		<?php

		/**
		 * Fires after page header text content.
		 *
		 * @since  1.0.0
		 */
		do_action( 'michelle/page_header/bottom' );

		?>
	</div>
</header>
