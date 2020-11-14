class paper {
    constructor(x, y,r) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, r, options);
      this.r = r;
      this.x = x;
      this.y = y;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      strokeWeight(6);
      stroke("Green");
      fill("Red");
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };
  