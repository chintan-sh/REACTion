/**
 * Created by chintan on 5/25/17.
 */

/*
 *
 * TERMS :
 *
 * ES = ECMAScript (JavaScript Standard since ages)
 * JSX = JavaScriptXML
 * ES5 = ECMAScript 5 (2009)
 * ES6/ES2015 = ECMAScript 6 (2016)
 * Babel = "Transpiler" to convert ES6 into ES5 so old browsers can run JS
 *
 * */


var IntroMessage = React.createClass({
    render: function (){
        return(
            <div>
                <h1>Some H1</h1>
                <p> Some Paragraph</p>
            </div>
        );
    }
});

var IntroForm = React.createClass({
    render : function () {
        return(
            <form onSubmit={this.onFormButtonClick}>
                <input type="text" ref="firstName"/>
                {/* button has default type as "submit" hence, when "Set Name" is clicked, form's onSubmit will fire */}
                <button>Set New Name</button>
            </form>
        );
    }
});


// creating component for reusability (returns JSX)
var Intro = React.createClass({
    // default params in case no argument provided by user
    getDefaultProps : function(){
        return {
            name : 'John Doe',
            message : "Welcome"
        };
    },

    // set initial state (this would mostly be default prop)
    getInitialState : function(){
        return{
            name : this.props.name
        };
    },

    // called when submit button hit on form
    onFormButtonClick : function(e) {
        e.preventDefault();

        // store reference of textbox
        var nameRef = this.refs.firstName;

        // extract value from textbox
        var name = nameRef.value;

        // make textbox empty after value extracted
        nameRef.value = '';

        // if value entered is not empty, then update state
        if (typeof name === 'string' && name.length > 0) {
            // update state with user entered value
            this.setState({
                name: name
            });
        }
    },

    // render is mandatory function that a component has to implement
    render : function(){
        // this is props
        var name = this.state.name; // fetch new name every time state changes
        var message = this.props.message;

        // return JSX
        return(
            <div>
                <h1> Hello, {name}!</h1>
                <h2> {message + '!'} </h2>
                <h3>This is React</h3>
                <p>It is an open-source JavaScript library for building user interfaces.</p>
                <IntroMessage />

                <form onSubmit={this.onFormButtonClick}>
                    <input type="text" ref="firstName"/>
                    {/* button has default type as "submit" hence, when "Set Name" is clicked, form's onSubmit will fire */}
                    <button>Set Name</button>
                </form>
                <IntroForm />
            </div>
        );
    }
});

var firstName = "Mike"

// for manipulating DOM (Processes JSX returned by <Intro> component which is then converted by Babel to ES5)
ReactDOM.render(
    <Intro name={firstName} message="Welcome to this page"/>,
    document.getElementById("app")
);