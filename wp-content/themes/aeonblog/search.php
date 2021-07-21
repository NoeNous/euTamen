<?php
/**
 * Search results page.
 *
 * @package   AeonBlog
 * @author    AeonWP <info@aeonwp.com>
 * @copyright Copyright (c) 2019, AeonWP
 * @link      https://aeonwp.com/aeonblog
 * @license   http://www.gnu.org/licenses/gpl-2.0.html
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 */

get_header();

/** Left sidebar */
get_sidebar( 'left' );

?>
	<main id="primary" role="main">
	<?php
	if ( have_posts() ) {
		?>
		<div class="search-title-box">
			<h1 class="page-title">
			<?php
			/* translators: %s: search query. */
			printf( esc_html__( 'Search Results for: %s', 'aeonblog' ), '<span>' . get_search_query() . '</span>' );
			?>
			</h1>
		</div>
		<?php
		/* Start the Loop */
		while ( have_posts() ) {
			the_post();

			/**
			 * Run the loop for the search to output the results.
			 * If you want to overload this in a child theme then include a file
			 * called content-search.php and that will be used instead.
			*/
			get_template_part( 'template-parts/content' );
		}
			/**
			 * Aeonblog_post_navigation hook.
			 *
			 * @since AeonBlog 1.0.0
			 *
			 * @hooked aeonblog_posts_navigation -  10
			 */
			do_action( 'aeonblog_action_navigation' );

	} else {
		get_template_part( 'template-parts/content', 'none' );
	}
	?>
	</main><!-- #primary -->
<?php
get_sidebar();

get_footer();
