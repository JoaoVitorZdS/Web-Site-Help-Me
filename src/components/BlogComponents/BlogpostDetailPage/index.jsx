import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBlogContext } from "../BlogBody/BlogContext";
import { Header } from "../../Header/Header";
import { Footer } from "../../Footer/Footer";
import { StyledBlogPostDetailBody } from "./style";
import SocialSharer from "../../StyledButtons/LinkSocialSharer";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { CgArrowLeft } from "react-icons/cg";

const BlogPostDetail = () => {
  const { postId } = useParams();
  const { globalPosts, setGlobalPosts } = useBlogContext();
  const postIdNumber = parseInt(postId, 10);
  const navigate = useNavigate();

  const [selectedPost, setSelectedPost] = useState(null);

  const handleTagClick = (tag) => {
    navigate(`/blog/query/${tag}`);
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
    } else {
      const post = globalPosts.find((post) => post.id === postIdNumber);
      setSelectedPost(post);
    }
  }, [globalPosts, postIdNumber, setGlobalPosts]);

  if (!selectedPost) {
    return <div>Carregando...</div>;
  }
  function goBack() {
    window.history.back();
    console.log("voltei")
  }

  return (
    <StyledBlogPostDetailBody>
      <Header />
      <div className="MainDiv">
      <button onClick={goBack} className="backButton"><CgArrowLeft size={30}/><b style={{fontSize: "15px"}}>Voltar</b></button>
        <div className="PostDiv">
          <h2 style={{marginTop: "10%"}}>{selectedPost.title}</h2>
          <div
            className="post-render"
            dangerouslySetInnerHTML={{ __html: selectedPost.content }}
          />
        </div>
        <div className="SideBar">
          <div className="postOwnerDiv">
            <h5>Escrito por:</h5>
            <h3>{selectedPost.created_by}</h3>
            <ul className="tagsList">
              {selectedPost.tags.map((tag) => (
                <li key={tag} onClick={() => handleTagClick(tag)}>
                  <button class="button" data-text="Awesome">
                    <span class="actual-text">&nbsp;{tag}&nbsp;</span>
                    <span aria-hidden="true" class="hover-text">
                      &nbsp;{tag}&nbsp;
                    </span>
                  </button>
                </li>
              ))}
            </ul>
            <SocialSharer />
            
          </div>
        </div>
      </div>
      <Footer />
    </StyledBlogPostDetailBody>
  );
};

export default BlogPostDetail;
