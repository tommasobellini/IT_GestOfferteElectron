const path = require('path')
const dbPath = path.resolve(__dirname, 'data/gest_offerte_db.sqlite')
var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE)
export default db
