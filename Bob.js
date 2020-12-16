class Bob{
    constructor(x,y)
    {
        var options ={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density: 1.2
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x,this.y,100,options);
    
        World.add(world, this.body);
    }

    display()
    {
        var paperPos = this.body.position;

        push()
        translate(paperPos.x,paperPos.y);
        strokeWeight(1);
        fill("lightGreen")
        ellipse(0,0,100);

        pop()
            
    }
}