function isTouching(){
    if ((moveObject.x - stillObject.x)<(moveObject.width / 2 + stillObject.width / 2)
  &&(stillObject.x - moveObject.x)<(moveObject.width / 2 + stillObject.width / 2)
  &&(moveObject.y - stillObject.y)<(moveObject.width / 2 + stillObject.width / 2)
  &&(stillObject.y - moveObject.y)<(moveObject.width / 2 + stillObject.width / 2)){
    stillObject.shapeColor = "yellow"
  moveObject.shapeColor = "yellow"
  }
  else{
    stillObject.shapeColor = "Blue"
  moveObject.shapeColor = "Blue"
  }
}
function bounceOff(){
    if ((moveObject.x - stillObject.x)<(moveObject.width / 2 + stillObject.width / 2)
  &&(stillObject.x - moveObject.x)<(moveObject.width / 2 + stillObject.width / 2)
  &&(moveObject.y - stillObject.y)<(moveObject.width / 2 + stillObject.width / 2)
  &&(stillObject.y - moveObject.y)<(moveObject.width / 2 + stillObject.width / 2)){
    stillObject.shapeColor = "yellow"
  moveObject.shapeColor = "yellow"
  }
  else{
    stillObject.shapeColor = "Blue"
  moveObject.shapeColor = "Blue"
  }
}