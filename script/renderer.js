const electron = require('electron');
const ipcRenderer = electron.ipcRenderer;
const cfg = require('../script/config');
const u = require('../script/util');
const log = document.getElementById('log');

window.addEventListener('DOMContentLoaded', (event) => {
	if (cfg.isDev()) {
		console.log('DOMContent is loaded:', u.time2str());
		console.log('APP_NAME:', cfg.APP_NAME);
		console.log('APP_VERSION:', cfg.APP_VERSION);
	}

	document.querySelector('title').innerHTML = cfg.APP_NAME + ' ' + cfg.APP_VERSION;
	log.value = cfg.LINE + cfg.NL;
	log.value += cfg.APP_NAME + ' ' + cfg.APP_VERSION + cfg.NL;
	log.value += 'press ' + cfg.SCREEN_KEY.replace('+', ' + ') + ' to take a screenshot' + cfg.NL;
	log.value += 'press ' + cfg.QUIT_KEY.replace('+', ' + ') + ' to quit' + cfg.NL;
	log.value += 'save directory: ' + cfg.SAVE_DIR + cfg.NL;
	log.value += 'e-mail: ' + cfg.APP_EMAIL + cfg.NL;
	log.value += cfg.LINE + cfg.NL;
});

ipcRenderer.on('newline',(event, data) => {
	log.value = data + log.value;
});
