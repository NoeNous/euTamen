/**
 * File aeonblog.
 * @package   AeonBlog
 * @author    AeonWP <info@aeonwp.com>
 * @copyright Copyright (c) 2019, AeonWP
 * @link      https://aeonwp.com/aeonblog
 * @license   http://www.gnu.org/licenses/gpl-2.0.html
*/
(function($) {
	"use strict";
		//Check to see if the window is top if not then display button
		jQuery(window).scroll(function($){
			if (jQuery(this).scrollTop() > 100) {
				jQuery('.go-to-top').addClass('gotop');
				jQuery('.go-to-top').fadeIn();
			} else {
				jQuery('.go-to-top').fadeOut();
			}
		});
		
		//Click event to scroll to top
		jQuery('.go-to-top').click(function($){
			jQuery('html, body').animate({scrollTop : 0},800);
			return false;
		});
	}
)(jQuery);
