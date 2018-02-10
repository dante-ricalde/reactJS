var length = 20
var width = 10

function calculateArea(x, y) { return x * y }

var element = <div>The area is: {calculateArea(length, width)}</div>
render(element, document.getElementById('root3'))