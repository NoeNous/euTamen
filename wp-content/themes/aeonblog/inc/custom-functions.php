<?php
/**
 * File aeonblog.
 *
 * @package   AeonBlog
 * @author    AeonWP <info@aeonwp.com>
 * @copyright Copyright (c) 2019, AeonWP
 * @link      https://aeonwp.com/aeonblog
 * @license   http://www.gnu.org/licenses/gpl-2.0.html
 */

if ( ! function_exists( 'aeonblog_about_user' ) ) {
	/**
	 * Displays the About section.
	 */
	function aeonblog_about_user() {
		$enable_about = absint( get_theme_mod( 'aeonblog-enable-about', 0 ) );

		if ( 1 == $enable_about ) {

			$about_users = absint( get_theme_mod( 'aeonblog_about_user' ) );

			$aeonblog_featured_user = get_user_by( 'ID', $about_users );
			if ( ! empty( $aeonblog_featured_user ) && is_front_page() && ! is_paged() ) {
				echo '<section class="widget about-me">';
				echo '<h2 class="widget-title">';
				esc_html_e( 'About ', 'aeonblog' );
				if ( count_user_posts( $aeonblog_featured_user->ID ) ) {
					echo '<a href="' . esc_url( get_author_posts_url( $aeonblog_featured_user->ID ) ) . '">' .
						esc_html( $aeonblog_featured_user->display_name ) . '</a>';
				} else {
					echo esc_html( $aeonblog_featured_user->display_name );
				}
				echo '</h2>';
				echo '<div class="about-me-description textwidget">';
				echo '<a href="' . esc_url( get_author_posts_url( $aeonblog_featured_user->ID ) ) . '">' .
					get_avatar( $aeonblog_featured_user->user_email, 300 ) . '<span class="screen-reader-text">' . esc_html( $aeonblog_featured_user->display_name ) . '</span></a>';

				echo '<p>' . esc_html( get_user_meta( $aeonblog_featured_user->ID, 'description', true ) )
					. '</p></div>';
			}
			echo '</section>';
		}
	}
}

if ( ! function_exists( 'aeonblog_breadcrumb' ) ) {
	/**
	 * AeonBlog Breadcrumb
	 *
	 * @since AeonBlog 1.0.0
	 */
	function aeonblog_breadcrumb() {
		if ( ! is_front_page() && get_theme_mod( 'aeonblog-breadcrumb-option', 1 ) == 1 ) {
			echo '<div class="breadcrumb">';
			aeonblog_breadcrumb_trail();
			echo '</div>';
		}
	}
}
add_action( 'aeonblog_breadcrumb_hook', 'aeonblog_breadcrumb', 10 );

/**
 * AeonBlog Excerpt Length
 *
 * @since AeonBlog 1.0.0
 *
 * @param int $length Length of the excerpt.
 */
function aeonblog_excerpt_length( $length ) {
	if ( ! is_admin() ) {
		return absint( get_theme_mod( 'aeonblog-blog-excerpt', 45 ) );
	}
}
add_filter( 'excerpt_length', 'aeonblog_excerpt_length', 999 );

/**
 * AeonBlog Add Body Class
 *
 * @since AeonBlog 1.0.0
 *
 * @param string $classes CSS body classes.
 */
function aeonblog_custom_class( $classes ) {
	$classes[] = 'pt-sticky-sidebar';

	$sidebar = get_theme_mod( 'aeonblog-sidebar-options' );
	if ( 'no-sidebar' === $sidebar ) {
		$classes[] = 'no-sidebar';
	} elseif ( 'left-sidebar' === $sidebar ) {
		$classes[] = 'has-left-sidebar';
	} elseif ( 'middle-column' === $sidebar ) {
		$classes[] = 'middle-column';
	} else {
		$classes[] = 'has-right-sidebar';
	}
	return $classes;
}
add_filter( 'body_class', 'aeonblog_custom_class' );

