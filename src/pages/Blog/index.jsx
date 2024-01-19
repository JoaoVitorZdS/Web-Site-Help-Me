import React, { useContext } from "react";
import { StyledBlogContainer } from "./style";
import { Footer } from "../../components/Footer/Footer";
import { AccessTokenContext } from "../../components/StyledButtons/ButtonLogInGoogle";
import { BlogBody } from "../../components/BlogComponents/BlogBody";
import { Header } from "../../components/Header/Header";




const BlogPage = () => {
  const { accessToken } = useContext(AccessTokenContext);

  return (
    <div>
      {accessToken ? (
        <StyledBlogContainer>
          
          <Header/>
          <BlogBody />
          <Footer/>
        </StyledBlogContainer>
      ) : (
        
        <StyledBlogContainer>
          <h1>Blog - Sem Usuário</h1>
          <BlogBody />
          <Footer/>
        </StyledBlogContainer>
       
      )}
    </div>
  );
};

export default BlogPage;
