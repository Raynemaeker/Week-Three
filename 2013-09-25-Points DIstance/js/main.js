//my code//

var distances = [];

var pointX = prompt('What is the value of point X or blank to exit??');
var pointY = prompt('What is the value of point Y or blank to exit??');

  a = 0

for (var i = 0; i < 1; i++)

  {
  var distance = {};
  distance.pointX = pointX;
  distance.pointX = pointY;
  distance.pointX = parseInt(prompt('What is the value of point X?'));
  distance.pointY = parseInt(prompt('What is the value of point Y?'));
  distances.push(pointX, pointY);
  }

  a = Math.pow((pointX - pointY), 2);

  distance = a + a;
  console.log(distances);

  //Real Code//

  var points = [];

  for (var i = 0; i < 2; i++)

  {
    var point = {};
    point.x = parseInt(prompt('X Coordinate?'));
    point.y = parseInt(prompt('Y Coordinate?'));
    points.push(point);
  }

  a = points[0].y - points[1].y;
  b = points[0].x - points[1].x;

  var distance = Math.sqrt(a*a + b*b);