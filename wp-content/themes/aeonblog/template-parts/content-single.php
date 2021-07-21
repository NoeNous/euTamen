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
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 */

?>
<article id="post-<?php the_ID(); ?>" <?php post_class( 'post-wrapper' ); ?>>
	<header class="entry-header">
		<ul class="entry-meta clearfix">
			<li><span class="author vcard">
				<?php
				echo aeonblog_get_svg( array( 'icon' => 'user' ) );
				?>
				<i class="fa fa-user" aria-hidden="true"></i> 
				<?php aeonblog_posted_by(); ?></span>
			</li>
			<li>
				<?php
				echo aeonblog_get_svg( array( 'icon' => 'clock' ) );
				aeonblog_posted_on();
				?>
			</li>
		</ul>
		<?php
		if ( is_singular() ) {
			the_title( '<h1 class="entry-title">', '</h1>' );
		} else {
			the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
		}
		?>
		<ul class="entry-meta clearfix">
			<li>
				<span class="posted-in">
					<?php
					$categories = get_the_category();
					if ( ! empty( $categories ) ) {
						echo '<a href="' . esc_url( get_category_link( $categories[0]->term_id ) ) . ' " rel="category tag">' . esc_html( $categories[0]->name ) . '</a>';
					}
					?>
				</span>
			</li>
		</ul>
	</header>
	<?php
	if ( has_post_thumbnail() ) {
		?>
		<div class="featured-wrapper">
			<div class="post-thumbnail">
				<?php the_post_thumbnail( 'small' ); ?>
			</div>
		</div>
		<?php
	}
	?>
	<div class="blog-content">
		<div class="entry-content">
			<?php
			the_content();
			wp_link_pages(
				array(
					'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'aeonblog' ),
					'after'  => '</div>',
				)
			);
			?>
		</div><!-- .entry-content -->

		<?php if ( has_tag() ) { ?>
			<footer class="entry-footer">
				<ul class="entry-meta clearfix">
					<li><?php the_tags(); ?></li>
				</ul>
			</footer><!-- .entry-footer -->
		<?php } ?>
	</article><!-- #post-<?php the_ID(); ?> -->
