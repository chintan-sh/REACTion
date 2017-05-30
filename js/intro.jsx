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

        // extract value from textbox
        var name = nameRef.value;

        // make textbox empty after value extracted
        nameRef.value = '';

        // if value entered is not empty, then update state
        if (typeof name === 'string' && name.length > 0) {
            // call function inside parent with name parameter
            this.props.onNewName(name);
        }
    },
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
            name : this.props.name
        };
    },
    // called by form subcomponent when form submitted and state is changed
    handleNewName : function(name) {
        this.setState({
            name: name
        });
    },
   // render is mandatory function that a component has to implement
   render : function(){
       // this is props
       var name = this.state.name; // fetch new name every time state changes
       var message = this.props.message;

       // return JSX
       return(
            <div>
                {/* re-render this component everytime state changes*/}
                <IntroMessage name={name} message={message}/>

                {/* pass parent's function reference to child for remote calling*/}
                <IntroForm onNewName = {this.handleNewName}/>
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