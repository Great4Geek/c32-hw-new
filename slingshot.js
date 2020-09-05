class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        //this.sling1 = loadImage("sprites/sling1.png")
        //this.sling2 = loadImage("sprites/sling2.png")
        //this.sling3 = loadImage("sprites/sling3.png")
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    attach(body){
        this.sling.bodyA=body;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if (pointA.x < 220){
                push();
                strokeWeight(7);
                stroke(96,1,1)
                line(pointA.x-25,pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25,pointA.y, pointB.x+25, pointB.y);
                //image(this.sling3,pointA.x-35,pointA.y-10,15,30);
                pop();
                }
                else{
                    push();
                strokeWeight(4);
                stroke(96,1,1)
                line(190,65, pointA.x+10, pointA.y);
                line(pointA.x+25,pointA.y, pointB.x+25, pointB.y);
                //image(this.sling3,pointA.x-35,pointA.y-10,15,30);
                pop();
                }
        }

    }
    
}