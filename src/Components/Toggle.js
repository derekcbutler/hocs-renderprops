import React, { Component } from 'react';

class Toggle extends Component {
    state = {
        visible: true
    }

    handleToggle = () => {
        this.setState((prevState) => ({visible: !prevState.visible}))
    }

    render(){
        return (
            <div>
                <button onClick = {this.handleToggle}>{this.state.visible ? 'hide' : 'show'}</button>
                {this.state.visible && this.props.render()}
            </div>
        )
    }
}

export default Toggle;