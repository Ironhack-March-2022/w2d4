let playerImage;
let playerX = 100;
// preloads all the assets that we use
function preload() {
	// loadImage() is used to preload an image
	playerImage = loadImage('gustavo.png')
}

// this creates the canvas element
function setup() {
	console.log('this is the setup function')
	// this is function that P5 provides 
	createCanvas(1000, 600)
}

let x = 450
let speed = 1
function draw() {
	// this clears the canvas
	clear()
	// console.log('i am drawing 🦄')

	// this draws a rectangle
	// const rectColor = color(255, 0, 0)
	// fill(rectColor)
	// stroke('red')
	// rect(200, 200, 100, 100)

	// rect(200, 0, 100, 100)
	// fill('green')

	// draw a line (startX, startY, endX, endY)

	// line(0, 0, 1000, 600)

	// circle(x, y, radius)
	// x += speed
	// if (x > 950) {
	// console.log('go back')
	// change the direction
	speed = - 1
	// }
	// circle(x, 200, 100)

	// these are also provided by p5
	// console.log(height, width)
	// console.log(mouseX, mouseY)
	// circle(mouseX, mouseY, 50)

	// this renders the player image - (image, x, y, width, height)
	image(playerImage, playerX, 100, 100, 100)

}

function keyPressed() {
	console.log('key pressed')
	// this variable is set by P5
	console.log(keyCode)
	if (keyCode === 39) {
		// move the player to the right
		playerX += 50
	}
}