var BouncingDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this,arguments);

  this.goalX = random(0,left);
  this.goalY = random(0,top);

  //controlling jump
  this.fall = false;
  this.fallSpeed = 1;
  this.maxHeight = random(30,120);
  this.height = 0;

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

BouncingDancer.prototype = Object.create(Dancer.prototype);
BouncingDancer.prototype.constructor = BouncingDancer;

BouncingDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  //debugger
  this.setPosition(this.currentY, this.currentX);

  if(this.height > this.maxHeight){
    this.fall = true;
  }
  if(this.height < 0){
    this.fall = false;
  }
  if(this.fall === false){
    this.currentY += this.fallSpeed;
    this.height += this.fallSpeed;
  }else{
    this.currentY -= this.fallSpeed;
    this.height -= this.fallSpeed;
  }


  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.toggle();
};


