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

/*********** Functional Components ***/
function HelloWorld() {
	return <h1>Hello World. Functional Component!</h1>
}

// you can use the React Component in JSX by creating an HTML tag with the same name as the React Component
var element = <HelloWorld/>
render(element, document.getElementById('root11'));
// another example
render(<HelloWorld/>, document.getElementById('root12'));
// These examples will al evaluate to the React Element that is returned by the HelloWorld Component.

// ADDING PROPERTIES TO FUNCTIONAL COMPONENTS
// The first argument to a Functional Component is an object that contains the component's properties
function HelloWorld1(props) {
	return <h1>Message: {props.message}</h1>
}
// You can supply properties values the same way as you supply attribute values
render(<HelloWorld1 message="Hello World message passed as a property!!!" />, document.getElementById('root13'));

// Properties can be string literals, arrays or any other type of javascript object including other React Elements:
function HelloWorld2(props){
	return <h1>Value: {props.numberArray[props.index]} </h1>
}
render(<HelloWorld2 index="3" numberArray={[1,2,3,4,5]} />, document.getElementById('root14'));
// you can supply as many property values as you want and They will all be accessible through the props argument.