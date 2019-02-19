import React from 'react';
import {Link} from 'react-router-dom';

const CommentList = props => {
    return (
        <Link to={`posts/${props.id}`}>
            <div className="card" style={{marginBottom: 10 + 'px'}}>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">
                        {props.comment}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default CommentList;
