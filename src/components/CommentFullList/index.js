import React from 'react';

const CommentFullList = props => {
    return props.commentsLists.length > 0
        ? <div className="card" style={{marginBottom: 10 + 'px'}}>
            <h3>Comment Details</h3>
            <div className="card-body">
                <h5 className="card-title">
                    {props.commentsLists[props.match.params.number - 1].title}
                </h5>
                <p className="card-text">
                    {props.commentsLists[props.match.params.number - 1].title}
                </p>
            </div>
        </div>
        : null;
};

export default CommentFullList;
