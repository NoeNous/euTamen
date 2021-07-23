<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'eutamen' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'LioF2R9~I=xF{fK1q^BgwtI/95:#sns]Dp46cR%VJ<EpO~<p-z;>UK9AW9H.)4E@' );
define( 'SECURE_AUTH_KEY',  ')P=))X^8 }(~@h5`fHEioLZ{A*WWu0mzyYMi,yaY/,|+GrU2A!,e^3Q96:H?)Hxk' );
define( 'LOGGED_IN_KEY',    '+xw%m&WTdLEUq}c/(,:X@LXDRN[R<Q^;CDLxcJ&>q%HOwva-qzw`fdjN66;:SepV' );
define( 'NONCE_KEY',        'j~#Wecp|j0m]RLK#?A<%fcd$29+#bRF+;KX,i[.@M$lLu$MQr>sRa=XE<-4:FB5Z' );
define( 'AUTH_SALT',        '6ba6r{M=hss(8>j?}#NRd?2^4AR$0P[K6qPgbY|)VbRbJNzGWA_8 ^n;vPHP}DG@' );
define( 'SECURE_AUTH_SALT', '?M-/@OVo~`&^lLcYPj^#iVMW;;j +a,k )ThEGhB&9M+:k^q1s(Fyi6Irlo`Eu_L' );
define( 'LOGGED_IN_SALT',   '7ym^sS^Ig=*TC;>rKi.I=>4T!62HH|M9e=^fMtu!kbc4{WRitHAvtVVxxKAG{NMi' );
define( 'NONCE_SALT',       'S+ [%d&WN7glCf,n?O&nVNY+>Lz |=JCmDSg~XpE3W*VO.&bm0uqdmb Tb8X{h*K' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

/** datos sobre FTP **/
define('FTP_HOST', 'localhost');
define('FTP_USER', 'daemon');
define('FTP_PASS', 'xampp');
