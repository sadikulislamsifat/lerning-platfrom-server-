const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const subjects = require('./subject.json');
const blogItems = require('./blog.json');

app.get('/', (req, res) =>{
    res.send("API Running")
});
 
app.listen(port, () => {
    console.log("Category running on port", port)
});
app.get('/subjects',  (req, res) => {
    res.send(subjects)
});

app.get('/blog', (req, res) => {
    res.send(blogItems)
})
