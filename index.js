
class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    get countSides() {
      return this.sides.length;
    }
  
    get perimeter() {
      return this.sides.reduce((sum, side) => sum + side, 0);
    }
  }
  
  
  class Triangle extends Polygon {
    constructor(sides) {
      if (sides.length !== 3) {
        throw new Error('A triangle must have 3 sides');
      }
      super(sides);
    }
  
    get isValid() {
      const [a, b, c] = this.sides;
      return (a + b > c) && (a + c > b) && (b + c > a);
    }
  }
  

  class Square extends Polygon {
    constructor(sides) {
      if (sides.length !== 4) {
        throw new Error('A square must have 4 sides');
      }
      super(sides);
    }
  
    get isValid() {
      return this.sides.every(side => side === this.sides[0]);
    }
  
    get area() {
      if (!this.isValid) {
        throw new Error('Not a valid square');
      }
      return this.sides[0] ** 2;
    }
  }
  
 
  const triangle = new Triangle([3, 4, 5]);
  console.log(triangle.countSides);  
  console.log(triangle.perimeter);   
  console.log(triangle.isValid);     
  
  const square = new Square([4, 4, 4, 4]);
  console.log(square.countSides);  
  console.log(square.perimeter);     
  console.log(square.isValid);       
  console.log(square.area);        
  