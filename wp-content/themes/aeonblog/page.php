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
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 */

get_header();

/** Left sidebar */
get_sidebar( 'left' );

?>
	<main id="primary" role="main">
			<header class="page-header">
				<?php the_title( '<h1 class="page-title">', '</h1>' ); ?>
			</header><!-- .entry-header -->
			<?php
			while ( have_posts() ) {
				the_post();

				get_template_part( 'template-parts/content', 'page' );

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
