import React, {Component, Fragment} from 'react';
import ToolTipHOC from './ToolTipHOC';
import Tooltip from './Tooltip';

export default class HomePage extends Component {
    render () {
        return (
            <div>
                <h2>Home page <InFoHOC /></h2>
            </div>
        );
    }
}

const InFo = props => {
    return (
        <Fragment>
            <div onMouseOver={props.mouseOver} onMouseOut={props.mouseOut}>?</div>
            {props.hovering && <Tooltip title={props.title} />}
        </Fragment>
    );
};

const InFoHOC = ToolTipHOC (InFo, 'homepage');
