import React, { useEffect } from "react";
import { StyledContainer, StyledGalleryContainer, StyledSlider } from "./style";

import { useNavigate } from "react-router-dom";
import { useBlogContext } from "../../BlogComponents/BlogBody/BlogContext";
import ButtonSeeMore from "../../StyledButtons/SeeMoreAnimatedButton";
import { FaArrowRight } from "react-icons/fa6";
import curvedTube from "../../../assets/imgs/3D Metalic/curvedTube.png"
import ring from "../../../assets/imgs/3D Metalic/ThickDonnut.png"
import metatron from "../../../assets/imgs/3D Metalic/Metatron.png"
import sakura from "../../../assets/imgs/3D Metalic/sakura.png"
import sakura2 from "../../../assets/imgs/3D Metalic/sakura2.png"
import sakura3 from "../../../assets/imgs/3D Metalic/sakura3.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importe os estilos CSS da AOS

export function Gallery() {
  // eslint-disable-next-line
  const { globalPosts, setGlobalPosts } = useBlogContext();

 
  const navigate = useNavigate();
  const handleTagClick = (tag) => {
    navigate(`/blog/query/${tag}`);
  };
  const psychologyPosts = globalPosts.filter(post => post.tags.includes('Psicologia'));
  const lawPosts = globalPosts.filter(post => post.tags.includes('Advocacia'));
  useEffect(() => {
    // Inicialize a AOS com suas opções de configuração
    AOS.init({
      // Opções de configuração aqui
    });

    // Retorne uma função de limpeza para desativar a AOS quando o componente for desmontado
    return () => {
      AOS.refresh(); // Reverta as animações para a posição original antes de desmontar o componente
    };
  }, []); // O segundo argumento [] garante que o useEffect seja executado apenas uma vez após a montagem do componente
  return (
    <StyledContainer>
      
    
    <StyledGalleryContainer >
      <>
        <h3 className="titleCategory">Psicologia</h3>
        <StyledSlider>
        
        
        <section id="produtosSection">
                
                <div className="container-produtos">
                

                    <div className="categoriasSlide slick-initialized slick-slider">
                        <div className="slick-list draggable">
                            <div className="slick-track" style={{ opacity: 1, width: "94%", transform: "translate3d(0px, 0px, 0px)", display: "flex", gap: "15px", justifyContent: "center" }}>
      {psychologyPosts.slice(0, 6).map(post => (
                                <div className="slick-slide slick-current slick-active"   
                                 data-slick-index="0" aria-hidden="false" >
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
        <h3 className="titleCategory">Advocacia</h3>
        <StyledSlider>
        
        
        <section id="produtosSection">
             
                <div className="container-produtos">
                    
                <div className="categoriasSlide slick-initialized slick-slider">
                        <div className="slick-list draggable">
                            <div className="slick-track" style={{ opacity: 1, width: "94%", transform: "translate3d(0px, 0px, 0px)", display: "flex", gap: "5px", justifyContent: "center" }}>
      {lawPosts.slice(0, 6).map(post => (
                                <div className="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" >
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
