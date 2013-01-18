<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'TestDB');

/** MySQL database username */
define('DB_USER', 'michael');

/** MySQL database password */
define('DB_PASSWORD', 'MPFrancis11!');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'W;504:)u$56|tg{(|A[H,^*z.h@<LvnxUrHbtZ)@4,c|B`JVt-V%Ex2B+CO Y;.T');
define('SECURE_AUTH_KEY',  '$_sD)MzM<(5:~9]4M69{]V])+c+Q|zY&(`7_+Akp=_DKIKsiw{lW4/1B0ZW?iwMH');
define('LOGGED_IN_KEY',    '[=1%s>3vzUX/ijqYy~g`-jhY[b8>89u9>q-1{)Ab^Gc75K{--&*sx{[Zj;-H[yNv');
define('NONCE_KEY',        '=YCk)3(}KV`&hRw0Gix]rVsWGIylKrSTX&$e3*S=}eZ`zIZc@<|-ylhX,||b@FmT');
define('AUTH_SALT',        '/9D-*`kAa_sOuG`BK>Wtp|M+2};<s>ncxoWAN{r}`DT1s#z#fcd<:>GsC.~-5dh^');
define('SECURE_AUTH_SALT', 'C(Z&>t+6#+$pywELJixioM^<4F -:yxthv{sJYCz[L9|O,}jxGo4?U$%fIr~Gnx$');
define('LOGGED_IN_SALT',   'q%u5+L$m(O0g|e,_x]yq40&W$N]31qKo^MZRrJ(RIQ2-<9-h</G^$v,g66+c^:kf');
define('NONCE_SALT',       ')~q{$u-vH[Y[47W 9V@[(]khhel_R/pnY,Sz=1LyMqNq=vf{m9;,He!V{b]+zwU#');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wptest_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
