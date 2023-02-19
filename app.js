const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const path = require('path');
const linkRoute = require('./routes/linkRoute')


mongoose.connect('mongodb://localhost/newlink', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4
})


let db = mongoose.connection;

db.on("error", ()=> {console.log("error")});
db.once("open", ()=> {console.log("connected")});

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));
app.use('/', linkRoute);
app.use((req, res) =>{
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'))
})

app.get('/', (req, res) => { res.send('Hello World') });
app.listen(port, () => console.log(`Example app listening on port ${port}!`))