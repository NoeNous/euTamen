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
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 */

?>
</div><!-- #content -->

<div class="site-footer">
	<?php
	if ( has_nav_menu( 'social' ) ) {
		?>
			<nav class="social-icons-footer footer-social-menu-navigation" aria-label="<?php esc_attr_e( 'Social', 'aeonblog' ); ?>" role="navigation">
				<?php
				wp_nav_menu(
					array(
						'theme_location' => 'social',
						'menu_class'     => 'aeonblog-menu-social',
						'depth'          => 1,
						'link_before'    => '<span class="screen-reader-text">',
						'link_after'     => '</span>' . aeonblog_get_svg( array( 'icon' => 'chain' ) ),
						'container'      => false,
					)
				);
				?>
			</nav>
		<?php
	}
	?>
	<footer id="colophon" role="contentinfo">
		<div class="copyright">
			<?php echo wp_kses_post( get_theme_mod( 'aeonblog-copyright-text', __( 'All Rights Reserved', 'aeonblog' ) ) ); ?>
		</div>

		<div class="site-info">
			<div class="wp-credits">
			<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'aeonblog' ) ); ?>">
			<?php
			/* translators: %s: CMS name, i.e. WordPress. */
				printf( esc_html__( 'Proudly powered by %s', 'aeonblog' ), 'WordPress' );
			?>
			</a>
			</div>
			<div class="author-credits">
			<?php
			/* translators: 1: Theme name, 2: Theme author. */
			printf( esc_html__( 'Theme: %1$s by %2$s.', 'aeonblog' ), 'AeonBlog', '<a href="https://aeonwp.com/">AeonWP</a>' );
			?>
			</div>
		</div><!-- .site-info -->
		<?php
		/**
		 * Go to Top Option.
		 */
		do_action( 'aeonblog_go_to_top_hook' );
		?>
	</footer><!-- #colophon -->
</div>
<?php wp_footer(); ?>
</body>
</html>
