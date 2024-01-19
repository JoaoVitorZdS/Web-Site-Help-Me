import React, { useContext, useState, useEffect } from "react";
import { AccessTokenContext } from "../../StyledButtons/ButtonLogInGoogle";
import { getFirestore, collection, getDocs, doc, updateDoc } from "firebase/firestore";
import "../../../firebaseconfig";
import { StyledDashboardBody } from "./style";
import { FcLike, FcDislike } from "react-icons/fc";
import '../../../App.css'

import { RiDislikeLine, RiHeartLine  } from "react-icons/ri";
import ReactModal from "react-modal";

export const BlogBody = () => {
  const { userData, accessToken } = useContext(AccessTokenContext);
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null); // Track the selected post for the modal
  const openModal = (postId) => {
    const selectedPost = posts.find((post) => post.id === postId);
    setSelectedPost(selectedPost);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };
  const handleLike = async (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        const userLiked = post.likes && post.likes.includes(userData.email);
  
        let updatedLikes = post.likes ? [...post.likes] : [];
        let updatedDislikes = post.dislikes ? [...post.dislikes] : [];
  
        if (userLiked) {
          updatedLikes = updatedLikes.filter((email) => email !== userData.email);
        } else {
          updatedLikes.push(userData.email);
          updatedDislikes = updatedDislikes.filter((email) => email !== userData.email);
        }
  
        updateLikesInFirestore(postId, updatedLikes);
        updateDislikesInFirestore(postId, updatedDislikes);
  
        return { ...post, likes: updatedLikes, dislikes: updatedDislikes };
      }
  
      return post;
    });
  
    setPosts(updatedPosts);
  };
  
  const handleDislike = async (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        const userDisliked = post.dislikes && post.dislikes.includes(userData.email);
  
        let updatedDislikes = post.dislikes ? [...post.dislikes] : [];
        let updatedLikes = post.likes ? [...post.likes] : [];
  
        if (userDisliked) {
          updatedDislikes = updatedDislikes.filter((email) => email !== userData.email);
        } else {
          updatedDislikes.push(userData.email);
          updatedLikes = updatedLikes.filter((email) => email !== userData.email);
        }
  
        updateLikesInFirestore(postId, updatedLikes);
        updateDislikesInFirestore(postId, updatedDislikes);
  
        return { ...post, likes: updatedLikes, dislikes: updatedDislikes };
      }
  
      return post;
    });
  
    setPosts(updatedPosts);
  };
  
  
  

  const updateLikesInFirestore = async (postId, updatedLikes) => {
    const db = getFirestore();
    const postsCollection = collection(db, "posts");
    const postRef = doc(postsCollection, postId.toString());
    await updateDoc(postRef, { likes: updatedLikes });
  };
  
  
  
  
  
  const updateDislikesInFirestore = async (postId, updatedDislikes) => {
    const db = getFirestore();
    const postsCollection = collection(db, "posts");
    const postRef = doc(postsCollection, postId.toString());
    await updateDoc(postRef, { dislikes: updatedDislikes });
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
    fetchPosts();
  }, []); // Chama fetchPosts uma vez, quando o componente é montado
  
  return (
    <StyledDashboardBody>
      {accessToken ? (
        <>  
          {posts.length !== 0 ? (
            <ul>
              {posts.map((post) => (
                <li key={post.id} className="PostDiv" >
                  <h3 style={{fontFamily: "DolceVita"}}>{`${post.title}`}</h3>
                  <div onClick={() => openModal(post.id)} style={{ backgroundImage: `url(${post.imageURL})` }} className="PostImageContainer"></div>
                  <i style={{fontSize: "12px"}}>Criado por: {`${post.created_by}`}</i>
                  <p>{post.content}</p>
                  <div >
                    <i>{`${(post.likes && post.likes.length) || 0}`}</i>
                      <button onClick={() => handleLike(post.id)} id="likeButton">
                        {post.likes && post.likes.includes(userData.email) ? <FcLike /> : <RiHeartLine  />}
                      </button>
                    <i>{`${(post.dislikes && post.dislikes.length) || 0}`}</i>
                      <button onClick={() => handleDislike(post.id)} id="dislikeButton">
                       
                        {post.dislikes && post.dislikes.includes(userData.email) ? <FcDislike /> : <RiDislikeLine />}
                      </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Sem Posts</p>
          )}
          {/* Modal for displaying the complete content of the selected post */}
          <ReactModal
            isOpen={!!selectedPost}
            onRequestClose={closeModal}
            contentLabel="Post Modal"
          >
            {selectedPost && (
              <div>
                <h2>{selectedPost.title}</h2>
                <p>{selectedPost.content}</p>
                {/* Add any other details you want to display */}
                <button onClick={closeModal}>Close</button>
              </div>
            )}
          </ReactModal>
        </>
      ) : (
        <h1>Faça login</h1>
      )}
    </StyledDashboardBody>
  );
};
