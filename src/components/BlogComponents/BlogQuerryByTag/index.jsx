import React, { useContext, useState, useEffect } from "react";
import { AccessTokenContext } from "../../StyledButtons/ButtonLogInGoogle";
import { getFirestore, collection, getDocs, updateDoc, where, query } from "firebase/firestore";
import "../../../firebaseconfig";
import { BlogBodyByQuerryOfTag } from "./style";
import { FcLike, FcDislike } from "react-icons/fc";
import '../../../App.css'
import { RiDislikeLine, RiHeartLine  } from "react-icons/ri";
import GlobalStyleDefault from "../../../GlobalStyles";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom"; // Adicionado useParams para obter parâmetros da URL
import { handleDislike, handleLike } from "../handlePostsFunctions";
import SocialSharer from "../../StyledButtons/LinkSocialSharer";
import { useBlogContext } from "../BlogBody/BlogContext";
import { Header } from "../../Header/Header";
import { Footer } from "../../Footer/Footer";
import { CgArrowLeft, CgArrowRight } from "react-icons/cg";

export const BlogBodyByTag = () => {
  const { userData } = useContext(AccessTokenContext);
  const { globalPosts, setGlobalPosts } = useBlogContext();
  const [posts, setPosts] = useState([]);
  // eslint-disable-next-line
  const [IsOpen, setIsOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null); // Track the selected post for the modal
  const { tag } = useParams(); // Obtendo a tag da URL usando useParams
  console.log("tag:" + tag)
  console.log( globalPosts)
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
    setPosts(postsData);
  };

  useEffect(() => {
    if (globalPosts.length === 0) {
      fetchPosts();
      setGlobalPosts(posts);
    }
  }, [globalPosts, posts, setGlobalPosts]); // Chama fetchPosts uma vez, quando o componente é montado

  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };
  const navigate = useNavigate()
  
  return (
    <BlogBodyByQuerryOfTag>
      <Header/>
      <>
      <h1 onClick={() => navigate("/blog")} style={{display: "flex", justifyContent: "center", cursor: "pointer", textDecoration: "underline", position: "relative", left: "15px", width: "fit-content"}}><CgArrowLeft/> Ir para o Blog Principal</h1>
      <h2 style={{display: "flex", justifyContent: "center", cursor: "pointer", position: "relative", left: "15px", width: "fit-content"}}>Posts com a tag: {tag}</h2>
        {globalPosts.length !== 0 ? (
          <ul>
            {globalPosts
              .filter(post => {
                // Normaliza as tags para comparar sem acentuação ou casing
                const normalizedTag = removeAccents(tag.toLowerCase());
                const normalizedPostTags = post.tags.map(tag => removeAccents(tag.toLowerCase()));
                return normalizedPostTags.includes(normalizedTag);
              }) // Filtrando os posts que incluem a tag
              .map((post) => (
                <li key={post.id} className="PostDiv">
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
                  <div onClick={() => openModal(post.id)}  style={{ backgroundImage: `url(${post.imageURL})` }} className="PostImageContainer"></div>
                  <p>{post.sub_title}</p>
                  <div className="reactionContainerWrapper">
                    <div className="reactionContainer" onClick={() => handleLike(post.id, globalPosts, setGlobalPosts, userData)}>
                      <i className="reactionCounterNumber">{`${(post.likes && post.likes.length) || 0}`}</i>
                      <button  id="likeButton">
                        {post.likes && post.likes.includes(userData.email) ? <FcLike size={"1rem"} /> : <RiHeartLine size={"1rem"} color={GlobalStyleDefault.colors.textwhite} />}
                      </button>
                    </div>
                    <div className="reactionContainer" onClick={() => handleDislike(post.id, globalPosts, setGlobalPosts, userData)}>
                      <i className="reactionCounterNumber">{`${(post.dislikes && post.dislikes.length) || 0}`}</i>
                      <button  id="dislikeButton">
                        {post.dislikes && post.dislikes.includes(userData.email) ? <FcDislike size={"1rem"} /> : <RiDislikeLine size={"1rem"} color={GlobalStyleDefault.colors.textwhite} />}
                      </button>
                    </div>
                    <div className="SocialSharerContainer">
                      <SocialSharer />
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        ) : (
          <p>Sem Posts</p>
        )}
      </>
      <Outlet/>
      <Footer/>
    </BlogBodyByQuerryOfTag>
  );
};
