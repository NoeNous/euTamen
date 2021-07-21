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
 * AeonBlog functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 */

if ( ! function_exists( 'aeonblog_setup' ) ) {
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function aeonblog_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on AeonBlog, use a find and replace
		 * to change 'aeonblog' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'aeonblog' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'primary' => esc_html__( 'Primary Menu', 'aeonblog' ),
				'social'  => esc_html__( 'Social Menu', 'aeonblog' ),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
			)
		);

		// Set up the WordPress core custom background feature.
		add_theme_support(
			'custom-background',
			apply_filters(
				'aeonblog_custom_background_args',
				array(
					'default-color' => 'f1f5f5',
					'default-image' => '',
				)
			)
		);

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		// Add support for responsive embedded content.
		add_theme_support( 'responsive-embeds' );

		// Add support for default block styles.
		add_theme_support( 'wp-block-styles' );

		/*
		 * Add support custom font sizes.
		 *
		 * Add the line below to disable the custom color picker in the editor.
		 * add_theme_support( 'disable-custom-font-sizes' );
		 */
		add_theme_support(
			'editor-font-sizes',
			array(
				array(
					'name'      => __( 'Small', 'aeonblog' ),
					'shortName' => __( 'S', 'aeonblog' ),
					'size'      => 16,
					'slug'      => 'small',
				),
				array(
					'name'      => __( 'Medium', 'aeonblog' ),
					'shortName' => __( 'M', 'aeonblog' ),
					'size'      => 25,
					'slug'      => 'medium',
				),
				array(
					'name'      => __( 'Large', 'aeonblog' ),
					'shortName' => __( 'L', 'aeonblog' ),
					'size'      => 31,
					'slug'      => 'large',
				),
				array(
					'name'      => __( 'Larger', 'aeonblog' ),
					'shortName' => __( 'XL', 'aeonblog' ),
					'size'      => 39,
					'slug'      => 'larger',
				),
			)
		);
	}
}
add_action( 'after_setup_theme', 'aeonblog_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function aeonblog_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'aeonblog_content_width', 640 );
}
add_action( 'after_setup_theme', 'aeonblog_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function aeonblog_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'aeonblog' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'aeonblog' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'aeonblog_widgets_init' );

if ( ! function_exists( 'wp_body_open' ) ) {
	/**
	 * Shim for wp_body_open, ensuring backwards compatibility with versions of WordPress older than 5.2.
	 *
	 * @link https://core.trac.wordpress.org/ticket/47891
	 */
	function wp_body_open() {
		do_action( 'wp_body_open' );
	}
}

if ( ! function_exists( 'aeonblog_skip_link' ) ) {
	/**
	 * Include a skip to content link at the top of the page so that users can bypass the menu.
	 */
	function aeonblog_skip_link() {
		echo '<a class="skip-link screen-reader-text" href="#content">' . esc_html__( 'Skip to content', 'aeonblog' ) . '</a>';
	}
	add_action( 'wp_body_open', 'aeonblog_skip_link', 5 );
}

if ( ! function_exists( 'aeonblog_fonts_url' ) ) {
	/**
	 * Register custom fonts.
	 * Credits:
	 * Twenty Seventeen WordPress Theme, Copyright 2016 WordPress.org
	 * Twenty Seventeen is distributed under the terms of the GNU GPL
	 */
	function aeonblog_fonts_url() {
		$fonts_url = '';

		$font_families   = array();
		$font_families[] = get_theme_mod( 'aeonblog_body_font', 'Open Sans' ) . ':400,700';
		$font_families[] = get_theme_mod( 'aeonblog_title_font', 'Josefin Sans' ) . ':400,700';

		$font_families = array_unique( $font_families );

		$query_args = array(
			'family' => rawurlencode( implode( '|', $font_families ) ),
			'subset' => rawurlencode( 'latin,latin-ext' ),
		);

		$fonts_url = add_query_arg( $query_args, 'https://fonts.googleapis.com/css' );

		return esc_url_raw( $fonts_url );
	}
}

/**
 * Add preconnect for Google Fonts.
 *
 * @param array  $urls           URLs to print for resource hints.
 * @param string $relation_type  The relation type the URLs are printed.
 * @return array $urls           URLs to print for resource hints.
 */
function aeonblog_resource_hints( $urls, $relation_type ) {
	if ( wp_style_is( 'aeonblog-fonts', 'queue' ) && 'preconnect' === $relation_type ) {
		$urls[] = array(
			'href' => 'https://fonts.gstatic.com',
			'crossorigin',
		);
	}

	return $urls;
}
add_filter( 'wp_resource_hints', 'aeonblog_resource_hints', 10, 2 );

/**
 * Enqueue scripts and styles.
 */
function aeonblog_scripts() {
	/*google font  */
	wp_enqueue_style( 'aeonblog-fonts', aeonblog_fonts_url(), array(), null );
	wp_enqueue_style( 'aeonblog-style', get_stylesheet_uri() );
	wp_style_add_data( 'aeonblog-style', 'rtl', 'replace' );
	wp_enqueue_style( 'aeonblog-print-css', get_template_directory_uri() . '/css/print.css', 'print' );

	wp_enqueue_script( 'aeonblog-navigation', get_template_directory_uri() . '/js/navigation.min.js', array( 'jquery' ), '4.6.0', true );
	wp_enqueue_script( 'aeonblog-main', get_template_directory_uri() . '/js/main.min.js', array( 'jquery' ), '4.5.0', true );
	wp_enqueue_script( 'aeonblog-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.min.js', array(), '20151215', true );

	if ( get_theme_mod( 'aeonblog-sticky-sidebar', 1 ) == 1 ) {
		wp_enqueue_script( 'theia-sticky-sidebar', get_template_directory_uri() . '/js/theia-sticky-sidebar.min.js', array(), '20151215', true );
		wp_enqueue_script( 'aeonblog-sticky-sidebar', get_template_directory_uri() . '/js/sticky-sidebar.min.js', array(), '20151215', true );
	}

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'aeonblog_scripts' );

if ( ! function_exists( 'aeonblog_editor_assets' ) ) {
	/**
	 * Add styles and fonts for the editor.
	 */
	function aeonblog_editor_assets() {
		wp_enqueue_style( 'aeonblog-fonts', aeonblog_fonts_url(), array(), null );
		wp_enqueue_style( 'aeonblog-blocks', get_theme_file_uri( '/css/block-editor.css' ), false );
	}
	add_action( 'enqueue_block_editor_assets', 'aeonblog_editor_assets' );
}

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';
require get_template_directory() . '/inc/customizer-fonts.php';
require get_template_directory() . '/inc/sanitize-functions.php';
require get_template_directory() . '/inc/class-customize.php';

/**
 * Custom Function Templates
 */
require get_template_directory() . '/inc/custom-functions.php';

/**
 * SVG icons functions and filters.
 */
require get_parent_theme_file_path( '/inc/icon-functions.php' );

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

/**
 * Loading breadcrumbs File.
 */
if ( ! function_exists( 'aeonblog_breadcrumb_trail' ) ) {
	require get_template_directory() . '/inc/breadcrumb.php';
}

/**
 * Load dynamic css file.
*/
require get_template_directory() . '/inc/functions/dynamic-css.php';

/**
 * Add theme page.
 */
require get_template_directory() . '/inc/admin.php';

/**
 * Add upgrade notice.
 */
require get_template_directory() . '/inc/upgrade-pro.php';

