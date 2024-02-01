import React, { useContext, useState, useEffect } from "react";
import { getFirestore, collection, getDocs, doc, updateDoc, query, where } from "firebase/firestore";
import "../../../../firebaseconfig";
import { PostRenderDashboardBody } from "./style";
import { FcLike, FcDislike } from "react-icons/fc";
import { RiDislikeLine, RiHeartLine } from "react-icons/ri";
import { FcEditImage } from "react-icons/fc";
import { AccessTokenContext } from "../../../StyledButtons/ButtonLogInGoogle";
import { handleDislike, handleLike } from "../../../BlogComponents/handlePostsFunctions";
import { useBlogContext } from "../../../BlogComponents/BlogBody/BlogContext";
import { FaMinus, FaPlus } from "react-icons/fa6";


export const PostRenderDashboard = ({post}) => {
  const { userData, accessToken } = useContext(AccessTokenContext);
  const [posts, setPosts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editPostDetails, setEditPostDetails] = useState(null);
  const { globalPosts, setGlobalPosts } = useBlogContext();


  const fetchPosts = async () => {
    const db = getFirestore();
    const postsCollection = collection(db, `posts`);
    const postsSnapshot = await getDocs(postsCollection);
    const postsData = postsSnapshot.docs
      .map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      .filter((post) => post.is_public);
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
  
    if (globalPosts.length === 0) {
      fetchPosts();
      setGlobalPosts(posts)
    }
  }, [globalPosts, posts]); // Chama fetchPosts uma vez, quando o componente é montado

  const EditPostModal = ({ postDetails, onClose, onUpdate }) => {
    
  
    // Inicialize o estado com os detalhes do post ao abrir o modal
    const [editedPost, setEditedPost] = useState({
      content: postDetails.content,
      is_public: postDetails.is_public,
      image_url: postDetails.imageURL,
      title: postDetails.title,
      sub_title: postDetails.sub_title,
    });
  
    const handleSave = async () => {
      const db = getFirestore();
      const postsCollection = collection(db, "posts");
    
      // Crie uma consulta usando a função "query" e especifique a condição com "where"
      const postQuery = query(postsCollection, where("id", "==", postDetails.id));
    
      // Execute a consulta
      const postQuerySnapshot = await getDocs(postQuery);
    
      // Verifique se há algum documento correspondente à consulta
      if (postQuerySnapshot.docs.length > 0) {
        const postDoc = postQuerySnapshot.docs[0];
    
        // Atualize o documento existente com os novos dados
        await updateDoc(postDoc.ref, {
          content: editedPost.content,
          is_public: editedPost.is_public,
          image_url: editedPost.image_url,
          title: editedPost.title,
          sub_title: editedPost.sub_title,
        });
    
        // Atualize a lista de posts após a edição
        onUpdate();
      }
    
      // Feche o modal
      onClose();
    };
    
    const handleModalClick = (e) => {
      // Evitar que o clique no modal se propague para o contêiner principal
      e.stopPropagation();
    };
    
  
    return (
      <div className="edit-post-modal-overlay" onClick={onClose}>
        <div className="edit-post-modal" onClick={handleModalClick}>
          <div>
          <h2>Editar Post</h2>

          <label>
            Título:
            <input
              type="text"
              value={editedPost.title}
              onChange={(e) => setEditedPost({ ...editedPost, title: e.target.value })}
            />
          </label>
          <label>
            Subtítulo:
            <input
              type="text"
              value={editedPost.sub_title}
              onChange={(e) => setEditedPost({ ...editedPost, sub_title: e.target.value })}
            />
          </label>
          <label>
            Imagem URL:
            <input
              type="text"
              value={editedPost.image_url}
              onChange={(e) => setEditedPost({ ...editedPost, image_url: e.target.value })}
            />
          </label>
          <img src={editedPost.image_url} alt="Selected figure"/>
          </div>
          
           
          <div>

            <textarea
              rows={30}
              cols={40}
              value={editedPost.content}
              onChange={(e) => setEditedPost({ ...editedPost, content: e.target.value })}
              />
              </div>
           

            <div>
          <label style={{height: "7px", width: "100%", display: "flex", justifyContent: "space-around", alignItems: "center"}}>
            Público:
            <input
              type="checkbox"
              checked={editedPost.is_public}
              onChange={() => setEditedPost({ ...editedPost, is_public: !editedPost.is_public })}
              
              />
          </label>
             
          <button onClick={handleSave}>Salvar</button>
          <button onClick={onClose}>Cancelar</button>
              </div>
        </div>
      </div>
    );
  };

  const [expandedPosts, setExpandedPosts] = useState({});

  const togglePostContent = (postId) => {
    setExpandedPosts((prevExpandedPosts) => ({
      ...prevExpandedPosts,
      [postId]: !prevExpandedPosts[postId],
    }));
  };

  return (
    <PostRenderDashboardBody>
      {accessToken ? (
        <>
          {globalPosts.length !== 0 ? (
            <ul>
              {globalPosts.map((post) => (
                <li key={post.id} className="PostDiv" style={{ overflowY: !expandedPosts ? "scroll" : "hidden"}}>
                  <h2>{`${post.title}`}</h2>
                  <div className="ButtonsContainerDashboardPostRenderer">
                    <div>

                    <div>
                    <div className="reactionContainer">

                    <i>{`${(post.likes && post.likes.length) || 0}`}</i>
                    <button onClick={() => handleLike(post.id,globalPosts, setGlobalPosts, userData)} id="likeButton">
                      {post.likes && post.likes.includes(userData.email) ? <FcLike size={"1rem"} /> : <RiHeartLine size={"1rem"} />}
                    </button>
                    </div>
                    </div>

                    <div>
                    <div className="reactionContainer">

                    <i>{`${(post.dislikes && post.dislikes.length) || 0}`}</i>
                    <button onClick={() => handleDislike(post.id,globalPosts, setGlobalPosts, userData)} id="dislikeButton">
                      {post.dislikes && post.dislikes.includes(userData.email) ? <FcDislike size={"1rem"}  /> : <RiDislikeLine size={"1rem"} />}
                    </button>
                    </div>
                    </div>
                    </div>
                    {/* Adicione o botão de edição */}
                    <button onClick={() => handleEdit(post)} id="editButton">
                      <i>
                      Editar
                      </i>
                      <FcEditImage size={22} />
                    </button>
                  </div>
                  <div style={{ backgroundImage: `url(${post.imageURL})` }} className="PostImageContainer"></div>
                  <i style={{ fontSize: "12px" }}>Criado por: {`${post.created_by}`}</i>
                  <button className="expandDashboardRendererPost" onClick={() => togglePostContent(post.id)}>
                  {/* Botão para mostrar/ocultar conteúdo do post */}
                    {expandedPosts[post.id] ? <FaMinus /> : <FaPlus />}
                  </button>
                  <div className="post-render" style={{ display: expandedPosts[post.id] ? "block" : "none" }} dangerouslySetInnerHTML={{ __html: post.content }} />

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
