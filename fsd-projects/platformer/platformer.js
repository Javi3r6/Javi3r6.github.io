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

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(500, 0, 20, 600);

createPlatform(350, 200, 20, 800);

createPlatform(250, 630, 100, 10, "lime");

createPlatform(100, 1, 20, 600);

createPlatform(100, 500, 100, 10, "lime");

createPlatform(250, 375, 100, 10, "lime");

createPlatform(100, 250, 100, 10, "lime");

createPlatform(500, 700, 100, 50, "lime");

createPlatform(600, 600, 100, 10, "lime");

createPlatform(800, 550, 100, 10, "lime");

createPlatform(600, 450, 100, 10, "lime");

createPlatform(800, 350, 100, 10, "lime");

createPlatform(600, 250, 100, 10, "lime");

createPlatform(950, 600, 100, 10, "lime");

createPlatform(1100, 650, 100, 10, "lime");

createPlatform(800, 600, 20, 800);
    // TODO 3 - Create Collectables
createCollectable("steve", 540, 50);
createCollectable("steve", 300, 700,);
createCollectable("steve", 1300, 700);

    
    // TODO 4 - Create Cannons
createCannon("top", 280, 800);
createCannon("right", 300, 2000);
createCannon("top", 800, 800);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
