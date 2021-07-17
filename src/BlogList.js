const CommentList = ({ comments, title }) => {
    return (
        <div className="comment-list">
            <h2>{title}</h2>
            {comments.map((comment) => (
                <div className="comment-preview" key={comment.id}>
                    <h2>{comment.title}</h2>
                    <p>Written by: {comment.author}</p>
                </div>
            ))}
        </div>
    );
}

export default CommentList;
