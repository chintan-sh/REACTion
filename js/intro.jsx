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
var React = require('react'); // residing inside node_modules (installed using npm)
var ReactDOM = require('react-dom'); //


// subcomponent to display message
var IntroMessage = React.createClass({
    render: function (){
       // collect params passed by parent component
       var name = this.props.name;
       var message = this.props.message;

        return(
            <div>
                <h1> Hello, {name}!</h1>
                <h2> {message + '!'} </h2>
                <h3>This is React</h3>
                <p>It is an open-source JavaScript library for building user interfaces.</p>
            </div>
        );
    }
});


// subcomponent for form (rendered inside parent component)
var IntroForm = React.createClass({
    // called when submit button hit on form
    onFormButtonClick : function(e) {
        e.preventDefault();

        // store reference of textbox
        var nameRef = this.refs.firstName;
        var msgRef = this.refs.userMessage;

        // extract value from textbox
        var name = nameRef.value;
        var msg = msgRef.value;

        // make textbox empty after value extracted
        nameRef.value = '';
        msgRef.value = '';

        // if name entered is not empty, then update state
        if (typeof name === 'string' && name.length > 0) {
            // call function inside parent with name parameter
            this.props.onNewName(name);
        }

        // if message entered is not empty, then update state
        if (typeof name === 'string' && msg.length > 0) {
            // call function inside parent with name parameter
            this.props.onNewMessage(msg);
        }
    },
    render : function () {
        return(
            <form onSubmit={this.onFormButtonClick}>
                <div>
                    <label for="firstNameBox">First Name : </label>
                    <input type="text" name="firstNameBox" placeholder="Enter your first name" ref="firstName"/>
                </div>

                <div>
                    <label for="messageBox">Your Message : </label>
                    <textarea  ref="userMessage" placeholder="Enter your message" name="messageBox"></textarea>
                </div>

                <div>
                    {/* button has default type as "submit" hence, when "Set Name" is clicked, form's onSubmit will fire */}
                    <button>Submit</button>
                </div>
            </form>
        );
    }
});


// parent component (container)
var Intro = React.createClass({
    // default params in case no argument provided by user
    getDefaultProps : function(){
        return {
            name : 'John Doe',
            message : "Welcome"
        };
    },
    // set initial state (this would mostly be default prop or initial user value)
    getInitialState : function(){
        return{
            name : this.props.name,
            message : this.props.message
        };
    },
    // called by form subcomponent when form submitted and name state is changed
    handleNewName : function(name) {
        this.setState({
            name: name
        });
    },
    // called by form subcomponent when form submitted and message state is changed
    handleNewMessage : function(message) {
        this.setState({
            message : message
        });
    },
   // render is mandatory function that a component has to implement
   render : function(){
       var name = this.state.name; // fetch new name every time state changes
       var message = this.state.message;

       // return JSX
       return(
            <div>
                {/* re-render this component everytime state changes*/}
                <IntroMessage name={name} message={message}/>

                {/* pass parent's function reference to child for remote calling*/}
                <IntroForm onNewName = {this.handleNewName} onNewMessage = {this.handleNewMessage} />
            </div>
       );
   }
});

// init name/msg
var firstName = "Mike";
var msg = "Welcome to this page";

// for manipulating DOM (Processes JSX returned by <Intro> component which is then converted by Babel to ES5)
ReactDOM.render(
    <Intro name={firstName} message={msg}/>,
    document.getElementById("app")
);