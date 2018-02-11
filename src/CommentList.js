import React from 'react';
import Comment from './Comment';

export default function CommentList({comments}) {
    const commentElements = comments ? comments.map((comment) => <li key={comment.id}><Comment comment = {comment} /></li>) : null;
    return (
        <ul>
            <h4>Comments:</h4>
            {commentElements}
        </ul>
    )
}