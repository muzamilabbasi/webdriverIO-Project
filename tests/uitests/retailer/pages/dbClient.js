"use strict"
/** require */
const pg = require( "pg" )

var databases = {
    
	runQuery : ( connectionString, phone ) => {
		var results = []
		const pgClient = new pg.Client( connectionString )
		pgClient.connect()
		var query = pgClient.query("SELECT phone,code FROM lms_login WHERE phone=" + "'" + phone + "'" + "ORDER BY created_at Desc")
		var result = query.then(res => res.rows[0])
		return result
	}
}
module.exports = databases
