require('dotenv').config();
const dbUser = process.env.MONGO_USER;
const dbPass = process.env.MONGO_PASS;
const BASE_URL = process.env.BASE_URL;
const BUS_URL = process.env.BUS_URL;

module.exports = {     
    BUS_URL: {
        url:`${BUS_URL}`
},
    BASE_URL: {
        url:`${BASE_URL}`
},
    database:{
            host:`mongodb+srv://${dbUser}:${dbPass}@cluster0.1ctmluw.mongodb.net/?retryWrites=true&w=majority`
        }
}