import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { IoIosCloseCircleOutline } from "react-icons/io";

 const BlogPostModal = ({ selectedPost, closeModal }) => {
  const [isOpen, setIsOpen] = useState(!!selectedPost);

  const modalAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "translateY(0%)" : "translateY(-100%)",
  });

  return (
    <animated.div style={modalAnimation}>
      <button
        onClick={() => {
          closeModal();
          setIsOpen(false);
        }}
        style={{
          backgroundColor: "transparent",
          border: "0",
          position: "sticky",
          top: "0%",
          right: "100%",
          height: "22px",
        }}
      >
        <IoIosCloseCircleOutline size={26} />
      </button>
      {selectedPost && (
        <>
          <div className="BlogPostModal">
            <h2>{selectedPost.title}</h2>
            <div className="post-render" dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
          </div>
        </>
      )}
    </animated.div>
  );
};

export default BlogPostModal