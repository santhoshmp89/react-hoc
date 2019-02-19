import React from 'react';
import CommentsList from '../CommentList';

const CommentsLists = props => {
    return props.commentsLists.length > 0
        ? props.commentsLists.map (value => <CommentsList {...value} />)
        : 'No Comments found...!';
};

export default CommentsLists;
