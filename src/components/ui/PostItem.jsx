import React from 'react';

export default function PostItem({ post }) {
  return (
    <div className="card m-3 col-5 text-bg-light border-warning">
      <img src={post.url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.author}</p>
        <p className="card-text"><small className="text-muted">{post.postLink}</small></p>
      </div>
    </div>
  );
}
