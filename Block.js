class Block {
    constructor(x,y,width,height) {
        var options = {
            restitution : 0.04
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.visibility = 255
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }

    display() {
        if(this.body.speed < 3) {
            var BoxPos = this.body.position;
            var angle = this.body.angle;
            push();
            translate(BoxPos.x,BoxPos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop();
        }              

        else {
            World.remove(world,this.body);
            push();
            this.visiblity = this.visiblity - 5;
            tint(255,this.visiblity);
            pop();
        }       
    }
}
   
   