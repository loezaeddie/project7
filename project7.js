var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"

// utility function
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}

// Step 2: drawSquare and drawCircle functions
function drawSquare(x, y, size, color) {
  var newrect = document.createElementNS(namespace, "rect")
  newrect.setAttribute("x", x)
  newrect.setAttribute("y", y)
  newrect.setAttribute("width", size)
  newrect.setAttribute("height", size)
  newrect.setAttribute("fill", color)
  screen.appendChild(newrect)
}


function drawCircle(x, y, radius, color) {
  var newcircle = document.createElementNS(namespace, "circle")
  newcircle.setAttribute("cx", x)
  newcircle.setAttribute("cy", y)
  newcircle.setAttribute("r", radius)
  newcircle.setAttribute("fill", color)
  screen.appendChild(newcircle);
}



// Step 3: Event listeners
document.addEventListener("mousemove", function(e) {
  var pt = transformPoint(e)

  var selectShape = document.getElementById("shapeSelect").value
  var selectColor = document.getElementById("colorSelect").value
  var selectSize = document.getElementById("sizeSelect").value

  console.log(selectShape)
  console.log(selectColor)
  console.log(selectSize)

  if (selectShape == "square"){
    drawSquare(pt.x, pt.y, selectSize, selectColor)
  }

  else if (selectShape == "circle"){
    drawCircle(pt.x, pt.y, selectSize, selectColor)
  }
})
