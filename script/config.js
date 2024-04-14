const pckg = require('../package.json');

module.exports = {
	/*
	########################################
	# APPLICATION CONFIG
	########################################
	*/
	APP_ENV: 'prod', // dev | prod
	APP_NAME: pckg.name,
	APP_AUTHOR: pckg.author.name,
	APP_EMAIL: pckg.author.email,
	APP_VERSION: pckg.version,
	SAVE_DIR: 'c:\\file\\',
	SCREEN_KEY: 'Ctrl+F12',
	QUIT_KEY: 'Ctrl+Q',
	LINE: '========================================',
	NL: '\n',

	/*
	########################################
	# CONFIG FOR DEFAULT WINDOW
	########################################
	*/
	WINDOW_ICON: './img/icon.ico',
	WINDOW_WIDTH: 800,
	WINDOW_HEIGHT: 600,
	WINDOW_MIN_WIDTH: 800,
	WINDOW_MIN_HEIGHT: 600,
	WINDOW_RESIZEABLE: true,
	WINDOW_CENTER: true,
	WINDOW_FRAME: true,
	WINDOW_HIDE_MENU: true,
	HTML_FILE_MAIN: 'main',

	/*
	########################################
	# FUNCTIONS
	########################################
	*/

	/**
	 * @description environment is dev
	 * @returns bool
	 */
	isDev() {
		return (this.APP_ENV === 'dev') ? true : false;
	},
};
