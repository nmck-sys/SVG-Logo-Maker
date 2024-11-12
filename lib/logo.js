function createLogo(shape, shapeColor, text, textColor) {
    return `
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        <text x="50%" y="50%" font-size="30" fill="${response['text color']}" text-anchor="middle" alignment-baseline="central">${response.text}</text>
    </svg>
  `;
}


module.exports = createLogo