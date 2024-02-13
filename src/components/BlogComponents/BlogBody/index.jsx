import React, { useContext, useState, useEffect } from "react";
import { AccessTokenContext } from "../../StyledButtons/ButtonLogInGoogle";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import "../../../firebaseconfig";
import { StyledBlogBody } from "./style";
import { FcLike, FcDislike } from "react-icons/fc";
import "../../../App.css";
import { RiArrowRightUpFill, RiDislikeLine, RiHeartLine } from "react-icons/ri";
import Modal from "react-modal";
import GlobalStyleDefault from "../../../GlobalStyles";
import BlogPostModal from "./ExpandBlogPostModal";
import { Link, Outlet } from "react-router-dom";
import { useBlogContext } from "./BlogContext";
import { handleDislike, handleLike } from "../handlePostsFunctions";
import SocialSharer from "../../StyledButtons/LinkSocialSharer";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaArrowLeft, FaArrowRight, FaMagnifyingGlass } from "react-icons/fa6";

export const BlogBody = () => {
  const { userData } = useContext(AccessTokenContext);
  const { globalPosts, setGlobalPosts } = useBlogContext();
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");
  const [IsOpen, setIsOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const openModal = (postId) => {
    const selectedPost = globalPosts.find((post) => post.id === postId);
    setSelectedPost(selectedPost);
    console.log(selectedPost);
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
    setGlobalPosts(postsData);
  };

  useEffect(() => {
    if (globalPosts.length === 0) {
      fetchPosts();
    }
  }, [globalPosts, setGlobalPosts]);

  useEffect(() => {
    const filteredPosts = globalPosts.filter(
      (post) =>
        post.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(searchTerm.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) ||
        post.content.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(searchTerm.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) ||
        post.tags.some((tag) =>
          tag.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(searchTerm.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
        )
    );
    setFilteredPosts(filteredPosts);
  }, [globalPosts, searchTerm]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredPosts.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <StyledBlogBody>
      <>
      <div className="searchContainer">

        <div className="searchBar">
          <div>

          <FaMagnifyingGlass/>
          <input
            type="text"
            placeholder="Pesquisar por palavra-chave..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            </div>
        </div>
        <div className="pagination">
          <button onClick={prevPage} disabled={currentPage === 1}>
            <FaArrowLeft/>
          </button>
          <span>
            Página {currentPage} de {Math.ceil(filteredPosts.length / postsPerPage)}
          </span>
          <button
            onClick={nextPage}
            disabled={
              currentPage === Math.ceil(filteredPosts.length / postsPerPage)
            }
          >
            <FaArrowRight/>
          </button>
        </div>
              </div>
        <ul>
          {currentPosts.map((post) => (
            <li key={post.id} className="PostDiv">
              <div className="TitleContainer">
                <Link
                  to={`/Blog/${post.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div>
                    <h3
                      onClick={() => openModal(post.id)}
                      style={{ fontFamily: "DolceVita", alignSelf: "center" }}
                    >{`${post.title}`}</h3>
                  </div>
                  <div className="tagToFullPageContainer">
                    <Link
                      to={`/Blog/${post.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <i className="tagToFullPage"> Ver Página Completa</i>
                    </Link>
                  </div>
                </Link>
              </div>
              <i style={{ fontSize: "12px" }}>Criado por: {`${post.created_by}`}</i>
              <div
                onClick={() => openModal(post.id)}
                style={{ backgroundImage: `url(${post.imageURL})` }}
                className="PostImageContainer"
              ></div>
              <p>{post.sub_title}</p>
              <div className="reactionContainerWrapper">
                <div
                  className="reactionContainer"
                  onClick={() =>
                    handleLike(post.id, globalPosts, setGlobalPosts, userData)
                  }
                >
                  <i className="reactionCounterNumber">{`${(post.likes &&
                    post.likes.length) ||
                    0}`}</i>
                  <button id="likeButton">
                    {post.likes && post.likes.includes(userData.email) ? (
                      <FcLike size={"1rem"} />
                    ) : (
                      <RiHeartLine
                        size={"1rem"}
                        color={GlobalStyleDefault.colors.textwhite}
                      />
                    )}
                  </button>
                </div>
                <div
                  className="reactionContainer"
                  onClick={() =>
                    handleDislike(post.id, globalPosts, setGlobalPosts, userData)
                  }
                >
                  <i className="reactionCounterNumber">{`${(post.dislikes &&
                    post.dislikes.length) ||
                    0}`}</i>
                  <button id="dislikeButton">
                    {post.dislikes && post.dislikes.includes(userData.email) ? (
                      <FcDislike size={"1rem"} />
                    ) : (
                      <RiDislikeLine
                        size={"1rem"}
                        color={GlobalStyleDefault.colors.textwhite}
                      />
                    )}
                  </button>
                </div>
                <div className="SocialSharerContainer">
                  <SocialSharer />
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="pagination">
          <button onClick={prevPage} disabled={currentPage === 1}>
          <FaArrowLeft/>
          </button>
          <span>
            Página {currentPage} de {Math.ceil(filteredPosts.length / postsPerPage)}
          </span>
          <button
            onClick={nextPage}
            disabled={
              currentPage === Math.ceil(filteredPosts.length / postsPerPage)
            }
          >
            <FaArrowRight/>
          </button>
        </div>
        <Modal
          isOpen={!!selectedPost}
          onRequestClose={() => closeModal()}
          contentLabel="Post Modal"
         
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: "5",
              display: "flex",
              justifyContent: "center",
              alignContent: "center"
            },
            content: {
              backgroundColor: `${GlobalStyleDefault.colors.offwhite}`,
              width: "90%",
              margin: "0 auto",
              overflowY: "auto",
              maxHeight: "90vh",
              padding: "3%",
              display: "grid",
              gridTemplateColumns: "7fr 1fr",
              justifyContent: "center",
              gap: "2%",
              left: "2%",
              zIndex: 9
            },
            
          }}
        >
          <button
            onClick={() => closeModal()}
            style={{
              backgroundColor: "transparent",
              border: "0",
              position: "fixed",
              top: "10%",
              right: "10%",
              height: "22px",
              cursor: "pointer",
            }}
          >
            <IoIosCloseCircleOutline size={26} />
          </button>
          <BlogPostModal selectedPost={selectedPost} closeModal={closeModal} />
          {selectedPost && (
            <>
              <div className="postOwnerDiv">
                <h5>Escrito por:</h5>
                <br />
                <h3> {selectedPost.created_by}</h3>
                <ul className="tagsList">
                  {selectedPost.tags.map((tag) => (
                    <li key={tag}>
                      <button className="button" data-text="Awesome">
                        <span className="actual-text">&nbsp;{tag}&nbsp;</span>
                        <span
                          aria-hidden="true"
                          className="hover-text"
                        >
                          &nbsp;{tag}&nbsp;
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="socialNav"
                style={{
                  position: "fixed",
                  bottom: "9%",
                  right: "9%",
                  width: "fit-content",
                }}
              >
                <SocialSharer />
                
              </div>
            </>
          )}
        </Modal>
      </>
      <Outlet />
    </StyledBlogBody>
  );
};
