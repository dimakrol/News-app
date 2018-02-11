import React from 'react';
import PropTypes from 'prop-types';

function Comment({comment}){
    return (
        <div>
            <p>{comment.text} by: <b>{comment.user}</b></p>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired
    })
};

export default Comment;