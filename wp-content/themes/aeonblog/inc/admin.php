<?php
/**
 * Documentation for AeonBlog
 *
 * @package   AeonBlog
 * @author    AeonWP <info@aeonwp.com>
 * @copyright Copyright (c) 2019, AeonWP
 * @link      https://aeonwp.com/aeonblog
 * @license   http://www.gnu.org/licenses/gpl-2.0.html
 */

/**
 * Add the menu item under Appearance, themes.
 */
function aeonblog_menu() {
	add_theme_page( __( 'About AeonBlog', 'aeonblog' ), __( 'About AeonBlog', 'aeonblog' ), 'edit_theme_options', 'aeonblog-theme', 'aeonblog_page' );
}
add_action( 'admin_menu', 'aeonblog_menu' );

/**
 * Enqueue styles for the help page.
 */
function aeonblog_admin_scripts( $hook ) {
	if ( 'appearance_page_aeonblog-theme' !== $hook ) {
		return;
	}
	wp_enqueue_style( 'aeonblog-admin-style', get_template_directory_uri() . '/css/admin.css', array(), '' );
}
add_action( 'admin_enqueue_scripts', 'aeonblog_admin_scripts' );

/**
 * Add the theme page
 */
function aeonblog_page() {
	?>
	<div class="wrap">
		<div class="welcome-panel aeon-panel">
			<div class="welcome-panel-content">
				<img class="aeonlogo" src="<?php echo esc_url( get_template_directory_uri() . '/images/aeonwp.png' ); ?>" alt="" height="130px">
				<div class="aeontitle"><h1><?php esc_html_e( 'AeonBlog', 'aeonblog' ); ?></h1>
					<br>
					<b><?php esc_html_e( 'Thank you for chosing AeonBlog', 'aeonblog' ); ?></b><br>
				</div>
			</div>
		</div>
		<div class="welcome-panel">
			<div class="welcome-panel-content">
				<h2><?php esc_html_e( 'Frequently asked questions', 'aeonblog' ); ?></h2>
				<h3><?php esc_html_e( 'Where can I get support for the theme?', 'aeonblog' ); ?></h3>
				<?php _e( 'You are welcome to post your questions in the <a href="https://wordpress.org/support/theme/aeonblog/">support forum</a>.', 'aeonblog' ); ?>
				<h3><?php esc_html_e( 'How do I use the About section?', 'aeonblog' ); ?></h3>
				<?php _e( 'You need to have an active sidebar, and enable the option in the customzer.', 'aeonblog' ); ?><br>
				<?php _e( 'To show your biography, you need to add the content in your WordPress user profile.', 'aeonblog' ); ?><br>
				<h3><?php esc_html_e( 'Can you add more features?', 'aeonblog' ); ?></h3>
				<?php esc_html_e( 'The Plus version of the theme has additional features.', 'aeonblog' ); ?> <?php _e( 'You can learn more about the premium version of the theme here: <a href="https://aeonwp.com/aeonblog-plus/">Aeonblog Plus</a>.', 'aeonblog' ); ?><br>
				<?php _e( 'We also offer a <a href="https://aeonwp.com/services/">customization service</a>. ', 'aeonblog' ); ?><br>
				<h3><?php esc_html_e( 'Where can I download demo content?', 'aeonblog' ); ?></h3>
				<?php _e( 'You can download the demo content on our <a href="https://aeonwp.com/aeonblog/#demo">website</a>.', 'aeonblog' ); ?>
				<br>
				<br>
			</div>
		</div>
		<div class="welcome-panel">
			<div class="welcome-panel-content">
				<h2><?php esc_html_e( 'Have you built something awesome with AeonBlog?', 'aeonblog' ); ?></h2>
				<br>
				<?php esc_html_e( 'We would love to see what you have created!', 'aeonblog' ); ?>
				<?php esc_html_e( 'If you would like your website to be featured on our blog, please email us at aeonwpofficial@gmail.com', 'aeonblog' ); ?>
				<br>
				<br>
			</div>
		</div>
		<div class="welcome-panel">
			<div class="welcome-panel-content">
				<h2><?php esc_html_e( 'If you like the theme, please leave a review', 'aeonblog' ); ?></h2><br>
				<a href="https://wordpress.org/support/theme/aeonblog/reviews/#new-post"><?php esc_html_e( 'Rate this theme', 'aeonblog' ); ?></a>
				<br><br>
			</div>
		</div>
		<div class="welcome-panel">
			<div class="welcome-panel-content">
				<h2><?php esc_html_e( 'More themes', 'aeonblog' ); ?></h2><br>
				<a href="https://aeonwp.com/aeonaccess-plus/"><?php esc_html_e( 'AeonAccess is available in a premium and free version.', 'aeonblog' ); ?></a><br><br>
				<img src="<?php echo esc_url( get_template_directory_uri() . '/images/access.jpg' ); ?>" alt="" height="300px">
				<br><br>
			</div>
		</div>
	</div>
	<?php
}
