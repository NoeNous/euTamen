<?php
/**
 * Block area: Site footer.
 *
 * @package    Michelle
 * @copyright  WebMan Design, Oliver Juhas
 *
 * @since    1.0.0
 * @version  1.0.6
 */

namespace WebManDesign\Michelle;

use WP_Query;

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

$area = Customize\Mod::get( 'block_area_site_footer' );

if ( empty( $area ) ) {
	return;
}

$area_query = new WP_Query( array(
	'p'         => $area,
	'post_type' => 'wp_block',
) );

if (
	! $area_query->have_posts()
	|| empty( trim( (string) $area_query->post->post_content ) )
) {
	return;
}

?>

<div class="site-footer-section">
	<div class="site-footer-content">
		<?php

		/**
		 * Fires before site footer block area content.
		 *
		 * @since  1.0.0
		 */
		do_action( 'michelle/block/area/footer/before' );

		while ( $area_query->have_posts() ) {
			$area_query->the_post();

			the_content();
		}

		wp_reset_postdata();

		/**
		 * Fires after site footer block area content.
		 *
		 * @since  1.0.0
		 */
		do_action( 'michelle/block/area/footer/after' );

		?>
	</div>
</div>
