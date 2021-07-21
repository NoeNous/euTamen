<?php
/**
 * Template Name: Middle Column
 * Template Post Type: post
 *
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
?>	

	<div id="primary" class="col-md-8 col-sm-8 col-sm-push-2">	
		<div class="content-area">
			<?php
			while ( have_posts() ) {
				the_post();

				get_template_part( 'template-parts/content', 'single' );

				the_post_navigation();

				// If comments are open or we have at least one comment, load up the comment template.
				if ( comments_open() || get_comments_number() ) {
					comments_template();
				}
			}// End of the loop.
			?>
		</div><!-- content-area -->
	</div><!-- #primary -->

<?php
get_footer();
