import React from 'react';

const Tag = props => {
    return (
        <span className="tag">
            {props.name}
            <span className="close-icon" onClick={() => props.clearTag (props.name)}>
        X
            </span>
        </span>
    );
};

export default Tag;
