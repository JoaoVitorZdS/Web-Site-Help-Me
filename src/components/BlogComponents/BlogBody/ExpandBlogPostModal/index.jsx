import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { IoIosCloseCircleOutline } from "react-icons/io";
import SocialSharer from "../../../StyledButtons/LinkSocialSharer";
import "./styles.css";

const BlogPostModal = ({ selectedPost, closeModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(!!selectedPost); // Atualiza isOpen quando selectedPost muda
  }, [selectedPost]);

  const modalAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "translateY(0%)" : "translateY(-100%)",
  });

  return (
    <animated.div style={modalAnimation}>
      {isOpen && selectedPost && ( // Verifica se selectedPost não é nulo
        <div className="BlogPostModal">
         
          <h2>{selectedPost.title}</h2>
          <div
            className="post-render"
            dangerouslySetInnerHTML={{ __html: selectedPost.content }}
          />
        </div>
      )}
    </animated.div>
  );
};

export default BlogPostModal;
