$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * You won't be able to play the game while these lines are uncommented
     * Comment the lines out to remove the grid
     */

    // Loop to create vertical grid lines
    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, 0, 1, canvas.height);
    // }

    // Loop to create horizontal gride lines
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(0, i, canvas.width, 1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
    createPlatform(400, 290, 200, 20); // short but wide platform located 400 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(500, 150, 200, 40); // short but wide platform located 500 pixels from the left of the screen and 400 pixels from the top of the screen
    createPlatform(200, 400, 200, 20); // short but wide platform located 200 pixels from the left of the screen and 800 pixels from the top of the screen
    createPlatform(300, 500, 200, 30); // short but wide platform located 300 pixels from the left of the screen and 200 pixels from the top of the screen
    createPlatform(600, 600, 200, 20); // short but wide platform located 600 pixels from the left of the screen and 700 pixels from the top of the screen



    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("steve", 500, 300, 20); // creates a "steve" collectible at the coordinates (500, 300), falling with a high gravity of 10, and bouncing with 50% bounce
    createCollectable("grace", 500, 300); // creates a "grace" collectible at the coordinates (500, 300), falling with default gravity and bouncing with default bounce %
    createCollectable("max", 200, 750); // creates a "max" collectible at the coordinates (200. 750). falling with a low gravity of -5 and bouncing with default bounce %




    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon("left", 400, 800); // cannon on left wall, 400px down, shooting once per second
    createCannon("right", 490, 800); // cannon on right wall, 490px down, shooting twice per second
    createCannon("left", 750, 750); // cannon on left wall, 750px down, shooting thrice per second
    createCannon("right", 100, 150); // cannon on right wall, 50px down, shooting once per second




    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
