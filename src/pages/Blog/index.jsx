import React from "react";
import { StyledBlogContainer } from "./style";
import { Footer } from "../../components/Footer/Footer";
import { BlogBody } from "../../components/BlogComponents/BlogBody";
import { Header } from "../../components/Header/Header";
import { FixedButtons } from "../../components/StyledButtons/FixedButtonsAllScreens";




const BlogPage = () => {
  

  return (
    <div>
     
        <StyledBlogContainer >
        
          <Header/>
          <BlogBody />
          <div style={{width: "95%", position: "sticky", bottom: "20px"}}>
                <FixedButtons/>

        </div>
          <Footer/>
        </StyledBlogContainer>
     
       
     
    </div>
  );
};

export default BlogPage;
