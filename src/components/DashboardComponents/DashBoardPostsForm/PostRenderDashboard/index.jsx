import React, { useContext, useState, useEffect } from "react";
import { getFirestore, collection, getDocs, doc, updateDoc } from "firebase/firestore";
import "../../../../firebaseconfig";
import { PostRenderDashboardBody } from "./style";
import { FcLike, FcDislike } from "react-icons/fc";
import { RiDislikeLine, RiHeartLine  } from "react-icons/ri";
import { AccessTokenContext } from "../../../StyledButtons/ButtonLogInGoogle";

export const PostRenderDashboard = () => {
  const { userData, accessToken } = useContext(AccessTokenContext);
  const [posts, setPosts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editPostDetails, setEditPostDetails] = useState(null);

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

  const handleEdit = (post) => {
    setEditPostDetails(post);
    setIsEditing(true);
  };

  const handleCloseModal = () => {
    setIsEditing(false);
    setEditPostDetails(null);
  };
  useEffect(() => {
    fetchPosts();
  }, []); // Chama fetchPosts uma vez, quando o componente é montado
 
  const EditPostModal = ({ postDetails, onClose, onUpdate }) => {
    const { userData } = useContext(AccessTokenContext);
    const [editedContent, setEditedContent] = useState(postDetails.content);
  
    const handleSave = async () => {
      const db = getFirestore();
      const postsCollection = collection(db, "posts");
      const postRef = doc(postsCollection, postDetails.id.toString());
  
      await updateDoc(postRef, { content: editedContent });
  
      // Atualize a lista de posts após a edição
      onUpdate();
  
      // Feche o modal
      onClose();
    };
  
    return (
      <div onClick={handleCloseModal} className="edit-post-modal-overlay" >
      <div className="edit-post-modal">
        <h2>Editar Post</h2>
        <textarea
          rows={10} // Defina o número inicial de linhas
          cols={40} // Defina o número inicial de colunas
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
          />
        <button onClick={handleSave}>Salvar</button>
        <button onClick={onClose}>Cancelar</button>
      </div>
      </div>
    );
  };
  return (
    <PostRenderDashboardBody>
      {accessToken ? (
        <>
          {posts.length !== 0 ? (
            <ul>
              {posts.map((post) => (
                <li key={post.id} className="PostDiv">
                  <h2 >{`${post.title}`}</h2>
                  <div style={{ backgroundImage: `url(${post.imageURL})` }} className="PostImageContainer"></div>
                  <i style={{fontSize: "12px"}}>Criado por: {`${post.created_by}`}</i>
                  <p>{post.content}</p>
                  <div>
                    <i>{`${(post.likes && post.likes.length) || 0}`}</i>
                    <button onClick={() => handleLike(post.id)} id="likeButton">
                      {post.likes && post.likes.includes(userData.email) ? <FcLike /> : <RiHeartLine />}
                    </button>
                    <i>{`${(post.dislikes && post.dislikes.length) || 0}`}</i>
                    <button onClick={() => handleDislike(post.id)} id="dislikeButton">
                      {post.dislikes && post.dislikes.includes(userData.email) ? <FcDislike /> : <RiDislikeLine />}
                    </button>
                    {/* Adicione o botão de edição */}
                    <button onClick={() => handleEdit(post)} id="editButton">
                      Editar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Sem Posts</p>
          )}
        </>
      ) : (
        <h1>Faça login</h1>
      )}

      {/* Modal de Edição */}
      {isEditing && editPostDetails && (
        <EditPostModal
          postDetails={editPostDetails}
          onClose={handleCloseModal}
          onUpdate={fetchPosts} // Atualiza a lista de posts após a edição
        />
      )}
    </PostRenderDashboardBody>
  );
};
