/**
 * Created by chintan on 5/25/17.
 */

var React = require('react'); // residing inside node_modules (installed using npm)

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

module.exports = IntroMessage;

