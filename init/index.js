const mongoose = require("mongoose");
const listing = require("../models/listing.js");
const initData=require("./data.js");
require("dotenv").config({path: "../.env"});


main().then(() => {
    console.log("Successfully connected");

})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.ATLASDB_URL || "mongodb://127.0.0.1:27017/wanderlust");

}

const initDB= async()=>{
await listing.deleteMany({});
initData.data=initData.data.map((obj) => ({
    ...obj,
    owner:"6a259f92ea0eea2b4758eed1",
}));

await listing.insertMany(initData.data);
console.log("data was intialised");


}


initDB();
