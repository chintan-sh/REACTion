/**
 * Created by chintan on 5/25/17.
 */

var React = require('react'); // residing inside node_modules (installed using npm)

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

module.exports = IntroForm;

