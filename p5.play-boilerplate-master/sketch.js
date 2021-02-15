var moveObject
var stillObject
function setup() {
  createCanvas(800, 400);
  stillObject = createSprite(400, 200, 50, 80);
  moveObject = createSprite(400, 200, 80, 50);
  stillObject.shapeColor = "Blue"
  moveObject.shapeColor = "Blue"
  stillObject.debug = true;
  moveObject.debug = true;


}

function draw() {
  background(0, 0, 0);
  moveObject.x = mouseX;
  moveObject.y = mouseY;
  console.log(moveObject.width / 2 + stillObject.width / 2);
  console.log(moveObject.x - stillObject.x);
  isTouching();
    drawSprites();
}