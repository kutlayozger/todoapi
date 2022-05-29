const 
    express = require("express"),
    api = express.Router()

//TODO

api.post('/signUp', (req, res) => {
  res.json({success: true});
});

api.post('/login', (req, res) => {
    res.json({success: true});
});
api.get('/refreshAccessToken', (req, res) => {
    res.json({success: true});
});
api.post('/createTodo', (req, res) => {
    res.json({success: true});
});
api.post('/updateTodo', (req, res) => {
    res.json({success: true});
});

api.delete('/deleteTodo', (req, res) => {
    res.json({success: true});
});

api.get('/listTodos', (req, res) => {
    res.json({success: true});
});


module.exports = api;