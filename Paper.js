class Paper
{
	constructor(x, y, r)
	{
		var options={
			isStatic:false,			
			restitution:0.3,
            friction:0,
            density:1.2}
			this.x=x;
			this.y=y;
			this.r=r;
			this.image=loadImage("paper.png");
			//everthing declared using properties is accompanied but 'this' keyword
			this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
			World.add(world, this.body);

	}
	display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			rectMode(CENTER);
			//rectMode is for telling the computer to pivot from the center
			//strokeWeight(4);
			fill(255, 0, 255);
			imageMode(CENTER);
			this.image(this.image, 0, 0, this.r, this.r);
			//doubt
			//ellipse(0,0,this.r, this.r)
			pop()
			
	}

}