module.exports = {
	/**
	 * @description get current timestamp
	 * @param format {string} time || filename
	 * @returns {string} timestamp
	 */
	time2str(format = 'time') {
		const zeroPad = (num, places) => String(num).padStart(places, '0');
		const dt = new Date();

		let ye = dt.getFullYear();
		let mo = zeroPad((dt.getMonth() + 1), 2);
		let da = zeroPad(dt.getDate(), 2);
		let ho = zeroPad(dt.getHours(), 2);
		let mi = zeroPad(dt.getMinutes(), 2);
		let se = zeroPad(dt.getSeconds(), 2);
		let ms = zeroPad(dt.getMilliseconds(), 3);

		if (format === 'filename') {
			return [ye, mo, da].join('') + '_' + [ho, mi, se].join('') + ms;
		} else {
			return [ye, mo, da].join('-') + ' ' + [ho, mi, se].join(':') + '.' + ms;
		}
	},
};
