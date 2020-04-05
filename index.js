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
    res.json(person);
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
