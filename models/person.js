const mongoose = require("mongoose");
const { MONGODB_URI } = process.env;
const uniqueValidator = require('mongoose-unique-validator');

mongoose.set("useUnifiedTopology", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

console.log("connecting to", MONGODB_URI);

mongoose
    .connect(MONGODB_URI, {useNewUrlParser: true })
    .then(result => {
        console.log("connect to MongoDB");
    })
    .catch(error => {
        console.log("error connecting to MongoDB:", error.message);
    });


const phonebookSchema = new mongoose.Schema({
    name: String,
    number: String
});
phonebookSchema.plugin(uniqueValidator);

phonebookSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject._v;
    }
});

module.exports = mongoose.model("Person", phonebookSchema);