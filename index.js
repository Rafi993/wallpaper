'use strict';

const osLib = {
		'darwin' : require('./lib/macos');
		'win32' : require('./lib/win');
		'default': require('./lib/linux');
	};

module.exports	osLib[process.platform] || osLib['default'];
