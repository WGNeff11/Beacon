/* eslint-env node */
module.exports = {
	port: 8081,
	db:  {
		database: process.env.DB_NAME || 'postgres',
		username: process.env.DB_USER || 'postgres',
		password: process.env.DB_PASS || 'steaksandwich',
		options: {
			dialect: process.env.DIALECT || 'postgres',
			host: process.env.HOST || '35.199.36.16',
			storage: './tabtracker.sqlite'
		}
	}
}