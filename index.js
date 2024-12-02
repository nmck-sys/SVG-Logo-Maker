const inquirer = require('inquirer');
const fs = require('fs');
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
        choices: ["red", "blue", "green", "yellow", "pink", "purple", "orange", "gray", "brown", "black"]
    },
];

function generateSVG(response) {
    let shape;
    if (response['logo shape'] === "square") {
        shape = Square(response['shape color']);
    } else if (response['logo shape'] === "circle") {
        shape = Circle(response['shape color']);
    } else if (response['logo shape'] === "triangle") {
        shape = Triangle(response['shape color']);
    }
    return `
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        <text x="50%" y="50%" font-size="30" fill="${response['text color']}" text-anchor="middle" alignment-baseline="central">${response.text}</text>
    </svg>
  `;
}


function enforceThree(response) {
    if (response.text.length > 3) {
        throw new Error('Please enter no more than 3 characters');
    } else {
        const svgContent = generateSVG(response); // Call generateSVG with response
        console.log(`${response.text}.svg generated`);
        fs.writeFileSync(`${response.text}.svg`, svgContent); // Save the SVG to a file
    }
}

function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            enforceThree(response);
        })
}

init();


module.exports = enforceThree