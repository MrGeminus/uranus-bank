const mongoose = require('mongoose');

const databaseConntection = async (callback) => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}`);
        callback();
    } catch (error) {
        console.log(error);
    }
}

module.exports = databaseConntection;