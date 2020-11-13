class Particle {
    constructor(x, y,radius) {
      var options = {
        //isStatic:true,
        'density':1,
        'friction': 0,
        'restitution':1.2
      };
      this.body = Bodies.circle(x, y, radius , options);
      this.radius = radius
      World.add(world, this.body);
    };
    display(){
      fill(random(0,255),random(0,255),random(0,255))
      ellipseMode(RADIUS)
      ellipse(this.body.position.x,this.body.position.y,this.radius)
    };
  };