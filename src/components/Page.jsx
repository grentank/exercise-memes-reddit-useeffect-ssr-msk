import React from 'react';
import Pagination from './ui/Pagination';
import PostItem from './ui/PostItem';

export default function Page({ posts }) {
  return (
    <div className="row justify-content-evenly">
      {posts.map((el) => <PostItem key={el.url} post={el} />)}
      <div className="col-12">
        <Pagination />
      </div>
    </div>
  );
}
