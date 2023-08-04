const electron = require('electron');
const {BrowserWindow} = electron;
const fs = require('fs');
const cfg = require('./config');

/*
// sample config for window
const window_config = {
	isMainWindow: true,
	title: 'something',
	icon: './img/icon.ico',
	width: 800,
	height: 600,
	minWidth: 800,
	minHeight: 600,
	resizable: true,
	center = true,
	frame = true,
	autoHideMenuBar: true
};
*/

module.exports = class WindowManager {
	constructor(data) {
		// init
		this.win = null;
		this.isMainWindow = ('isMainWindow' in data) ? data.isMainWindow : true;
		this.title = ('title' in data) ? data.title : cfg.APP_NAME;
		this.icon = ('icon' in data) ? data.icon : cfg.WINDOW_ICON;
		this.width = ('width' in data) ? data.width : cfg.WINDOW_WIDTH;
		this.height = ('height' in data) ? data.height : cfg.WINDOW_HEIGHT;
		this.minWidth = ('minWidth' in data) ? data.minWidth : cfg.WINDOW_MIN_WIDTH;
		this.minHeight = ('minHeight' in data) ? data.minHeight : cfg.WINDOW_MIN_HEIGHT;
		this.resizable = ('resizable' in data) ? data.resizable : cfg.WINDOW_RESIZEABLE;
		this.center = ('center' in data) ? data.center : cfg.WINDOW_CENTER;
		this.frame = ('frame' in data) ? dataframe : cfg.WINDOW_FRAME;
		this.autoHideMenuBar = ('autoHideMenuBar' in data) ? data.autoHideMenuBar : cfg.WINDOW_HIDE_MENU;
	}

	createWindow() {
		return this.win = new BrowserWindow({
			title: this.title,
			icon: this.icon,
			width: this.width,
			height: this.height,
			minWidth: this.minWidth,
			minHeight: this.minHeight,
			resizable: this.resizable,
			center: this.center,
			frame: this.frame,
			autoHideMenuBar: this.autoHideMenuBar,
			show: false,
			webPreferences: {
				nodeIntegration: true,
				contextIsolation: false,
				enableRemoteModule: true,
			},
			globals: {
				title: this.title,
				author: cfg.APP_AUTHOR,
				version: cfg.APP_VERSION,
				email: cfg.APP_EMAIL
			}
		});
	}

	renderContent(win, file) {
		let filePath = `${__dirname}/../html/${file}.html`
		const isFileExists = fs.existsSync(filePath);

		if (file === '' || file === undefined || file === null || !isFileExists) {
			if (cfg.isDev()) {
				console.log('file not exists:', file);
			}
			filePath = `${__dirname}/../html/${cfg.HTML_FILE_MAIN}.html`
		}

		return win.loadURL(`file://${filePath}`);
	}

	// end
}
