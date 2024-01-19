import styled from "styled-components";
import GlobalStyleDefault from "../../../GlobalStyles";


export const StyledGalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
  
`;

export const Post = styled.div`
  width: 200px;
  height: 300px;
  perspective: 500px;
  border-radius: 5px;
  .card {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.8s ease;
    border-radius: 5px;
    box-shadow: ${GlobalStyleDefault.shadows.card};
  }
  .card:hover {
    transform: rotateY(180deg);
  }
  .card-face {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
  }
  .card-face-front {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    cursor: pointer;
    border-radius: 5px;

  }
  .card-face-back {
    transform: rotateY(180deg);
    display: flex;
    justify-content: center;
    align-items: end;
    background-color: transparent;
    border: 1px solid #ccc;
    border-radius: 5px;

  }
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }
  .card-content {
    width: 100%;
    height: 30%;
    border-radius: 5px 5px 0px 0px;
    text-align: center;
    margin-top: 10px;
    background-color: #00000066;
    z-index: 5;
  }
  .card-title {
    color: white
    ;
  }
  .card-text {
    color: white
    ;
  }
  h3 {
    margin-bottom: 5px;
  }


`;
