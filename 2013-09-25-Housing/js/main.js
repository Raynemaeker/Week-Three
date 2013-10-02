function volume(diameter, depth)
{
  return (Math.pow((diameter / 2), 2) * Math.PI) * depth;
}

function cubic_feet_to_gallons(cubic_feet)
{
  return cubic_feet * 7.48;
}

rooms = [];

var n = parseInt(prompt('How many rooms do you want?'));

for (var i = 0; i < n; i++)

  {
    var room = {};
    room.name = prompt('What is the name of the room?');
    room.length = parseInt(prompt('How many windows in' + " " + room.name + '?'));
    room.width = parseInt(prompt('How many length in each room' + " " + room.name + '?'));
    room.window = parseInt(prompt('How many width in each room' + " " + room.name + '?'));
    rooms.push(room);
  }

var windows_number = 0;
var total_sqr = 0;


for (var i = 0; i < n; i++)

{   total_sqr += (rooms[i].length * rooms[i].width);   windows_number +=
rooms[i].window; }

var window_cost = windows_number * 250
var total_room_cost = total_sqr * 200
var house_cost = window_cost + total_room_cost

console.log('You have' + " " +  n + " " + 'rooms');
console.log('You have'+ " " + windows_number + " " + 'total of windows. Which will cost $' + window_cost + '.');
console.log('You have' + " " + total_sqr + " " + 'in your house. Which will cost $' + total_room_cost + '.');
console.log('This total cost of your house is $' +  house_cost + '.' );

var response = prompt('Would you also like to build a pool?')

if(response == "yes")
{
  for(i = 0; i < 1; i++)
  {
    diameter = parseInt(prompt('What will the diameter of the pool be?'));
    depth = parseInt(prompt('How deep will the pool be?'));
  }
}
else
  console.log('The house will cost $' + house_cost + ' to build.');

pool_vol = volume(30, 9);
pool_gal = cubic_feet_to_gallons(pool_vol);
pool_cost = item_cost(pool_gal, .25);
total_cost = house_cost + pool_cost;


console.log('Building a pool will cost $' + pool_cost + '. Together with the house, the total cost will be $' + t


