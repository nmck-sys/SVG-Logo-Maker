const { Circle, Triangle, Square } = require('./lib/shapes.js');

test('Circle renders correctly', () => {
    const shape = new Circle();
    shape.setColor('blue');
    expect(shape.render()).toBe('<circle cx="150" cy="100" r="70" fill="blue" />');
  });
  
  test('Triangle renders correctly', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toBe('<polygon points="150,10 260,180 30,190" fill="blue" />');
  });
  
  test('Square renders correctly', () => {
    const shape = new Square();
    shape.setColor('blue');
    expect(shape.render()).toBe('<rect x="80" y="50" width="100" height="100" fill="blue" />');
  });