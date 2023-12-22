import { Post, StyledGalleryContainer } from "./style";
import cardBack from '../../../assets/imgs/pinkClouds3.jpg';
import cardFront from '../../../assets/imgs/Candle.jpg';
export function Gallery() {
    // Supondo que posts seja uma lista de dados de postagens
    const posts = [
      { id: 1, title: 'Post 1', image: '', content: 'Conteúdo do Post 1' },
      { id: 2, title: 'Post 2', image: 'url-da-imagem-2.jpg', content: 'Conteúdo do Post 2' },
      { id: 3, title: 'Post 2', image: 'url-da-imagem-2.jpg', content: 'Conteúdo do Post 2' },
      { id: 4, title: 'Post 2', image: 'url-da-imagem-2.jpg', content: 'Conteúdo do Post 2' },
      { id: 5, title: 'Post 2', image: 'url-da-imagem-2.jpg', content: 'Conteúdo do Post 2' },
      { id: 6, title: 'Post 2', image: 'url-da-imagem-2.jpg', content: 'Conteúdo do Post 2' },
      { id: 7, title: 'Post 2', image: 'url-da-imagem-2.jpg', content: 'Conteúdo do Post 2' },
      { id: 8, title: 'Post 2', image: 'url-da-imagem-2.jpg', content: 'Conteúdo do Post 2' },
      { id: 9, title: 'Post 2', image: 'url-da-imagem-2.jpg', content: 'Conteúdo do Post 2' },
      { id: 10, title: 'Post 2', image: 'url-da-imagem-2.jpg', content: 'Conteúdo do Post 2' },
      // Adicione mais objetos de postagem conforme necessário
    ];
  
    return (
        <StyledGalleryContainer>
          {posts.map(post => (
            <Post key={post.id}>
              <div className="card">
                <div className="card-face card-face-front">
                  <img src={cardFront} alt={post.title} />
                </div>
                <div className="card-face card-face-back">
                  <img src={cardBack} alt="Card Back" />
              <div className="card-content">
                <h3 className="card-title">{post.title}</h3>
                <p className="card-text">{post.content}</p>
              </div>
              </div>
                </div>
            </Post>
          ))}
        </StyledGalleryContainer>
      );
    }