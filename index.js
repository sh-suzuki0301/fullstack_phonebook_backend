require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const Person = require("./models/person");

app.use(express.static("build"));
app.use(cors());
app.use(bodyParser.json());

// Login setup using morgan
// Create custom token: return POST Body
morgan.token("postBody", (req, res) => {
  if (req.method === "POST" || req.method === "PUT") {
    return JSON.stringify(req.body);
  }
});

const loggerFormat =
  ":method :url :status :res[content-length] - :response-time ms :postBody";

app.use(morgan(loggerFormat));

app.get("/info", (req, res) => {
  const timestamp = new Date();
  Person.find({}).then(persons => {
    res.send(
      `<p>Phonebook has info for ${persons.length} people</p>
          <p>${timestamp}</p>`
    );
  });
});

app.get("/api/persons", (req, res) => {
  Person.find({}).then(persons => {
    res.json(persons.map(p => p.toJSON()));
  });
});

app.get("/api/persons/:id", (req, res, next) => {
  Person.findById(req.params.id)
    .then(p => {
      if (p) {
      res.json(p.toJSON());
      console.log(p.toJSON());
    } else {
      res.status(404).end();
    }
  })
  .catch(error => next(error));
});

app.post("/api/persons", (req, res, next) => {
  let body = req.body;
  if (!body.name) {
    return res.status(400).json({ error: "name must be given" });
  }

  if (!body.number) {
    return res.status(400).json({ error: "number must be given" });
  }

  const person = new Person({ name: body.name, number: body.number });
  person
    .save()
    .then(savedPerson => {
    res.json(savedPerson.toJSON());
  })
    .catch(error => next(error));
});

app.delete("/api/persons/:id", (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end();
    })
    .catch(error => next(error));
});

app.put("/api/persons/:id", (req, res, next) => {
  const body = req.body;
  const person = { name: body.name, number: body.number };
  Person.findByIdAndUpdate(req.params.id, person, { new: true })
    .then(updatedPerson => {
      res.json(updatedPerson.toJSON());
    })
    .catch(error => next(error));
});

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const errorHandler = (error, req, res, next) => {
  console.log(error.message);
  if (error.name === "CastError" && error.kind === "ObjectId") {
    return res.status(404).send({ error: "malformatted id" });
  }
  next(error);
};

app.use(errorHandler);

const { PORT } = process.env
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
