<?php
/**
 * The main plugin file for Better Recent Comments.
 *
 * @package   Barn2\better-recent-comments
 * @author    Barn2 Plugins <support@barn2.com>
 * @license   GPL-3.0
 * @copyright Barn2 Media Ltd
 *
 * @wordpress-plugin
 * Plugin Name:     NoeRo Ultimos comentarios modificado
 * Description:     Modificacion de better-recent-comments. This plugin provides an improved widget and shortcode to show your most recent comments. If using WPML, comments are limited to posts in the current language.
 * Version:         1.0.0
 * Author:          Noelia Acuña & Rosa Bitxi
 * Text Domain:     better-recent-comments
 * Domain Path:     /languages
 *
 * Copyright:       Barn2 Media Ltd
 * License:         GNU General Public License v3.0
 * License URI:     https://www.gnu.org/licenses/gpl.html
 */

namespace Barn2\Plugin\Better_Recent_Comments;

// Prevent direct file access
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

const PLUGIN_VERSION = '1.1.5';
const PLUGIN_FILE    = __FILE__;

// Include autoloader.
require_once __DIR__ . '/vendor/autoload.php';

/**
 * Helper function to access the shared plugin instance.
 *
 * @return Plugin The plugin instance.
 */
function better_recent_comments() {
	return Plugin_Factory::create( PLUGIN_FILE, PLUGIN_VERSION );
}

// Load the plugin
better_recent_comments()->register();
