import React from "react";
import { StyledBlogContainer } from "./style";
import { Footer } from "../../components/Footer/Footer";
import { BlogBody } from "../../components/BlogComponents/BlogBody";
import { Header } from "../../components/Header/Header";




const BlogPage = () => {
  

  return (
    <div>
     
        <StyledBlogContainer >
        
          <Header/>
          <BlogBody />
          <Footer/>
        </StyledBlogContainer>
     
       
     
    </div>
  );
};

export default BlogPage;
