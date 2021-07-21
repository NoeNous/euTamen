<?php
/**
 * About section customizer options.
 *
 * @package   AeonBlog
 * @author    AeonWP <info@aeonwp.com>
 * @copyright Copyright (c) 2019, AeonWP
 * @link      https://aeonwp.com/aeonblog
 * @license   http://www.gnu.org/licenses/gpl-2.0.html
 */

$wp_customize->add_section(
	'aeonblog_about',
	array(
		'title' => __( 'About Section', 'aeonblog' ),
		'panel' => 'aeonblog_panel',
	)
);

$wp_customize->selective_refresh->add_partial(
	'aeonblog-enable-about',
	array(
		'selector'        => '.about-me',
		'render_callback' => 'aeonblog_about_user',
	)
);

$wp_customize->add_setting(
	'aeonblog-enable-about',
	array(
		'sanitize_callback' => 'aeonblog_sanitize_checkbox',
	)
);

$wp_customize->add_control(
	'aeonblog-enable-about',
	array(
		'type'        => 'checkbox',
		'label'       => __( 'Check this box to enable the About section.', 'aeonblog' ),
		'description' => __( 'This section is displayed at the top of the sidebar on the homepage. It shows the users gravatar and Biographical Info. The content is generated from the users settings.', 'aeonblog' ),
		'section'     => 'aeonblog_about',
	)
);

// Create a list of users.
$users  = get_users();
$output = array();
foreach ( (array) $users as $user ) {
	$output[ $user->ID ] = $user->display_name;
}

$wp_customize->add_setting(
	'aeonblog_about_user',
	array(
		'sanitize_callback' => 'aeonblog_sanitize_select',
	)
);

$wp_customize->add_control(
	'aeonblog_about_user',
	array(
		'type'    => 'select',
		'label'   => __( 'Select which user to feature in the About section', 'aeonblog' ),
		'section' => 'aeonblog_about',
		'choices' => $output,
	)
);

$wp_customize->add_setting(
	'aeonblog-about-gravatar',
	array(
		'sanitize_callback' => 'aeonblog_sanitize_select',
		'default'           => 'circle',
	)
);

$wp_customize->add_control(
	'aeonblog-about-gravatar',
	array(
		'type'    => 'select',
		'label'   => __( 'Select Gravatar style', 'aeonblog' ),
		'section' => 'aeonblog_about',
		'choices' => array(
			'circle' => __( 'Circle (Default)', 'aeonblog' ),
			'square' => __( 'Square', 'aeonblog' ),
			'hide'   => __( 'Hide Gravatar', 'aeonblog' ),
		),
	)
);
