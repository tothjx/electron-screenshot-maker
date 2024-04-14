const electron = require('electron');
const {app, globalShortcut} = electron;
const fs = require('fs');
const scr = require('screenshot-desktop');
const cfg = require('./script/config');
const u = require('./script/util');
const WindowManager = require('./script/WindowManager');
const wm = new WindowManager({
	resizable: false
});

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = true;

let mainWindow;

app.on('ready', function(){
	mainWindow = wm.createWindow();
	wm.renderContent(mainWindow, 'main');

	// show window
	mainWindow.once('ready-to-show', () => {
		mainWindow.show();
		checkSaveDir();

		globalShortcut.register(cfg.SCREEN_KEY, () => {
			makeScreenshot();
		});

		globalShortcut.register(cfg.QUIT_KEY, () => {
			app.quit();
		});
	});

	// close app
	mainWindow.on('closed', function() {
		app.quit();
	});

	if (cfg.isDev()) {
		mainWindow.webContents.openDevTools();
	}
});

checkSaveDir = () => {
	if (!fs.existsSync(cfg.SAVE_DIR)){
		fs.mkdirSync(cfg.SAVE_DIR);
	}
};

makeScreenshot = () => {
	scr({format: 'png'}).then((img) => {
		// get time string
		const ts = u.time2str();

		// get path
		const path = 'c:\\file\\' + u.time2str('filename') + '.png';

		// save file
		scr({
			format: 'png',
			filename: path, 
		});

		// send new line to log
		mainWindow.webContents.send('newline', ts + ' => ' + path + ' saved' + cfg.NL);
	}).catch((error) => {
		console.log(error);
	});
};
