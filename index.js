const inquirer = require('inquirer');
const fs = require("fs");
const { Square, Circle, Triangle } = require("./lib/shapes.js")

const questions = [
    {
        type: 'input',
        message: 'What text? (3 char max)',
        name: 'text',
    },
    {
        type: 'list',
        message: 'What color is the text?',
        name: 'text color',
        choices: ["red", "blue", "green", "yellow", "pink", "purple", "orange", "gray", "brown", "black"]
    },
    {
        type: 'list',
        message: 'What shape is the logo?',
        name: 'logo shape',
        choices: ["square", "circle", "triangle"]
    },
    {
        type: 'list',
        message: 'What color is the shape?',
        name: 'shape color',
    },
]

inquirer
.prompt(questions)
.then((answers) => {
    let shape;
    
})