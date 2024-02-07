import React from "react";
import { Post, StyledGalleryContainer } from "./style";
import cardBack from '../../../assets/imgs/pinkClouds3.jpg';
import cardFront from '../../../assets/imgs/Candle.jpg';
// eslint-disable-next-line
import { useNavigate } from "react-router-dom";
import { useBlogContext } from "../../BlogComponents/BlogBody/BlogContext";
import ButtonSeeMore from "../../StyledButtons/SeeMoreAnimatedButton";
import { FaArrowRight } from "react-icons/fa6";

export function Gallery() {
  const { globalPosts, setGlobalPosts } = useBlogContext();
  

  const gerarChaveAleatoria = () => {
    return Math.random()}
 
  // const navigate = useNavigate();

  return (
    <StyledGalleryContainer>
      {globalPosts.map(post => (
        console.log(post),
      <div className="card">

        <div className="content">

          <div className="back">
            
            <div className="back-content">
              
              <h4>{post.title}</h4>

            </div>
              
              
          </div>
            
          <div className="front">
            
          <div className="img">
        <div className="circle">
        </div>
        <div className="circle" id="right">
        </div>
        <div className="circle" id="bottom">
        </div>
      </div>
      <div className="front-content">
      <ul className="tagsList">
  {post.tags.map((tag) => (
    <li key={tag}>
      <button class="button" data-text="Awesome">
        <span class="actual-text">&nbsp;{tag}&nbsp;</span>
        <span aria-hidden="true" class="hover-text">&nbsp;{tag}&nbsp;</span>
      </button>
    </li>
  ))}
</ul>
      <ButtonSeeMore destiny={`/blog/${post.id}`} text={"Abrir artigo"} icon={<FaArrowRight/> }/>
      </div>
          </div>
            
        </div>

      </div>

        
      ))}
      {globalPosts.map(post => (
        console.log(post),
      <div className="card">

        <div className="content">

          <div className="back">
            
            <div className="back-content">
              
              <h4>{post.title}</h4>

            </div>
              
              
          </div>
            
          <div className="front">
            
          <div className="img">
        <div className="circle">
        </div>
        <div className="circle" id="right">
        </div>
        <div className="circle" id="bottom">
        </div>
      </div>
      <div className="front-content">
      <ul className="tagsList">
  {post.tags.map((tag) => (
    <li key={tag}>
      <button class="button" data-text="Awesome">
        <span class="actual-text">&nbsp;{tag}&nbsp;</span>
        <span aria-hidden="true" class="hover-text">&nbsp;{tag}&nbsp;</span>
      </button>
    </li>
  ))}
</ul>
      <ButtonSeeMore destiny={`/blog/${post.id}`} text={"Abrir artigo"} icon={<FaArrowRight/> }/>
      </div>
          </div>
            
        </div>

      </div>

        
      ))}
      {globalPosts.map(post => (
        console.log(post),
      <div className="card">

        <div className="content">

          <div className="back">
            
            <div className="back-content">
              
              <h4>{post.title}</h4>

            </div>
              
              
          </div>
            
          <div className="front">
            
          <div className="img">
        <div className="circle">
        </div>
        <div className="circle" id="right">
        </div>
        <div className="circle" id="bottom">
        </div>
      </div>
      <div className="front-content">
      <ul className="tagsList">
  {post.tags.map((tag) => (
    <li key={tag}>
      <button class="button" data-text="Awesome">
        <span class="actual-text">&nbsp;{tag}&nbsp;</span>
        <span aria-hidden="true" class="hover-text">&nbsp;{tag}&nbsp;</span>
      </button>
    </li>
  ))}
</ul>
      <ButtonSeeMore destiny={`/blog/${post.id}`} text={"Abrir artigo"} icon={<FaArrowRight/> }/>
      </div>
          </div>
            
        </div>

      </div>

        
      ))}
      {globalPosts.map(post => (
        console.log(post),
      <div className="card">

        <div className="content">

          <div className="back">
            
            <div className="back-content">
              
              <h4>{post.title}</h4>

            </div>
              
              
          </div>
            
          <div className="front">
            
          <div className="img">
        <div className="circle">
        </div>
        <div className="circle" id="right">
        </div>
        <div className="circle" id="bottom">
        </div>
      </div>
      <div className="front-content">
      <ul className="tagsList">
  {post.tags.map((tag) => (
    <li key={tag}>
      <button class="button" data-text="Awesome">
        <span class="actual-text">&nbsp;{tag}&nbsp;</span>
        <span aria-hidden="true" class="hover-text">&nbsp;{tag}&nbsp;</span>
      </button>
    </li>
  ))}
</ul>
      <ButtonSeeMore destiny={`/blog/${post.id}`} text={"Abrir artigo"} icon={<FaArrowRight/> }/>
      </div>
          </div>
            
        </div>

      </div>

        
      ))}
      {globalPosts.map(post => (
        console.log(post),
      <div className="card">

        <div className="content">

          <div className="back">
            
            <div className="back-content">
              
              <h4>{post.title}</h4>

            </div>
              
              
          </div>
            
          <div className="front">
            
          <div className="img">
        <div className="circle">
        </div>
        <div className="circle" id="right">
        </div>
        <div className="circle" id="bottom">
        </div>
      </div>
      <div className="front-content">
      <ul className="tagsList">
  {post.tags.map((tag) => (
    <li key={tag}>
      <button class="button" data-text="Awesome">
        <span class="actual-text">&nbsp;{tag}&nbsp;</span>
        <span aria-hidden="true" class="hover-text">&nbsp;{tag}&nbsp;</span>
      </button>
    </li>
  ))}
</ul>
      <ButtonSeeMore destiny={`/blog/${post.id}`} text={"Abrir artigo"} icon={<FaArrowRight/> }/>
      </div>
          </div>
            
        </div>

      </div>

        
      ))}
    </StyledGalleryContainer>
  );
}
