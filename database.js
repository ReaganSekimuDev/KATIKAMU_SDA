const { MongoClient } = require('mongodb')

let uri = `mongodb+srv://reagansekimu_db_user:atlas1234@cluster0.rrf9cot.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
let dbConnection
module.exports = {
    connectToDB: (cb) => {
        MongoClient.connect(uri)
        .then(client => {
            dbConnection = client.db();
            return cb()
        })
        .catch(err => {
            console.log(`connecting To DB_Oops: ${err}`)
            return cb()
        })
    },
    getDBConnection: () => dbConnection
}