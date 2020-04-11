const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];
const name = process.argv[3];
const number = process.argv[4];

const url = `mongodb+srv://sh-suzuki0301:${password}@cluster0-t1vmr.mongodb.net/phonebook?retryWrites=true&w=majority`;

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

const phonebookSchema = new mongoose.Schema({
    name: String,
    number: String
});

const Person = mongoose.model("Person", phonebookSchema);

if (process.argv.length === 3 && password) {
    Person.find({}).then(persons => {
        console.log("phonebook");
        persons.map(p => {
            console.log(p.name, p.number);
        });
        mongoose.connection.close();
    });
}

if (name && number) {
    const person = new Person({ name, number });

    person.save().then(response => {
        console.log(`added ${person.name} ${person.number} to phonebook`);
    });
}