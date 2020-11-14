class dustbin {
    constructor(x, y,width,thickness) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = 100;
      this.thickness = thickness;
      this.image = loadImage("dustbingreen.png");
      var options = {
        isStatic: true
      }
      this.bottombody = Bodies.rectangle(this.x,this.y,this.width,this.thickness,options);
      World.add(world, this.bottombody);
    }
    display(){
      var bottompos = this.bottombody.position;
      strokeWeight(6);
      stroke("Green");
      fill("Red");
      rect(bottompos.x, bottompos.y,this.width,this.thickness);
      pop();
    }
  };
  