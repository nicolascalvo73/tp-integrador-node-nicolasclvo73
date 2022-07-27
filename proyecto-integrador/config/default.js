require('dotenv').config();
const dbUser = process.env.MONGO_USER;
const dbPass = process.env.MONGO_PASS;

module.exports = {
    database:{
            host:`mongodb+srv://${dbUser}:${dbPass}@cluster0.1ctmluw.mongodb.net/?retryWrites=true&w=majority`
        }
}