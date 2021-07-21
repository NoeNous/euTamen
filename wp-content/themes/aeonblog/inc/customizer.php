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

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function aeonblog_customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

	if ( isset( $wp_customize->selective_refresh ) ) {
		$wp_customize->selective_refresh->add_partial(
			'blogname',
			array(
				'selector'        => '.site-title a',
				'render_callback' => 'aeonblog_customize_partial_blogname',
			)
		);

		$wp_customize->selective_refresh->add_partial(
			'blogdescription',
			array(
				'selector'        => '.site-description',
				'render_callback' => 'aeonblog_customize_partial_blogdescription',
			)
		);
	}

	$wp_customize->add_panel(
		'aeonblog_panel',
		array(
			'priority'   => 10,
			'capability' => 'edit_theme_options',
			'title'      => __( 'AeonBlog Theme Options', 'aeonblog' ),
		)
	);

	/* Primary Color Section Inside Core Color Option */
	$wp_customize->add_setting(
		'aeonblog-accent-color',
		array(
			'default'           => '#021634',
			'sanitize_callback' => 'sanitize_hex_color',
		)
	);

	$wp_customize->add_control(
		new WP_Customize_Color_Control(
			$wp_customize,
			'aeonblog-accent-color',
			array(
				'label'       => esc_html__( 'Accent Color', 'aeonblog' ),
				'description' => esc_html__( 'Applied to footer, pagination, continue reading, and categories.', 'aeonblog' ),
				'section'     => 'colors',
			)
		)
	);

	$wp_customize->add_setting(
		'aeonblog-button-color',
		array(
			'default'           => '#4ea371',
			'sanitize_callback' => 'sanitize_hex_color',
		)
	);

	$wp_customize->add_control(
		new WP_Customize_Color_Control(
			$wp_customize,
			'aeonblog-button-color',
			array(
				'label'       => esc_html__( 'Button Color', 'aeonblog' ),
				'description' => esc_html__( 'Applied to buttons.', 'aeonblog' ),
				'section'     => 'colors',
			)
		)
	);

	/*Blog Page Options*/
	$wp_customize->add_section(
		'aeonblog_blog_section',
		array(
			'capability'     => 'edit_theme_options',
			'theme_supports' => '',
			'title'          => __( 'Blog Section Options', 'aeonblog' ),
			'panel'          => 'aeonblog_panel',
		)
	);

	/*Sidebar Options*/
	$wp_customize->add_setting(
		'aeonblog-sidebar-options',
		array(
			'capability'        => 'edit_theme_options',
			'default'           => 'right-sidebar',
			'sanitize_callback' => 'aeonblog_sanitize_select',
		)
	);

	$wp_customize->add_control(
		'aeonblog-sidebar-options',
		array(
			'label'       => __( 'Sidebar Options', 'aeonblog' ),
			'description' => __( 'You can manage the individual sidebar for single post by using the post templates.', 'aeonblog' ),
			'section'     => 'aeonblog_blog_section',
			'type'        => 'select',
			'choices'     => array(
				'right-sidebar' => __( 'Right sidebar', 'aeonblog' ),
				'left-sidebar'  => __( 'Left sidebar', 'aeonblog' ),
				'no-sidebar'    => __( 'No sidebar', 'aeonblog' ),
				'middle-column' => __( 'No sidebar, content in the middle column', 'aeonblog' ),
			),
		)
	);

	/*Enable Sticky Sidebar*/
	$wp_customize->add_setting(
		'aeonblog-sticky-sidebar',
		array(
			'capability'        => 'edit_theme_options',
			'transport'         => 'refresh',
			'default'           => 1,
			'sanitize_callback' => 'aeonblog_sanitize_checkbox',
		)
	);

	$wp_customize->add_control(
		'aeonblog-sticky-sidebar',
		array(
			'label'       => __( 'Sticky Sidebar', 'aeonblog' ),
			'description' => __( 'Enable Sticky Sidebar', 'aeonblog' ),
			'section'     => 'aeonblog_blog_section',
			'type'        => 'checkbox',
		)
	);

	/*Read More Text*/
	$wp_customize->add_setting(
		'aeonblog-read-more-text',
		array(
			'capability'        => 'edit_theme_options',
			'transport'         => 'refresh',
			'default'           => esc_html__( 'Continue Reading', 'aeonblog' ),
			'sanitize_callback' => 'sanitize_text_field',
		)
	);

	$wp_customize->add_control(
		'aeonblog-read-more-text',
		array(
			'label'       => __( 'Continue Reading Text', 'aeonblog' ),
			'description' => __( 'Enter your custom continue reading text. The title will be included after this text.', 'aeonblog' ),
			'section'     => 'aeonblog_blog_section',
			'type'        => 'text',
		)
	);

	/* Meta Information */
	$wp_customize->add_setting(
		'aeonblog-blog-meta',
		array(
			'capability'        => 'edit_theme_options',
			'transport'         => 'refresh',
			'default'           => 1,
			'sanitize_callback' => 'aeonblog_sanitize_checkbox',
		)
	);

	$wp_customize->add_control(
		'aeonblog-blog-meta',
		array(
			'label'       => __( 'Meta Options', 'aeonblog' ),
			'description' => __( 'Check to show the date, category, tags etc on blog page.', 'aeonblog' ),
			'section'     => 'aeonblog_blog_section',
			'type'        => 'checkbox',
		)
	);

	/*Featured Image*/
	$wp_customize->add_setting(
		'aeonblog-blog-image',
		array(
			'capability'        => 'edit_theme_options',
			'transport'         => 'refresh',
			'default'           => 1,
			'sanitize_callback' => 'aeonblog_sanitize_checkbox',
		)
	);

	$wp_customize->add_control(
		'aeonblog-blog-image',
		array(
			'label'       => __( 'Featured Image', 'aeonblog' ),
			'description' => __( 'Check to show the featured Image.', 'aeonblog' ),
			'section'     => 'aeonblog_blog_section',
			'type'        => 'checkbox',
		)
	);

	/*Full Image*/
	$wp_customize->add_setting(
		'aeonblog-blog-full-image',
		array(
			'capability'        => 'edit_theme_options',
			'transport'         => 'refresh',
			'default'           => 0,
			'sanitize_callback' => 'aeonblog_sanitize_checkbox',
		)
	);

	$wp_customize->add_control(
		'aeonblog-blog-full-image',
		array(
			'label'       => __( 'Large Image', 'aeonblog' ),
			'description' => __( 'Check to make the featured image larger.', 'aeonblog' ),
			'section'     => 'aeonblog_blog_section',
			'type'        => 'checkbox',
		)
	);

	/*Excerpt Length*/
	$wp_customize->add_setting(
		'aeonblog-blog-excerpt',
		array(
			'capability'        => 'edit_theme_options',
			'transport'         => 'refresh',
			'default'           => 45,
			'sanitize_callback' => 'absint',
		)
	);

	$wp_customize->add_control(
		'aeonblog-blog-excerpt',
		array(
			'label'       => __( 'Excerpt Length', 'aeonblog' ),
			'description' => __( 'Enter the length of the excerpt.', 'aeonblog' ),
			'section'     => 'aeonblog_blog_section',
			'type'        => 'number',
			'input_attrs' => array(
				'min'  => -1,
				'step' => 1,
			),
		)
	);

	/*Typography Options */
	$wp_customize->add_section(
		'aeonblog_typography_section',
		array(
			'title' => __( 'Typography Options', 'aeonblog' ),
			'panel' => 'aeonblog_panel',
		)
	);

	/*Font Size*/
	$wp_customize->add_setting(
		'aeonblog-font-size',
		array(
			'default'           => 18,
			'transport'         => 'refresh',
			'sanitize_callback' => 'aeonblog_sanitize_number',
		)
	);

	$wp_customize->add_control(
		'aeonblog-font-size',
		array(
			'label'       => __( 'Font Size', 'aeonblog' ),
			'section'     => 'aeonblog_typography_section',
			'type'        => 'number',
			'description' => __( 'Increase/Decrease the base font size.', 'aeonblog' ),
			'input_attrs' => array(
				'min'  => 14,
				'step' => 1,
			),
		)
	);

	/*Line Height */
	$wp_customize->add_setting(
		'aeonblog-font-line-height',
		array(
			'default'           => 2,
			'transport'         => 'refresh',
			'sanitize_callback' => 'aeonblog_sanitize_number',
		)
	);

	$wp_customize->add_control(
		'aeonblog-font-line-height',
		array(
			'label'       => __( 'Line Height', 'aeonblog' ),
			'section'     => 'aeonblog_typography_section',
			'type'        => 'number',
			'description' => __( 'Increase/Decrease Line Height.', 'aeonblog' ),
			'input_attrs' => array(
				'min'  => '0',
				'step' => '0.1',
			),
		)
	);

	/*Letter Spacing */
	$wp_customize->add_setting(
		'aeonblog-letter-spacing',
		array(
			'default'           => 0,
			'transport'         => 'refresh',
			'sanitize_callback' => 'aeonblog_sanitize_number',
		)
	);

	$wp_customize->add_control(
		'aeonblog-letter-spacing',
		array(
			'label'       => __( 'Letter Spacing', 'aeonblog' ),
			'section'     => 'aeonblog_typography_section',
			'type'        => 'number',
			'description' => __( 'Increase/Decrease Letter Spacing.', 'aeonblog' ),
			'input_attrs' => array(
				'min'  => '-20',
				'max'  => '4',
				'step' => '1',
			),
		)
	);

	/*Footer*/
	$wp_customize->add_section(
		'aeonblog_footer_section',
		array(
			'capability'     => 'edit_theme_options',
			'theme_supports' => '',
			'title'          => __( 'Footer Options', 'aeonblog' ),
			'panel'          => 'aeonblog_panel',
		)
	);

	/*Copyright Text*/
	$wp_customize->add_setting(
		'aeonblog-copyright-text',
		array(
			'capability'        => 'edit_theme_options',
			'transport'         => 'refresh',
			'default'           => esc_html__( 'All Rights Reserved', 'aeonblog' ),
			'sanitize_callback' => 'sanitize_text_field',
		)
	);

	$wp_customize->add_control(
		'aeonblog-copyright-text',
		array(
			'label'       => __( 'Copyright Text', 'aeonblog' ),
			'description' => __( 'Enter your own copyright text.', 'aeonblog' ),
			'section'     => 'aeonblog_footer_section',
			'type'        => 'text',
		)
	);

	/*Go to Top*/
	$wp_customize->add_setting(
		'aeonblog-go-to-top',
		array(
			'capability'        => 'edit_theme_options',
			'transport'         => 'refresh',
			'default'           => 1,
			'sanitize_callback' => 'aeonblog_sanitize_checkbox',
		)
	);

	$wp_customize->add_control(
		'aeonblog-go-to-top',
		array(
			'label'       => __( 'Go To Top', 'aeonblog' ),
			'description' => __( 'Enable/Disable go to top in the footer.', 'aeonblog' ),
			'section'     => 'aeonblog_footer_section',
			'type'        => 'checkbox',
		)
	);

	/*Extras*/
	$wp_customize->add_section(
		'aeonblog_extra_section',
		array(
			'capability'     => 'edit_theme_options',
			'theme_supports' => '',
			'title'          => __( 'Extra Options', 'aeonblog' ),
			'panel'          => 'aeonblog_panel',
		)
	);

	/*Breadcrumb Options*/
	$wp_customize->add_setting(
		'aeonblog-breadcrumb-option',
		array(
			'capability'        => 'edit_theme_options',
			'transport'         => 'refresh',
			'default'           => 1,
			'sanitize_callback' => 'aeonblog_sanitize_checkbox',
		)
	);

	$wp_customize->add_control(
		'aeonblog-breadcrumb-option',
		array(
			'label'       => __( 'Breadcrumb Option', 'aeonblog' ),
			'description' => __( 'Show/Hide breadcrumbs.', 'aeonblog' ),
			'section'     => 'aeonblog_extra_section',
			'type'        => 'checkbox',
		)
	);

	/*Pagination Options*/
	$wp_customize->add_setting(
		'aeonblog-pagination-type',
		array(
			'capability'        => 'edit_theme_options',
			'default'           => 'numeric',
			'sanitize_callback' => 'aeonblog_sanitize_select',
		)
	);

	$wp_customize->add_control(
		'aeonblog-pagination-type',
		array(
			'choices'     => array(
				'default' => __( 'Next and Previous', 'aeonblog' ),
				'numeric' => __( 'Numeric', 'aeonblog' ),
			),
			'label'       => __( 'Pagination Option', 'aeonblog' ),
			'description' => __( 'Select the pagination type.', 'aeonblog' ),
			'section'     => 'aeonblog_extra_section',
			'type'        => 'select',
		)
	);

	/*Related Post Options*/
	$wp_customize->add_setting(
		'aeonblog-related-post',
		array(
			'capability'        => 'edit_theme_options',
			'transport'         => 'refresh',
			'default'           => 1,
			'sanitize_callback' => 'aeonblog_sanitize_checkbox',
		)
	);

	$wp_customize->add_control(
		'aeonblog-related-post',
		array(
			'label'       => __( 'Related Posts', 'aeonblog' ),
			'description' => __( 'Enable related posts below the post content.', 'aeonblog' ),
			'section'     => 'aeonblog_extra_section',
			'type'        => 'checkbox',
		)
	);

	require get_template_directory() . '/inc/customizer-about.php';
}
add_action( 'customize_register', 'aeonblog_customize_register' );

/**
 * Render the site title for the selective refresh partial.
 *
 * @return void
 */
function aeonblog_customize_partial_blogname() {
	bloginfo( 'name' );
}

/**
 * Render the site tagline for the selective refresh partial.
 *
 * @return void
 */
function aeonblog_customize_partial_blogdescription() {
	bloginfo( 'description' );
}

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function aeonblog_customize_preview_js() {
	wp_enqueue_script( 'aeonblog-customizer', get_template_directory_uri() . '/js/customizer.js', array( 'customize-preview' ), '20151215', true );
}
add_action( 'customize_preview_init', 'aeonblog_customize_preview_js' );
