const Shape = (color) => ({
    color,
    setColor(newColor) {
        this.color = newColor;
    }
});

const Circle = (color) => {
    const shape = Shape(color);
    return {
        ...shape,
        render() {
            return `<circle cx="100" cy="100" r="70" fill="${this.color}" />`;
        }
    };
};


const Triangle = (color) => {
    const shape = Shape(color);
    return {
        ...shape,
        render() {
            return `<polygon points="100,30 170,170 30,170" fill="${this.color}" />`;
        }
    };
};

const Square = (color) => {
    const shape = Shape(color);
    return {
        ...shape,
        render() {
            return `<rect x="50" y="50" width="100" height="100" fill="${this.color}" />`;
        }
    };
};

module.exports = { Circle, Triangle, Square };