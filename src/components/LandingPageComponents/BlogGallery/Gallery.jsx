import React from "react";
import { StyledContainer, StyledGalleryContainer, StyledSlider } from "./style";

import { useNavigate } from "react-router-dom";
import { useBlogContext } from "../../BlogComponents/BlogBody/BlogContext";
import ButtonSeeMore from "../../StyledButtons/SeeMoreAnimatedButton";
import { FaArrowRight } from "react-icons/fa6";

export function Gallery() {
  // eslint-disable-next-line
  const { globalPosts, setGlobalPosts } = useBlogContext();

 
  const navigate = useNavigate();
  const handleTagClick = (tag) => {
    navigate(`/blog/query/${tag}`);
  };
  const psychologyPosts = globalPosts.filter(post => post.tags.includes('Psicologia'));
  const lawPosts = globalPosts.filter(post => post.tags.includes('Advocacia'));
  
  return (
    <StyledContainer>
      
    
    <StyledGalleryContainer>
      <>
        <h3 >Psicologia</h3>
        <StyledSlider>
        
        
        <section id="produtosSection">
                
                <div className="container-produtos">
                    <div className="categoriasSlide slick-initialized slick-slider">
                        <div className="slick-list draggable">
                            <div className="slick-track" style={{ opacity: 1, width: "94%", transform: "translate3d(0px, 0px, 0px)", display: "flex", gap: "5px", justifyContent: "center" }}>
      {psychologyPosts.slice(0, 6).map(post => (
                                <div className="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{ width: "230px" }}>
                                    <div>
                                        <div style={{ width: "100%", display: "inline-block" }}>
                                            <div className="imagem-produto" data-bgimage={post.imageURL} data-flushed="1" style={{ backgroundImage: `url(${post.imageURL})` }}>
                                          
                                                
                                                    <div className="overlay">
                                                        <h3>
                                                            <span className="titulo-produto">{post.title}</span>
                                                        </h3>
                                                        <div className="informacoes">
                                                            <p>{post.sub_title}</p>
                                                            <ButtonSeeMore destiny={`/blog/${post.id}`} text={"Abrir artigo"} icon={<FaArrowRight/> }/>
                                                        </div>
                                                    </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                                
                                </div>
                    </div>
                        </div>
                    </div>
              
            </section>


</StyledSlider>
      </>
      
     
    </StyledGalleryContainer>

    <StyledGalleryContainer>
      <>
        <h3 >Advocacia</h3>
        <StyledSlider>
        
        
        <section id="produtosSection">
             
                <div className="container-produtos">
                    <div className="categoriasSlide slick-initialized slick-slider">
                        <div className="slick-list draggable">
                            <div className="slick-track" style={{ opacity: 1, width: "94%", transform: "translate3d(0px, 0px, 0px)", display: "flex", gap: "5px", justifyContent: "center" }}>
      {lawPosts.slice(0, 6).map(post => (
                                <div className="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{ width: "230px" }}>
                                    <div>
                                        <div style={{ width: "100%", display: "inline-block" }}>
                                            <div className="imagem-produto" data-bgimage={post.imageURL} data-flushed="1" style={{ backgroundImage: `url(${post.imageURL})` }}>
                                            
                                                
                                                    <div className="overlay">
                                                        <h3>
                                                            <span className="titulo-produto">{post.title}</span>
                                                        </h3>
                                                        <div className="informacoes">
                                                            <p>{post.sub_title}</p>
                                                            <ButtonSeeMore destiny={`/blog/${post.id}`} text={"Abrir artigo"} icon={<FaArrowRight/> }/>
                                                        </div>
                                                    </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                                
                                </div>
                    </div>
                        </div>
                    </div>
              
            </section>


</StyledSlider>
      </>
      
     
    </StyledGalleryContainer>


    </StyledContainer>
  
  );
}
