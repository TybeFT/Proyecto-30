class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.03,
      }
      this.visiblity = 225;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image= loadImage("block.png")
      World.add(world, this.body);
      
    }
   
    display(){
      //console.log(this.body.speed);
      var pos= this.body.position;
      if(this.body.speed < 5){
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width, this.height);
        score = 0;
      }else {
      World.remove(world, this.body);
      push();
      this.visiblity = this.visiblity - 6;
      tint(255,this.visiblity);
      image(this.image, this.body.position.x, this.body.position.y,this.width, this.height);
      score = score + 1;
      pop();
      
    }
  }
}