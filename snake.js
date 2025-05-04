var canvas = document.getElementById("snake");
var context = canvas.getContext("2d");

game = {
  score: 0,
  fps: 8,
  over: false,
  message: null,

  start: function () {
    game.over = false;
    game.message = null;
    game.score = 0;
    game.fps = 8;
    snake.init();
    food.set();
  },

  stop: function () {
    game.over = true;
    game.message = 'TAP TO PLAY';
  },

  drawBox: function (x, y, size, color) {
    context.fillStyle = color;
    context.beginPath();
    context.moveTo(x - size / 2, y - size / 2);
    context.lineTo(x + size / 2, y - size / 2);
    context.lineTo(x + size / 2, y + size / 2);
    context.lineTo(x - size / 2, y + size / 2);
    context.closePath();
    context.fill();
  },

  drawScore: function () {
    context.fillStyle = '#ddd';
    const fontSize = 36;
    context.font = fontSize + 'px PPNeueBit, sans-serif';
    context.textAlign = 'center';
    context.fillText(game.score, canvas.width / 2, canvas.height * 0.9);
  },

  drawMessage: function () {
    if (game.message !== null) {
      context.fillStyle = '#fff';
      const fontSize = canvas.height / 10;
      context.font = fontSize + 'px PPNeueBit, sans-serif';
      context.textAlign = 'center';
      context.fillText(game.message, canvas.width / 2, canvas.height / 2);
    }
  },

  resetCanvas: function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
};

snake = {
  size
