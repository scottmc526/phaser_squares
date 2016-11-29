var width = 480;
var height = 320;
var game = new Phaser.Game(width, height, Phaser.AUTO, null, {preload:preload, create:create, update:update});
var cursors;
var player;
var food;
var score = 0;
var scoreText;
var speed = 175;

function preload() {
  game.load.image('player', '../assets/blue-square.png');
  game.load.image('food', '../assets/red-square.png');
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  cursors = game.input.keyboard.createCursorKeys();
  player = game.add.sprite(width*.05, height*.05, 'player');
  player.anchor.set(0.5);
  food = game.add.group();
  scoreText = game.add.text(5, 3, score);
}

function update() {
  if(cursors.up.isDown) {
    player.body.velocity.y = -speed;
  } else if (cursors.down.isDown) {
    player.body.velocity.y = speed;
  } else {
    player.body.velocity.y = 0;
  }

  game.physics.arcade.overlap(player, food, eatFood);
}

function eatFood(player, food) {
  food.kill();

  score++
  scoreText.text = score;
}
