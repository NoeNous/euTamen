<?php
/*This file is part of euTamen, material-design-google child theme.

All functions of this file will be loaded before of parent theme functions.
Learn more at https://codex.wordpress.org/Child_Themes.

Note: this function loads the parent stylesheet before, then child theme stylesheet
(leave it in place unless you know what you are doing.)
*/

if ( ! function_exists( 'suffice_child_enqueue_child_styles' ) ) {
	function euTamen_enqueue_child_styles() {
	    // loading parent style
	    wp_register_style(
	      'parente2-style',
	      get_template_directory_uri() . '/style.css'
	    );

	    wp_enqueue_style( 'parente2-style' );
	    // loading child style
	    wp_register_style(
	      'childe2-style',
	      get_stylesheet_directory_uri() . '/style.css'
	    );
	    wp_enqueue_style( 'childe2-style');
	 }
}
add_action( 'wp_enqueue_scripts', 'euTamen_enqueue_child_styles' );

/*Write here your own functions */
//facer email obligatorio; cando se deixa en branco que saia un erro
   function require_comment_email($fields) {
     
    if ($fields['comment_author_email'] == '')
    wp_die('Por favor, introduce un correo electrónico do IES San Clemente.');
     
    return $fields;
    }
    add_filter('preprocess_comment', 'require_comment_email');

//que envíe un email cando un comentario ten dous reportes
/**function reportar_email($fields) {
			if ($fields['dislike_count'] == 2){
				$cuerpo ="El comentario "+$comment_id+" ha sido reportado un mínimo de "+$dislike_count+" veces:\r\n ";
			
				mail("noelia.acuna@macrotest.es, rosa.castineiras@macrotest.es","Comentario reportardo en Eu tamén!",$cuerpo); 
			}
	do_action('reportar_email');
}
add_action('cld_after_ajax_process','reportar_email');*/

