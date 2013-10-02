function area (l, w)
{
	return l * w;
}

const PRICE_PER_SQFT = 250;
const PRICE_PER_WINDOW = 250;

var house = {}; //Object

house.number_of_rooms = parseInt(prompt('Number of Rooms?'));
house.number_of_windows = 0;
house.area = 0;
house.rooms = [];  //Array // var rooms change to house.rooms


for(var i=0; i < house.number_of_rooms; i++)
{
	var room = {};
	room.name = prompt('Name?');
	room.windows = parseInt(prompt('Number of Windows?'));
	room.length = parseInt(prompt('Length?'));
	room.width= parseInt(prompt('Width?'));
	room.area = area(room.length, room.width);
	house.area += room.area;
	house.rooms.push(push);
}

// house.number_of_rooms = house.rooms.length; replace house.number_of_rooms = parseInt(prompt('Number of Rooms?'));

// for(i = 0; i < house.number_of_rooms; i++) replaced: house.number_of_rooms = parseInt(prompt('Number of Rooms?'));

house.area_cost = house.area * PRICE_PER_SQFT
house.window_cost = house.number_of_windows * PRICE_PER_WINDOW;
house.total_cost = house.area_cost _ house.window_cost