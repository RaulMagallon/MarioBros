class Mario{
	constructor (animation, x, y,num){
		this.animation = animation
		this.x         = x
		this.y         = y
		this.num       = num
		this.index     = 0
		this.speed     = 0.3
		this.g = 2
	}

	draw(){
		image(this.animation[floor(this.index) % 6], this.x, this.y)
		this.index += this.speed
	}

	move(){
		this.x += this.speed
	}
}