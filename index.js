const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const users = [
    { id: 1, name: "Robert Downy Jr", role: "Iron Man" },
    { id: 2, name: "Chris Evan", role: "Captain America" },
    { id: 3, name: "Chris Hemsworth", role: "Thor" },
    { id: 4, name: "Tom Holland", role: "Spiderman" },
    { id: 5, name: "Mark Ruffelo", role: "Hulk" }
]

app.get('/', (req, res) => {
    res.send('hello from my noooooooooode')
})

// using query to filter

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const match = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(match);
    } else {
        res.send(users);
    }
})

// req.params return string as default so to get int we have to parse
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id)
    res.send(user);
})

// post data

app.post('/users', (req, res) => {
    const newAvenger = req.body;
    newAvenger.id = users.length + 1;
    users.push(newAvenger);
    res.send(newAvenger)
})

app.listen(port, () => {
    // cmd console log
    console.log('listening to port', port)
})