if ( ! function_exists( 'aeonblog_go_to_top' ) ) {
	/**
	 * Go to Top
	 *
	 * @since AeonBlog 1.0.0
	 */
	function aeonblog_go_to_top() {
		if ( get_theme_mod( 'aeonblog-go-to-top', 1 ) == 1 ) {
			?>
			<a id="toTop" class="go-to-top" href="#">
				<?php echo aeonblog_get_svg( array( 'icon' => 'angle-double-up' ) ); ?>
				<span class="screen-reader-text"><?php esc_html_e( 'Go to top', 'aeonblog' ); ?></span>
			</a>
			<?php
		}
	}
	add_action( 'aeonblog_go_to_top_hook', 'aeonblog_go_to_top', 20 );
}

/**
 * Jetpack Top Posts widget Image size.
 *
 * @since AeonBlog 1.0.0
 *
 * @param array $get_image_options Jetpack top post settings.
 */
function aeonblog_custom_thumb_size( $get_image_options ) {
	$get_image_options['avatar_size'] = 600;
	return $get_image_options;
}
add_filter( 'jetpack_top_posts_widget_image_options', 'aeonblog_custom_thumb_size' );


if ( ! function_exists( 'aeonblog_posts_navigation' ) ) {
	/**
	 * Post Navigation Function
	 *
	 * @since AeonBlog 1.0.0
	 */
	function aeonblog_posts_navigation() {
		$aeonblog_pagination_option = get_theme_mod( 'aeonblog-pagination-type', 'numeric' );

		if ( 'default' === $aeonblog_pagination_option ) {
			the_posts_navigation(
				array(
					'prev_text' => __( '&laquo; Prev', 'aeonblog' ),
					'next_text' => __( 'Next &raquo;', 'aeonblog' ),
				)
			);

		} else {
			echo "<div class='aeonblog-pagination'>";
			the_posts_pagination(
				array(
					'prev_text' => __( '&laquo; Prev', 'aeonblog' ),
					'next_text' => __( 'Next &raquo;', 'aeonblog' ),
				)
			);
			echo '</div>';
		}
	}
}
add_action( 'aeonblog_action_navigation', 'aeonblog_posts_navigation', 10 );

if ( ! function_exists( 'aeonblog_related_post' ) ) {
	/**
	 * Display related posts from same category
	 *
	 * @since AeonBlog 1.0.0
	 *
	 * @param int $post_id ID of the Post.
	 * @return void
	 */
	function aeonblog_related_post( $post_id ) {
		if ( 0 == get_theme_mod( 'aeonblog-related-post', 1 ) ) {
			return;
		}

		$categories = get_the_category( $post_id );
		if ( $categories ) {
			$category_ids = array();
			$category     = get_category( $category_ids );
			$categories   = get_the_category( $post_id );
			foreach ( $categories as $category ) {
				$category_ids[] = $category->term_id;
			}
			$count = $category->category_count;
			if ( $count > 1 ) {
				?>
				<div class="related-pots-block">
				<h2 class="widget-title"><?php esc_html_e( 'Related Posts', 'aeonblog' ); ?></h2>
				<ul class="related-post-entries clear">
					<?php
					$aeonblog_cat_post_args = array(
						'category__in'        => $category_ids,
						'post__not_in'        => array( $post_id ),
						'post_type'           => 'post',
						'posts_per_page'      => 3,
						'post_status'         => 'publish',
						'ignore_sticky_posts' => true,
					);

					$aeonblog_featured_query = new WP_Query( $aeonblog_cat_post_args );

					while ( $aeonblog_featured_query->have_posts() ) {
						$aeonblog_featured_query->the_post();
						?>
						<li>
							<?php
							if ( has_post_thumbnail() ) {
								?>
								<figure class="widget-image">
									<a href="<?php the_permalink(); ?>">
										<?php the_post_thumbnail( 'small' ); ?>
									</a>
								</figure>
								<?php
							}
							?>
							<p class="entry-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></p>
						</li>
						<?php
					}
					wp_reset_postdata();
					?>
				</ul>
				</div> <!-- .related-post-block -->
				<?php
			}
		}
	}
}
add_action( 'aeonblog_related_posts', 'aeonblog_related_post', 10, 1 );
