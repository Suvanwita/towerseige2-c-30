/*class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.Visiblity = 255;
    }

  display(){
    console.log(this.body.speed);
    if(this.body.speed < 2){
     super.display();
    }
    else{
     
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(250,this.Visiblity);
      rect(this.body.position.x, this.body.position.y, 50, 50)
      pop();

      if(this.Visiblity==0){
         World.remove(world, this.body);
      }
    }
    
  }
}; 
*/

class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.Visiblity = 255;
  }


display(){
 // console.log(this.body.speed);
  if(this.body.speed < 5){
   super.display();
  }
  else{
   
    push();
    World.remove(world, this.body);
    this.Visiblity = this.Visiblity - 5;
   // tint(250,this.Visiblity);
   // rect(this.body.position.x, this.body.position.y, 50, 50)
    pop();
  }
  
}
}; 