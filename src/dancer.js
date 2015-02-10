// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();

  this.currentX = this.currentX || random(0, left);
  this.currentY = this.currentY || random(0, top);

  this.prevX = this.currentX;
  this.prevY = this.currentY;

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

  $(this.$node[0]).on('mouseover', function(event) {
    console.log("hit");
    var sound = $('.sound');
    var robotAudio = sound.find('audio')[0];

    robotAudio.play();
  });
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step

  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.setSize = function(top, left){

  var styleSettings = {
    height: top,
    width: left
  };
  this.$node.css(styleSettings);
};

