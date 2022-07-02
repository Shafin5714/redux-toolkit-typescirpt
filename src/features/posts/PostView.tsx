import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
import {useAppSelector,useAppDispatch} from '../../app/hooks'
import { fetchPosts } from "./postSlice";

export default function PostView() {
  const dispatch = useAppDispatch();
  const { posts, isLoading, error } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts())
  }, []);

  
  return (
    <div>
      {isLoading && <h3>Loading</h3>}
      {error && <h3>{error}</h3>}
      {posts.map((post, index) => (
        <p key={index}>{post.title}</p>
      ))}
    </div>
  );
}
