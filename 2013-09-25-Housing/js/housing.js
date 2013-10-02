// function item_cost(num_items, cost_per)
// {
//   return num_items * cost_per;
// }

// function volume(diameter, depth)
// {
//   return (Math.pow((diameter / 2), 2) * Math.PI) * depth;
// }

// function cubic_feet_to_gallons(cubic_feet)
// {
//   return cubic_feet * 7.48;
// }

Code that works
// rooms = [];

// var n = parseInt(prompt('How many rooms do you want?'));

// for (var i = 0; i < n; i++)

//   {
//     var room = {};
//     room.name = prompt('What is the name of the room?');
//     room.length = parseInt(prompt('How many windows in' + " " + room.name + '?'));
//     room.width = parseInt(prompt('How many length in each room' + " " + room.name + '?'));
//     room.window = parseInt(prompt('How many width in each room' + " " + room.name + '?'));
//     rooms.push(room);
//   }

// var windows_number = 0;
// var total_sqr = 0;


// for (var i = 0; i < n; i++)

// {
//   total_sqr += (rooms[i].length * rooms[i].width);
//   windows_number += rooms[i].window;
// }

// var window_cost = windows_number * 250
// var total_room_cost = total_sqr * 200
// var house_cost = window_cost + total_room_cost

// console.log('You have' + " " +  n + " " + 'rooms');
// console.log('You have'+ " " + windows_number + " " + 'total of windows. Which will cost $' + window_cost + '.');
// console.log('You have' + " " + total_sqr + " " + 'in your house. Which will cost $' + total_room_cost + '.');
// console.log('This total cost of your house is $' +  house_cost + '.' );

rooms = [];

var response = prompt('Would you like to build a room?');

while(response == 'yes')
{
  var room = {};
  room.name = prompt('What kind of room is it?');
  room.windows = parseInt(prompt('How many windows do you want in the room?'));
  room.length = parseInt(prompt('What will be the length of the room?'));
  room.width = parseInt(prompt('What will be the width of the room?'));
  rooms.push(room);
  response = prompt('Would you like to build another room?');
}

var num_windows = 0;
var sq_ftg = 0;

for(var i = 0; i < rooms.length; i++)
{
  num_windows += rooms[i].windows;
  sq_ftg += rooms[i].length * rooms[i].width;
}

var num_rooms = rooms.length;
var window_cost = item_cost(num_windows, 250);
var area_cost = item_cost(sq_ftg, 200);
var house_cost = window_cost + area_cost;

var response1 = prompt('Would you also like to build a pool?')

if(response1 == "yes")
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

debugger;

console.log('Building a pool will cost $' + pool_cost + '. Together with the house, the total cost will be $' + total_cost + '.');