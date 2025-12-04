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
createPlatform(100, 650, 5, 5);
createPlatform(100, 450, 5, 5);
createPlatform(80, 1, 5, 450);
createPlatform(300, 570, 5, 5);
createPlatform(320, 200, 5, 800);
createPlatform(300, 360, 5, 5);
createPlatform(100, 280, 5, 5);
createPlatform(330, 280, 5, 5);
createPlatform(400, 200, 5, 800);
createPlatform(380, 380, 5, 5);
createPlatform(330, 480, 5, 5);
createPlatform(380, 580, 5, 5);
createPlatform(330, 680, 5, 5);
createPlatform(480, 680, 1, 1);
createPlatform(580, 580, 1, 1);
createPlatform(700, 200, 5, 800);
createPlatform(680, 480, 1, 1);
createPlatform(580, 380, 1, 1);
createPlatform(680, 280, 1, 1);
createPlatform(780, 280, 1, 1);
createPlatform(900, 380, 1, 1);
createPlatform(1000, 280, 1, 1);
createPlatform(1160, 600, 1, 1);
createPlatform(1300, 500, 1, 1);
createPlatform(1200, 400, 1, 1);
createPlatform(1300, 300, 1, 1);
createPlatform(1150, 1, 5, 350);
createPlatform(1000, 300, 5, 500);










    // TODO 3 - Create Collectables
createCollectable("steve", 360, 680);
createCollectable("steve", 300, 150);
createCollectable("steve", 1300, 100);

    
    // TODO 4 - Create Cannons
createCannon("bottom", 200, 800);
createCannon("right", 200, 2000);
createCannon("top", 1320, 1000);
    createCannon("right", 640, 2000);

    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
