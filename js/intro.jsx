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


// creating component for reusability (returns JSX)
var Intro = React.createClass({
    // default params in case no argument provided by user
    getDefaultProps : function(){
        return {
            name : 'JOhn Doe',
            message : "Welcome"
        };
    },

   // render is mandatory function that a component has to implement
   render : function(){
       // this is props
       var name = this.props.name;
       var message = this.props.message;

       // return JSX
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

var firstName = "Mike"

// for manipulating DOM (Processes JSX returned by <Intro> component which is then converted by Babel to ES5)
ReactDOM.render(
    <Intro name={firstName} message="Welcome to this page"/>,
    document.getElementById("app")
);