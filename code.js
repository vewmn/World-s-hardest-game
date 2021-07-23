var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


//add the velocity to make the car move.
var boundary1 = createSprite(200,120,400,6)
var boundary2 = createSprite(200,260,400,6)

var sam =createSprite(25,190,13,13)
sam.shapeColor="green"

var car1 =createSprite(100,130,10,10)
car1.shapeColor="red"

var car2 =createSprite(165,250,10,10)
car2.shapeColor="red"

var car3 =createSprite(230,130,10,10)
car3.shapeColor="red"

var car4 =createSprite(295,250,10,10)
car4.shapeColor="red"

car1.velocityY=8
car2.velocityY=-8
car3.velocityY= 8
car4.velocityY=-8
var life=0
function draw() {
   background("white");
   text("lives; "+life,182,90)
   car1.bounceOff(boundary1)
   car1.bounceOff(boundary2)
   car2.bounceOff(boundary1)
   car2.bounceOff(boundary2)
   car3.bounceOff(boundary1)
   car3.bounceOff(boundary2)
   car4.bounceOff(boundary1)
   car4.bounceOff(boundary2)
   
   if(keyDown("left")){
   sam.x=sam.x-2
   }
    if(keyDown("right")){
   sam.x=sam.x+2
   }
   
   if(sam.isTouching(car1)||sam.isTouching(car2)||sam.isTouching(car3)||sam.isTouching(car4)){
  sam.x=25
  sam.y=190
  life=life+1
   }
  
// create bounceoff function to make the car bounceoff the boundaries
//Add the condition to make the sam move left and right
//Add the condition to reduce the life of sam if it touches the car.
noStroke()
fill("lightblue")
  rect(0,121,50,137)
  fill("yellow")
  rect(350,121,50,137)
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
