function Bullet(x, y, angle) {
    this.angle = angle;
    this.x = x;
    this.y = y;
    this.width = 20;
    this.length = 45;
    var position = createVector(this.x, this.y);
    var velocity = createVector();
    var acceleration = createVector(1, 0);
    acceleration.setMag(0.2);
  
    
    this.update = function() {
        var acceleration = createVector(1, 0);
        acceleration.rotate(radians(this.angle));
        velocity.add(acceleration);
        velocity.limit(2);
        position.add(velocity);
  
        

        push();
        translate(position.x, position.y);
        rotate(radians(this.angle));
        stroke(58, 33, 30);
        fill(75, 71, 71);
            beginShape();
            vertex(0 - (this.length/2), 0 -(this.width/2));
            vertex(0 - (this.length/2), 0 + (this.width/2));
            vertex(0, 0 + (this.width/2));
            vertex(0 - 3 , 0 + (this.width/2) + 2);
            vertex(0 + (this.length/2), 0 + (this.width/2));
            vertex(0 + (this.length/2), 0 - (this.width/2));
            vertex(0 - 3, 0 - (this.width/2) - 2);
            vertex(0, 0 - (this.width/2));
            vertex(0 - (this.length/2), 0 -(this.width/2));
           endShape();
        stroke(58, 33, 30);
        fill(167, 18, 1);
        arc(0 + (this.length/2), 0, 15, this.width, PI+HALF_PI, HALF_PI,CHORD);
        beginShape();
        vertex(0 - (this.length/2) - 10, 0 - (this.width/2));
        vertex(0 - (this.length/2), 0);
        vertex(0 -(this.length/2), 0 - (this.width/2));
        endShape();
        beginShape();
        vertex(0 - (this.length/2), 0)
        vertex(0 - (this.length/2) - 10, 0 + (this.width/2));
        vertex(0 - (this.length/2), 0 + (this.width/2));
        endShape();
        pop();
 
    }
}