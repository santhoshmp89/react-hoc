import React, {Component} from 'react';

const toolTopHOC = WrappedComponent => {
    return class ToolTipHOC extends Component {
    state = {
        hovering: false,
    };

    mouseOver = () => this.setState ({hovering: true});
    mouseOut = () => this.setState ({hovering: false});

    render () {
        return (
            <div>
                <WrappedComponent
                    hovering={this.state.hovering}
                    mouseOut={this.mouseOut}
                    mouseOver={this.mouseOver}
                />
            </div>
        );
    }
    };
};

export default toolTopHOC;
