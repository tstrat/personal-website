const Stars = []
const size = 2000;
const speed = 1;
function initPos() {
	for (let i = 0; i < size; i++) {
		Stars.push(new Star());
	}
}

function move() {
	for (let star of Stars) {
		star.move();
	}
}

function setup() {
	createCanvas(800, 800);
	initPos();
}

function draw() {
	background(0);
	translate(height / 2, width / 2)
	fill(255);
	move();
	for (let star of Stars) {
		star.show();
	}
}

function Star() {
	this.x = random(-width/2, width/2)
	this.y = random(-height/2, height/2)
	this.z = random(width);

	this.move = () => {
		this.z = this.z - speed;
		if (this.z < 1) {
			this.z = width;
			this.x = random(-width/2, width/2);
			this.y = random(-height/2, height/2);
		}

	}
		this.show = () => {
			fill(255);
			noStroke();

			var sx = map(this.x / this.z, 0, 1, 0, width);
			var sy = map(this.y / this.z, 0, 1, 0, height);

			var r = map(this.z, 0, width, 5, 0);
			ellipse(sx, sy, r, r);
		}
	}