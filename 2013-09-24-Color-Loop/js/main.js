var colors = []

var response = prompt('Enter a color or quit:');

while(response != 'quit')
{
  colors.push(response)
  response = prompt('Enter a color or quit:');
}


//For Loop//

for(var count = 0; count < colors.length; count++)
{
  console.log("you typed in color: " + colors[count]);

  debugger;

//Counts from 2 to 0//
  for(var loop = colors.length; loop > -1; loop--)
  {
    console.log("you typed in color: " + colors[loop]);
  }

