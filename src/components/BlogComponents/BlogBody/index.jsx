import React, { useContext, useState, useEffect } from "react";
import { AccessTokenContext } from "../../StyledButtons/ButtonLogInGoogle";
import { getFirestore, collection, getDocs, updateDoc, where, query } from "firebase/firestore";
import "../../../firebaseconfig";
import { StyledBlogBody } from "./style";
import { FcLike, FcDislike } from "react-icons/fc";
import '../../../App.css'
import { RiArrowRightUpFill, RiDislikeLine, RiHeartLine  } from "react-icons/ri";
import Modal from "react-modal";
import GlobalStyleDefault from "../../../GlobalStyles";
import BlogPostModal from "./ExpandBlogPostModal";
import { Link, Outlet } from "react-router-dom";
import { useBlogContext } from "./BlogContext";
import { handleDislike, handleLike } from "../handlePostsFunctions";


export const BlogBody = () => {
  const { userData } = useContext(AccessTokenContext);
  const { globalPosts, setGlobalPosts } = useBlogContext();
  const [posts, setPosts] = useState([]);
  // eslint-disable-next-line
  const [IsOpen, setIsOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null); // Track the selected post for the modal
  const openModal = (postId) => {
    const selectedPost = globalPosts.find((post) => post.id === postId);
    setSelectedPost(selectedPost);
    console.log(selectedPost)
  };

  const closeModal = () => {
    setSelectedPost(null);
  };


  const fetchPosts = async () => {
    const db = getFirestore();
    const postsCollection = collection(db, `posts`);
    const postsSnapshot = await getDocs(postsCollection);
    const postsData = postsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setPosts(postsData);
  };

  useEffect(() => {
    console.log("GLobalPosts:",globalPosts)
    if (globalPosts.length === 0) {
      fetchPosts();
      setGlobalPosts(posts)
    }
  }, [globalPosts, posts, setGlobalPosts]); // Chama fetchPosts uma vez, quando o componente é montado

  return (
    <StyledBlogBody>
    
        <>  
          {globalPosts.length !== 0 ? (
            <ul>
              {globalPosts.map((post) => (
                <li key={post.id} className="PostDiv"  >
                  <div className="TitleContainer">
                    <Link to={`/Blog/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div>
                      <h3 onClick={() => openModal(post.id)} style={{fontFamily: "DolceVita", alignSelf: "center"}}>{`${post.title}`}</h3>
                    </div>
                    <div className="tagToFullPageContainer">
                      <Link to={`/Blog/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <i className="tagToFullPage"> Ver Página Completa</i>
                      </Link>
                    </div>
                    </Link>
                  </div>
                  <i style={{fontSize: "12px"}}>Criado por: {`${post.created_by}`}</i>
                  <div onClick={() => openModal(post.id)}  style={{ alignSelf: "center", backgroundImage: `url(${post.imageURL})`, backgroundPosition: "center", backgroundSize: "contain", height:"30vh", width: "40vw", borderRadius: "30px" }} className="PostImageContainer">
                  </div>
                  <p>{post.sub_title}</p>
                  <div className="reactionContainerWrapper" >
                    <div className="reactionContainer">

                    <i className="reactionCounterNumber">{`${(post.likes && post.likes.length) || 0}`}</i>
                      <button onClick={() => handleLike(post.id, globalPosts, setGlobalPosts, userData)} id="likeButton">
                        {post.likes && post.likes.includes(userData.email) ? <FcLike size={"1rem"} /> : <RiHeartLine size={"1rem"}  />}
                      </button>
                    </div>
                    <div className="reactionContainer">

                    <i className="reactionCounterNumber">{`${(post.dislikes && post.dislikes.length) || 0}`}</i>
                      <button onClick={() => handleDislike(post.id, globalPosts, setGlobalPosts, userData)} id="dislikeButton">
                       
                        {post.dislikes && post.dislikes.includes(userData.email) ? <FcDislike size={"1rem"} /> : <RiDislikeLine size={"1rem"} />}
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Sem Posts</p>
          )}
          {/* Modal for displaying the complete content of the selected post */}
          <Modal
        isOpen={!!selectedPost}
        onRequestClose={() => {
          closeModal();
          setIsOpen(false);
        }}
        contentLabel="Post Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: "5",
          },
          content: {
            backgroundColor: `${GlobalStyleDefault.colors.offwhite}`,
            width: "90%",
            margin: "auto",
            overflowY: "auto",
            maxHeight: "90vh",
            padding: "3%",
            display: "flex",
            justifyContent: "center",
          },
        }}
      >
        <BlogPostModal selectedPost={selectedPost} closeModal={closeModal} />
      </Modal>
        </>
      <Outlet/>
    </StyledBlogBody>
  );
};
