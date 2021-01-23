// Enemies our player must avoid


var Enemy = function(a,b) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = a;
    this.y = b;
    this.speed = 67;
    this.w1 = 70;
    this.h1 = 60;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
     this.x = this.speed * dt + this.x;
    if (this.x >= 505)
        this.x = 0;
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 302;
    this.y = 420;
    this.w1 = 70;
    this.h1 = 60;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.update = function(dt) {

    this.collision();
};

Player.prototype.collision = function() {
    for (var index = 0; index < allEnemies.length; index++) {
        var part1 = {
            x: this.x,
            y: this.y,
            width: this.w1,
            height: this.h1
        };
        var part2 = {
            x: allEnemies[index].x,
            y: allEnemies[index].y,
            width: allEnemies[index].w1,
            height: allEnemies[index].h1
        };
        if (part1.x < part2.x + part2.width &&
            part1.x + part1.width > part2.x &&
            part1.y < part2.y + part2.height &&
            part1.height + part1.y > part2.y) {
           
   
            this.x = 302;
            this.y = 420;
        } 


    }

};


Player.prototype.handleInput = function(x) {
    if (x == 'up') {
        if (this.y <= 83  ) {
            this.x = 302;
                this.y = 420;
                 } else
            this.y = this.y - 83;
    }
    if (x == 'down') {
        if (this.y > 415) {
            this.x = 302;
            this.y = 420;
        } else
            this.y = this.y + 83;
    }
    if (x == 'left') {
        if (this.x <= 0) {
            this.x = 302;
            this.y = 420;
        } else
            this.x = this.x - 101;
    }
    if (x == 'right') {
        if (this.x> 304) {
            this.x = 302;
            this.y = 420;
        } else
            this.x = this.x + 101;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy(176, 197), new Enemy(44, 55),new Enemy(200,100),new Enemy(57,200)];

var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
