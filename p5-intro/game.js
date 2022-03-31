class Game {

	constructor() {
		this.player = new Player()
		// this.enemy = new Enemy()
	}

	preload() {
		this.player.image = loadImage('gustavo.png')
	}
	draw() {
		clear()
		this.player.draw()
		// this.enemy.draw()
	}

}

class Player {
	constructor() {
		this.x = 500
		this.y = 500
		this.width = 100
		this.height = 100
		this.image
	}
	draw() {
		image(this.image, this.x, this.y, this.width, this.height)
		// keyIsDown needs to be constantly checked - also a P5 method
		if (keyIsDown(65)) {
			this.moveRight()
		}
	}
	moveRight() {
		this.x += 10
	}
	moveLeft() {
		this.x -= 10
	}
	moveUp() {
		this.y -= 10
	}
	moveDown() {
		this.y += 10
	}
}




const game = new Game()

function preload() {
	game.preload()
}
function setup() {
	createCanvas(1000, 600)
}
function draw() {
	game.draw()
}


function keyPressed() {
	if (keyCode === 39) {
		game.player.moveRight()
	}
	if (keyCode === 37) {
		game.player.moveLeft()
	}
	if (keyCode === 38) {
		game.player.moveUp()
	}
	if (keyCode === 40) {
		game.player.moveDown()
	}
}