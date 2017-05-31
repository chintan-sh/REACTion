/**
 * Created by chintan on 5/25/17.
 */

var React = require('react'); // residing inside node_modules (installed using npm)
var IntroMessage = require('./IntroMessage');
var IntroForm = require('./IntroForm');

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

module.exports = Intro;