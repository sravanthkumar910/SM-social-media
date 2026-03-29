import React, { useState } from "react";
import "./PostCard.css";

const PostCard = ({ post }) => {
  const [likes, setLikes] = useState(post.likes || 0);
  const [comments, setComments] = useState(post.comments || []);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [commentText, setCommentText] = useState("");

  const handleLike = () => {
    setLikes((prev) => prev + 1);
  };

  const handleCommentIconClick = () => {
    setShowCommentBox(true);
  };

  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      setComments((prev) => [...prev, { user: "You", text: commentText }]);
      setCommentText("");
      setShowCommentBox(false);
    }
  };

  return (
    <div className="post-card">
      <div className="author">{post.author}</div>

      {post.type === "image" ? (
        <img src={post.content} alt="post" className="post-media" />
      ) : (
        <video controls className="post-media">
          <source src={post.content} type="video/mp4" />
        </video>
      )}

      <div className="actions">
        <div className="action-item" onClick={handleLike}>
          <img src="/like.png" alt="Like" />
          <span>{likes}</span>
        </div>
        <div className="action-item" onClick={handleCommentIconClick}>
          <img src="/comment.png" alt="Comment" />
          <span>{comments.length}</span>
        </div>
        <div className="action-item">
          <img src="/share.png" alt="Share" />
        </div>
      </div>

      {showCommentBox && (
        <div className="comment-box">
          <input
            type="text"
            placeholder="Write a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button onClick={handleCommentSubmit}>Post</button>
        </div>
      )}
    </div>
  );
};

export default PostCard;
