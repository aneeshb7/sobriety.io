import { MongoClient } from 'mongodb';
import * as dotenv from "dotenv";
dotenv.config();

var _db;

export default {
    connectToDatabase: function(callback) {
        MongoClient.connect( 
            process.env.DATABASE_URI, 
            {useNewUrlParser: true, useUnifiedTopology: true}, 
            function(err, client) {
                _db  = client;
                return callback(err);
            }
        );
    },

    getClient: function() {
        return _db
    },

    getLocationDb: function() {
        return _db.db("locations");
    },

    getUsersDb: function() {
        return _db.db("users");
    },
}