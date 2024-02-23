// BlogPostDetail.js
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBlogContext } from "../BlogBody/BlogContext";
import { Header } from "../../Header/Header";
import { Footer } from "../../Footer/Footer";
import { StyledBlogPostDetailBody } from "./style";
import SocialSharer from "../../StyledButtons/LinkSocialSharer";

const BlogPostDetail = () => {
  const { postId } = useParams();
  const { globalPosts } = useBlogContext();
  // Lógica para buscar detalhes do post usando postId e exibi-los
  const postIdNumber = parseInt(postId, 10);
  const selectedPost = globalPosts.find((post) => post.id === postIdNumber)
  const navigate = useNavigate();
  const handleTagClick = (tag) => {
    navigate(`/blog/query/${tag}`);
  };
  return (
    <StyledBlogPostDetailBody>
      <Header />
      <div className="MainDiv">

      
      <div className="PostDiv">
        <h2>{selectedPost.title}</h2>
         
        <div className="post-render" dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
      </div>
      <div className="SideBar">
      <div className="postOwnerDiv">
            <h5>Escrito por:</h5>
          
            <h3> {selectedPost.created_by}</h3>
            <ul className="tagsList">
        {selectedPost.tags.map((tag) => (
          <li key={tag} onClick={() => handleTagClick(tag)}>
            <button class="button" data-text="Awesome">
            <span class="actual-text">&nbsp;{tag}&nbsp;</span>
            <span aria-hidden="true" class="hover-text">&nbsp;{tag}&nbsp;</span>
            </button>
          </li>
        ))}
      </ul>
      <SocialSharer/>

          </div>
      
      </div>
      </div>
      <Footer/>
    </StyledBlogPostDetailBody>
  );
};

export default BlogPostDetail;