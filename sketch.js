var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var blastImage;
var form, player, playerCount;
var allPlayers, mario1, mario2, fuels, powerCoins, obstacles;
var marios = [];

function preload() {
  backgroundImage = loadImage("./images/background.png");
  car1_img = loadImage("../images/mario.png");
  car2_img = loadImage("../images/mario.png");
  track = loadImage("../assets/track.jpg");
  fuelImage = loadImage("./images/star.png");
  powerCoinImage = loadImage("./images/coin.png");
  obstacle1Image = loadImage("./images/brick.png");
  obstacle2Image = loadImage("./images/special.png");
  lifeImage = loadImage("./assets/life.png");
  blastImage = loadImage("./assets/blast.png");
  marioImage = loadAnimation("./images/mario.png", "./images/mario1.png");
  brick = loadImage("./images/brick.png");
  special = loadImage("./images/special.png");
  star = loadImage("./images/star.png");
  flag = loadImage("./images/flag.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background("black");
  
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
