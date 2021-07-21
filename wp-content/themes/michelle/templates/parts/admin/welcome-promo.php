<?php
/**
 * Admin "Welcome" page content component.
 *
 * Promo.
 *
 * @package    Michelle
 * @copyright  WebMan Design, Oliver Juhas
 *
 * @since    1.0.0
 * @version  1.0.11
 */

namespace WebManDesign\Michelle;

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'WebManDesign\Michelle\Welcome\Component' ) ) {
	return;
}

?>

<hr class="is-large">

<div class="about__section is-feature welcome--promo">
	<h2>
		<?php esc_html_e( 'Like the theme?', 'michelle' ); ?>
	</h2>
	<p>
		<?php esc_html_e( 'You are using a fully functional 100% free WordPress theme without any paid upgrade.', 'michelle' ); ?>
		<?php esc_html_e( 'If you find it helpful, please support its updates and technical support service with a donation or by purchasing one of paid products at WebManDesign.eu.', 'michelle' ); ?>
		<?php esc_html_e( 'Thank you!', 'michelle' ); ?>
		<br><br>
		<a href="https://www.webmandesign.eu/contact/#donation" class="button button-hero button-primary welcome--button-outline"><?php esc_html_e( 'Visit WebMan Design website now &rarr;', 'michelle' ); ?></a>
	</p>
</div>
