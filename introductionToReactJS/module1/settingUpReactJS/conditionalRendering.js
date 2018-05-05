// ******************* CONDITIONAL RENDERING *******************//

// The output of a Functional Component can be determined based on its properties.
function Feature(props) {
	if (props.active == true){
		return <h1>This feature is active</h1>
	} else{
		return <h1>This feature is not active</h1>
	}
}

ReactDOM.render(<Feature/>, document.getElementById('root'));

// This can also be accomplished using an inline conditional operator
function Feature1(props){
	return <h1>This feature is {props.active ? "active" : "not active"}</h1>
}

ReactDOM.render(<Feature1/>, document.getElementById('root1'));

// ******************* PREVENTING RENDERING *******************//
// The output of a Functional Component can be prevented from rendering
function Feature2(props){
	if (!props.active){
		return null
	} else{
		return <h1>{props.message}</h1>
	}
}

ReactDOM.render(<Feature2/>, document.getElementById('root2'));

ReactDOM.render(<Feature2 active="true" message="Dantito and Daniel"/>, document.getElementById('root3'));

// You can also conditionally prevent a feature from rendering using the && operator
function Feature3(props){
    return (
        props.active && <h1>{props.message}</h1>
    )
}
ReactDOM.render(<Feature3 active={null} message="test"/>, document.getElementById('root4'));
ReactDOM.render(<Feature3 active={false} message="test"/>, document.getElementById('root5'));
ReactDOM.render(<Feature3 active={true} message="keluchis"/>, document.getElementById('root6'));

// With the && operator, true and expression will always evaluate to expression. On the other hand, false and expression
// will always evaluate to false which won't render