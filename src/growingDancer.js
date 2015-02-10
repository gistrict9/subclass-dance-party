var GrowingDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);

  this.baseSize = 100;
  this.currentSize = this.baseSize;
  this.maxSize = 300;
  this.grow = true;
};

GrowingDancer.prototype = Object.create(Dancer.prototype);
GrowingDancer.prototype.constructor = GrowingDancer;

GrowingDancer.prototype.growth = function() {
  if (this.grow) {
    this.currentSize += 0.1;
  } else {
    this.currentSize -= 0.1;
  }

  if (this.currentSize > this.maxSize) {
    this.grow = false;
  }

  if (this.currentSize < this.baseSize) {
    this.grow = true;
  }
};

GrowingDancer.prototype.step = function(){
  this.growth();
  this.setPosition(this.currentY, this.currentX);
  this.setSize(this.currentSize, this.currentSize);

  Dancer.prototype.step.call(this);
};


