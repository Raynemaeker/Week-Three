var menu_items = [];

var response = prompt('Would you like to add a menu item?');

while(response == 'yes')
{
  var menu_item = {};
  var ingredients = [];
  menu_item.name = prompt('What is the name of the item?');
  menu_item.type = prompt('What kind of item is it?');
  menu_item.cal = parseInt(prompt('How many calories are in this item?'));
  menu_item.cost = parseFloat(prompt('How much will this item cost?'));
  var response1 = parseInt(prompt('How many ingredients are in this dish?'));
    for(var i = 0; i < response1; i++)
    {
      var ingredient = prompt('What is the name of the ingredient?');
      ingredients.push(ingredient);
    }
  menu_item.ingredient = ingredients;
  menu_items.push(menu_item);
  response = prompt('Would you like to input another menu item?');
}

console.log(menu_items);
