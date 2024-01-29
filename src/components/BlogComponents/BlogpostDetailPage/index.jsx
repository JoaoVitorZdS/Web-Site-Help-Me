// BlogPostDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import { useBlogContext } from "../BlogBody/BlogContext";

const BlogPostDetail = () => {
  const { postId } = useParams();
  const { globalPosts } = useBlogContext();
  // Lógica para buscar detalhes do post usando postId e exibi-los

const postIdNumber = parseInt(postId, 10);
const selectedPost = globalPosts.find((post) => post.id === postIdNumber)
console.log(selectedPost)
  return (
    <div>
      <h2>{selectedPost.title}</h2>
    </div>
  );
};

export default BlogPostDetail;