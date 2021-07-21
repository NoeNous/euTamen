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

if ( ! function_exists( 'aeonblog_font_customize_register' ) ) {
	/**
	 * Add fotn settings and controls for the Theme Customizer.
	 *
	 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
	 */
	function aeonblog_font_customize_register( $wp_customize ) {

		$wp_customize->add_setting(
			'aeonblog_title_font',
			array(
				'default'           => 'Josefin Sans',
				'sanitize_callback' => 'aeonblog_sanitize_select',
			)
		);

		$wp_customize->add_control(
			new WP_Customize_Control(
				$wp_customize,
				'aeonblog_title_font',
				array(
					'label'    => __( 'Choose a font for the Site title', 'aeonblog' ),
					'section'  => 'aeonblog_typography_section',
					'type'     => 'select',
					'priority' => 1,
					'choices'  => array(
						'Noto Serif'         => __( 'Noto Serif', 'aeonblog' ),
						'Alegreya'           => __( 'Alegreya', 'aeonblog' ),
						'Alegreya Sans SC'   => __( 'Alegreya Sans SC', 'aeonblog' ),
						'Arimo'              => __( 'Arimo', 'aeonblog' ),
						'Bree Serif'         => __( 'Bree Serif', 'aeonblog' ),
						'Cherry Swash'       => __( 'Cherry Swash', 'aeonblog' ),
						'Cinzel'             => __( 'Cinzel', 'aeonblog' ),
						'Exo 2'              => __( 'Exo 2', 'aeonblog' ),
						'Fondamento'         => __( 'Fondamento', 'aeonblog' ),
						'Gentium Book Basic' => __( 'Gentium Book Basic', 'aeonblog' ),
						'Grand Hotel'        => __( 'Grand Hotel', 'aeonblog' ),
						'Hind'               => __( 'Hind', 'aeonblog' ),
						'Josefin Sans'       => __( 'Josefin Sans', 'aeonblog' ),
						'Karla'              => __( 'Karla', 'aeonblog' ),
						'La Belle Aurore'    => __( 'La Belle Aurore', 'aeonblog' ),
						'Lato'               => __( 'Lato', 'aeonblog' ),
						'Libre Baskerville'  => __( 'Libre Baskerville', 'aeonblog' ),
						'Lobster Two'        => __( 'Lobster Two', 'aeonblog' ),
						'Lora'               => __( 'Lora', 'aeonblog' ),
						'Merriweather'       => __( 'Merriweather', 'aeonblog' ),
						'Montserrat'         => __( 'Montserrat', 'aeonblog' ),
						'Muli'               => __( 'Muli', 'aeonblog' ),
						'Noticia Text'       => __( 'Noticia Text', 'aeonblog' ),
						'Noto Sans'          => __( 'Noto Sans', 'aeonblog' ),
						'Open Sans'          => __( 'Open Sans', 'aeonblog' ),
						'Oswald'             => __( 'Oswald', 'aeonblog' ),
						'Pacifico'           => __( 'Pacifico', 'aeonblog' ),
						'Playfair Display'   => __( 'Playfair Display', 'aeonblog' ),
						'Quando'             => __( 'Quando', 'aeonblog' ),
						'Raleway'            => __( 'Raleway', 'aeonblog' ),
						'Roboto Slab'        => __( 'Roboto Slab', 'aeonblog' ),
						'Sorts Mill Goudy'   => __( 'Sorts Mill Goudy', 'aeonblog' ),
						'Tangerine'          => __( 'Tangerine', 'aeonblog' ),
						'Ubuntu'             => __( 'Ubuntu', 'aeonblog' ),
						'Vollkorn'           => __( 'Vollkorn', 'aeonblog' ),
					),
				)
			)
		);

		$wp_customize->add_setting(
			'aeonblog_body_font',
			array(
				'default'           => 'Open Sans',
				'sanitize_callback' => 'aeonblog_sanitize_select',

			)
		);

		$wp_customize->add_control(
			new WP_Customize_Control(
				$wp_customize,
				'aeonblog_body_font',
				array(
					'label'    => __( 'Choose a font for the body text', 'aeonblog' ),
					'section'  => 'aeonblog_typography_section',
					'type'     => 'select',
					'priority' => 2,
					'choices'  => array(
						'Noto Serif'         => __( 'Noto Serif', 'aeonblog' ),
						'Alegreya'           => __( 'Alegreya', 'aeonblog' ),
						'Alegreya Sans SC'   => __( 'Alegreya Sans SC', 'aeonblog' ),
						'Arimo'              => __( 'Arimo', 'aeonblog' ),
						'Exo 2'              => __( 'Exo 2', 'aeonblog' ),
						'Gentium Book Basic' => __( 'Gentium Book Basic', 'aeonblog' ),
						'Hind'               => __( 'Hind', 'aeonblog' ),
						'Josefin Sans'       => __( 'Josefin Sans', 'aeonblog' ),
						'Karla'              => __( 'Karla', 'aeonblog' ),
						'Lato'               => __( 'Lato', 'aeonblog' ),
						'Libre Baskerville'  => __( 'Libre Baskerville', 'aeonblog' ),
						'Lora'               => __( 'Lora', 'aeonblog' ),
						'Merriweather'       => __( 'Merriweather', 'aeonblog' ),
						'Montserrat'         => __( 'Montserrat', 'aeonblog' ),
						'Muli'               => __( 'Muli', 'aeonblog' ),
						'Noticia Text'       => __( 'Noticia Text', 'aeonblog' ),
						'Noto Sans'          => __( 'Noto Sans', 'aeonblog' ),
						'Old Standard TT'    => __( 'Old Standard TT', 'aeonblog' ),
						'Open Sans'          => __( 'Open Sans', 'aeonblog' ),
						'Oswald'             => __( 'Oswald', 'aeonblog' ),
						'Raleway'            => __( 'Raleway', 'aeonblog' ),
						'Roboto Slab'        => __( 'Roboto Slab', 'aeonblog' ),
						'Ubuntu'             => __( 'Ubuntu', 'aeonblog' ),
						'Vollkorn'           => __( 'Vollkorn', 'aeonblog' ),
					),
				)
			)
		);
	}
}
add_action( 'customize_register', 'aeonblog_font_customize_register' );

