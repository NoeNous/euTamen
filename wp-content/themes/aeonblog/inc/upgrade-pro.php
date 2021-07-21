<?php
/**
 * Class to display the `Upgrade To Pro` admin notice.
 *
 * @package AeonBlog
 */

defined( 'ABSPATH' ) || exit;

/**
 * Class to display the `Upgrade to Pro` admin notice.
 *
 * Class AeonBlog_Theme_Notice
 */
class AeonBlog_Theme_Notice {

	/**
	 * Currently active theme in the site.
	 *
	 * @var \WP_Theme
	 */
	protected $active_theme;

	/**
	 * Current user id.
	 *
	 * @var int Current user id.
	 */
	protected $current_user_data;

	/**
	 * Constructor function for `Upgrade To Pro` admin notice.
	 *
	 * AeonBlog_Theme_Notice constructor.
	 */
	public function __construct() {

		add_action( 'after_setup_theme', array( $this, 'pro_theme_notice' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts' ) );

	}

	/**
	 * Function to hold the available themes, which have pro version available.
	 *
	 * @return array Theme lists.
	 */
	public static function get_theme_lists() {

		$theme_lists = array(
			'aeonblog'      => 'https://aeonwp.com/aeonblog-plus/',
		);

		return $theme_lists;

	}

	/**
	 * Set upgrade time and display the admin notice as required.
	 */
	public function pro_theme_notice() {

		global $current_user;
		$this->current_user_data = $current_user;
		$this->active_theme      = wp_get_theme();

		// In case user is using child theme, we need to show `Upgrade To Pro` notice too.
		if ( is_child_theme() ) {
			$this->active_theme = wp_get_theme()->parent()->get( 'Name' );
		}

		$option = get_option( 'aeonblog_theme_notice_start_time' );

		if ( ! $option ) {
			update_option( 'aeonblog_theme_notice_start_time', time() );
		}

		add_action( 'admin_notices', array( $this, 'pro_theme_notice_markup' ), 0 );
		add_action( 'admin_init', array( $this, 'pro_theme_notice_partial_ignore' ), 0 );
		add_action( 'admin_init', array( $this, 'pro_theme_notice_ignore' ), 0 );

	}

	/**
	 * Enqueue the required scripts.
	 */
	public function enqueue_scripts() {

		wp_enqueue_style( 'aeonblog-notice', get_template_directory_uri() . '/css/upgrade-pro.css', array(), '4.5.0' );
	}

	/**
	 * Display the `Upgrade To Pro` admin notice.
	 */
	public function pro_theme_notice_markup() {

		$theme_lists             = self::get_theme_lists();
		$current_theme           = strtolower( $this->active_theme );
		$theme_notice_start_time = get_option( 'aeonblog_theme_notice_start_time' );
		$ignore_notice_permanent = get_user_meta( $this->current_user_data->ID, 'aeonblog_upgrade_pro_theme_notice_ignore', true );
		$ignore_notice_partially = get_user_meta( $this->current_user_data->ID, 'aeonblog_upgrade_pro_theme_notice_partial_ignore', true );

		// Return if the theme is not available in theme lists.
		if ( ! array_key_exists( $current_theme, $theme_lists ) ) {
			return;
		}
		/**
		 * Return from notice display if:
		 *
		 * 1. The theme installed is less than 10 days ago.
		 * 2. If the user has ignored the message partially for 2 days.
		 * 3. Dismiss always if clicked on 'Dismiss' button.
		 */
		if ( ( $theme_notice_start_time > strtotime( '-5 days' ) ) || ( $ignore_notice_partially > strtotime( '-2 days' ) ) || ( $ignore_notice_permanent ) ) {
			return;
		}
		?>

		<div class="notice updated pro-theme-notice">
			<p>
				<?php
				$pro_link = '<a target="_blank" href=" ' . esc_url( $theme_lists[ $current_theme ] ) . ' ">' . esc_html__( 'upgrade to pro', 'aeonblog' ) . '</a>';

				printf(
					esc_html__(
						/* Translators: %1$s current user display name., %2$s Currently activated theme., %3$s Pro theme link., %4$s Coupon code. */
						'Howdy, %1$s! You\'ve been using %2$s theme for a while now, and we hope you\'re happy with it. If you need more options and access to the premium features, you can %3$s. Also, you can use the coupon code %4$s to get 20 percent discount while making the purchase. Enjoy!', 'aeonblog'
					),
					'<strong>' . esc_html( $this->current_user_data->display_name ) . '</strong>',
					$this->active_theme,
					$pro_link,
					'<code>upgrade20</code>'
				);
				?>
			</p>

			<div class="links">
				<a href="<?php echo esc_url( $theme_lists[ $current_theme ] ); ?>" class="btn button-primary"
				   target="_blank">
					<span class="dashicons dashicons-thumbs-up"></span>
					<span><?php esc_html_e( 'Upgrade To Pro', 'aeonblog' ); ?></span>
				</a>

				<a href="?aeonblog_upgrade_pro_theme_notice_partial_ignore=1" class="btn button-secondary">
					<span class="dashicons dashicons-calendar"></span>
					<span><?php esc_html_e( 'Maybe later', 'aeonblog' ); ?></span>
				</a>
			</div>

			<a class="notice-dismiss" href="?aeonblog_upgrade_pro_theme_notice_ignore=1"></a>
		</div>

		<?php
	}

	/**
	 * Set the nag for partially ignored users.
	 */
	public function pro_theme_notice_partial_ignore() {

		$user_id = $this->current_user_data->ID;

		if ( isset( $_GET['aeonblog_upgrade_pro_theme_notice_partial_ignore'] ) && '1' == $_GET['aeonblog_upgrade_pro_theme_notice_partial_ignore'] ) {
			update_user_meta( $user_id, 'aeonblog_upgrade_pro_theme_notice_partial_ignore', time() );
		}
	}

	/**
	 * Set the nag for permanently ignored users.
	 */
	public function pro_theme_notice_ignore() {

		$user_id = $this->current_user_data->ID;

		if ( isset( $_GET['aeonblog_upgrade_pro_theme_notice_ignore'] ) && '1' == $_GET['aeonblog_upgrade_pro_theme_notice_ignore'] ) {
			update_user_meta( $user_id, 'aeonblog_upgrade_pro_theme_notice_ignore', time() );
		}
	}
}
new AeonBlog_Theme_Notice();
