var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this,arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.speedFactor = 80;
  this.currentSpeed = 0;
  this.show = true;
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step

  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  if(this.currentSpeed < 0){
    this.show = true;
    this.$node.toggle();

  }
  if(this.currentSpeed > this.speedFactor){
    this.show = false;
    this.$node.toggle();
  }
  if(this.show){
    this.currentSpeed++;
  }else{
    this.currentSpeed--;
  }
};