/**
 * Enqueue the list of fonts.
 */
function aeonblog_customizer_fonts() {
	wp_enqueue_style( 'aeonblog_customizer_fonts', 'https://fonts.googleapis.com/css?family=Alegreya:400,700|Alegreya+Sans+SC:400,700|Arimo:400,700|Bree+Serif|Cherry+Swash:400,700|Cinzel:400,700|Exo+2:400,700|Fondamento|Gentium+Book+Basic:400,700|Grand+Hotel|Hind:400,700|Josefin+Sans:400,700|Karla:400,700|La+Belle+Aurore|Lato:400,700|Libre+Baskerville:400,700|Lobster+Two:400,700|Lora:400,700|Merriweather:400,700|Montserrat:400,700|Muli:400,700|Noticia+Text:400,700|Noto+Sans:400,700|Noto+Serif:400,700|Old+Standard+TT:400,700|Open+Sans:400,700|Oswald:400,700|Pacifico|Playfair+Display:400,700|Quando|Raleway:400,700|Roboto+Slab:400,700|Sorts+Mill+Goudy|Tangerine:400,700|Ubuntu:400,700|Vollkorn:400,700', array(), null );
}
add_action( 'customize_controls_print_styles', 'aeonblog_customizer_fonts' );
add_action( 'customize_preview_init', 'aeonblog_customizer_fonts' );

add_action(
	'customize_controls_print_styles',
	function() {
		?>
		<style>
		<?php
		$arr = array( 'Alegreya', 'Alegreya Sans SC', 'Arimo', 'Bree Serif', 'Cherry Swash', 'Cinzel', 'Exo 2', 'Fondamento', 'Gentium Book Basic', 'Grand Hotel', 'Hind', 'Josefin Sans', 'Karla', 'La Belle Aurore', 'Lato', 'Libre Baskerville', 'Lora', 'Lobster Two', 'Merriweather', 'Montserrat', 'Muli', 'Noticia Text', 'Noto Sans', 'Noto Serif', 'Old Standard TT', 'Open Sans', 'Oswald', 'Pacifico', 'Playfair Display', 'Quando', 'Raleway', 'Roboto Slab', 'Sorts Mill Goudy', 'Tangerine', 'Ubuntu', 'Vollkorn' );

		foreach ( $arr as $font ) {
			echo '.customize-control select option[value*="' . $font . '"] {font-family: ' . $font . '; font-size: 22px;}';
		}
		?>
		</style>
		<?php
	}
);
