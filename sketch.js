let parallaxs = []
let mario = []
let bg
let ground
let x
let index
let xf=0
let yf=0
let speed = 0.1
let space = 32
let orienta = 1
let salto=0

function setup() {
	createCanvas(windowWidth, windowHeight);

	for(let i = 0; i < 5; i++){
		parallaxs.push(new Paralax(loadImage(`images/background${i+1}.png`), i*width, 0, width, height, -4))
	}
	for(let i = 0 ; i < 6; i++)
		mario.push(loadImage(`images/mario${i+1}.png`))

	x=0
	index=0
	yf=height-150
}

function draw() {

	background('silver')

	for(let p of parallaxs){
		p.draw()
		p.move()
	}
	image(mario[floor(index)],xf,yf,50,50)
index += speed
if (index>=mario.length) {
			index=0
		}
		if (salto==1 && yf >=height-200) {
			
				yf--
			
			
		}else{
			if (yf<=height-150) {
			yf++
			salto=0
			}
		}

		mario.forEach((s) =>{

			if(keyIsDown(RIGHT_ARROW)) {

      			for(let mr of mario)
      				mr.move()
			}
			if(keyIsDown(LEFT_ARROW)) {

				s.x--;
			}
		})

		/*yf+=
		if (yf<0) {
			orienta=orienta*-1
		}
		if (xf>width) {
			xf=-50
		}*/


}


function keyPressed () {

	if (keyCode == space){
		salto=1
	}

}