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
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 */

get_header();

/** Left sidebar */
get_sidebar( 'left' );
?>
	<main id="primary" role="main">
		<?php
		while ( have_posts() ) {
			the_post();

			get_template_part( 'template-parts/content', 'single' );

			the_post_navigation(
				array(
					'prev_text' => __( '&laquo;', 'aeonblog' ) . ' %title',
					'next_text' => '%title ' . __( '&raquo;', 'aeonblog' ),
				)
			);

			/**
			* Aeonblog_related_posts hook
			*
			* @since AeonBlog Plus 1.0.0
			*
			* @hooked aeonblog_related_posts -  10
			*/
			do_action( 'aeonblog_related_posts', get_the_ID() );

			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) {
				comments_template();
			}
		} // End of the loop.
		?>
	</main><!-- #primary -->
<?php
get_sidebar();

get_footer();
