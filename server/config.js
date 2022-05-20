if (process.env.NODE_ENV != 'production') require('dotenv').load();

module.exports = {
	APPNAME: process.env.APPNAME || 'App Template',
  PORT: process.env.PORT || 3000,
  DEVMODE: (process.env.NODE_ENV != 'production'),
};
