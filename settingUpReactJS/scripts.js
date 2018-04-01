var length = 20
var width = 10

function calculateArea(x, y) { return x * y }

var element = <div>The area is: {calculateArea(length, width)}</div>
render(element, document.getElementById('root3'))

element = <button className="deleteButton"> Delete </button>
render(element, document.getElementById('root4'))

var product = {"imageURL": "https://images.pexels.com/photos/34950/pexels-photo.jpg?cs=srgb&dl=abandoned-forest-industry-34950.jpg&fm=jpg"};
element = <img src={product.imageURL} width="100" height="100"></img>
render(element, document.getElementById('root5'))

element = <img src="{product.imageURL}" width="100" height="100"></img>
//render(element, document.getElementById('root6'))

element = <input className="nameInput" />
render(element, document.getElementById('root6'))

// Using JSX with a Style Object
var styleObject = {
	backgroundColor: 'red',
	color: 'blue',
	fontSize: 25,
	width: 100
}
element = <input style = {styleObject} />
render(element, document.getElementById('root7'))


// In this next example, the first set of curly braces is for the JSX expression while the second set of curly braces is
// for the style object:
element = <input style = {{width:200,height:100}}/>
render(element, document.getElementById('root8'))


// Using JSX with Nested Elements
// React Elements can be nested within other React Elements as long as the whole thing is wrapped by in a single element.
element = (
	<div>
		<div>Hello World</div>
		<div>Hello World</div>
	</div>
)
render(element, document.getElementById('root9'))

// This example is not surrounded with a single wrapping element and will throw an error:
/*element = (
	<div>Hello World</div>
	<div>Hello World</div>
)
render(element, document.getElementById('root9'))*/

// Using JSX Objects
var product = {name:"apple", stock:0}
if (product.stock < 0) {
	var element = <h1>The product named {product.name} is not in stock</h1>
} else {
	var element = <h1>The product named {product.name} and has {product.stock} units in stock</h1>
}
render(element, document.getElementById('root10'))
