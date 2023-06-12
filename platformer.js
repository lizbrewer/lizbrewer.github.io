createPlatform(500, 300, 200, 20); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
createPlatform(600, 400, 200, 20); // short but wide platform located 600 pixels from the left of the screen and 400 pixels from the top of the screen
createPlatform(200, 800, 200, 20); // short but wide platform located 200 pixels from the left of the screen and 800 pixels from the top of the screen
createPlatform(700, 200, 200, 20); // short but wide platform located 700 pixels from the left of the screen and 200 pixels from the top of the screen
createPlatform(800, 700, 200, 20); // short but wide platform located 800 pixels from the left of the screen and 700 pixels from the top of the screen
createCollectable("steve", 500, 300, 20, 0.5); // creates a "steve" collectible at the coordinates (500, 300), falling with a high gravity of 20, and bouncing with 50% bounce
createCollectable("grace", 500, 300); // creates a "grace" collectible at the coordinates (500, 300), falling with default gravity and bouncing with default bounce %
createCollectable("max", 200, 750); // creates a "max" collectible at the coordinates (200. 750). falling with a high gravity of 50 and bouncing with default bounce %
createCannon("left", 600, 1000); // cannon on left wall, 600px down, shooting once per second
createCannon("right", 300, 800); // cannon on right wall, 300px down, shooting twice per second
createCannon("left", 750, 750); // cannon on left wall, 750px down, shooting thrice per second
createCannon("right", 450, 50); // cannon on right wall, 450px down, shooting once per second