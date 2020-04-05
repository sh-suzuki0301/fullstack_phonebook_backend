const express = require("express");
const app = express();


app.use(express.json());

let persons = [
  {
    name: "Mary Hitsuji",
    number: "39-12-098765",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "08080",
    id: 2,
  },
  {
    name: "Dan Dayo",
    number: "12-34-790523",
    id: 3,
  },
];

app.get('/info', (req, res) => {
    const timestamp = new Date();

    res.send(
        `<p>Phonebook has info for ${persons.length} people</p>
        <p>${timestamp}</p>`
    );
});

app.get('/api/persons', (req, res) => {
    res.json(persons);
});

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id);
    const person = persons.find(person => person.id === id);
     if (person) {
         res.json(person);
     } else {
         res.status(404).end();
     }
});

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id);
    persons = persons.filter(p => p.id !== id);

    res.status(204).end();
});

app.post('api/persons', (req, res) => {
    let person = req.body;

    if (!person.name) {
        return res.status(400).json({ error: "name must be given" });
    }

    if (!person.number) {
        return res.status(400).json({ error: "number must be given" });
    }

    if (persons.find(p => p.name === person.name)) {
        return res.status(400).json({ error: "name must be unique" });
    }

    let randomId = Math.floor(Math.random() * 900000) + 100000;
    person = {...person, id: randomId };
    console.log(person);
    persons = persons.concat(person);

    res.json(person);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
