import React, { useContext, useState, useEffect } from "react";
import Modal from "react-modal"; // Importe o componente Modal
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
import MyQuillEditor from "../../../QuillEditor"; // Importe o componente Quill
import { StyledForm } from "../style";
import GlobalStyleDefault from "../../../../GlobalStyles";

export const PostRenderDashboard = ({ post }) => {
  const { userData, accessToken } = useContext(AccessTokenContext);
  const { globalPosts, setGlobalPosts } = useBlogContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editPostDetails, setEditPostDetails] = useState(null);
  const [posts, setPosts] = useState([]);

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
      setGlobalPosts(posts);
    }
  }, [globalPosts, posts]); // Chama fetchPosts uma vez, quando o componente é montado

  const deleteFirstToolbar = async () => {
    const toolbarDiv = document.querySelector('.ql-toolbar');
    if (toolbarDiv) {
      toolbarDiv.parentNode.removeChild(toolbarDiv);
    }
  };

  const handleSave = async () => {
    const db = getFirestore();
    const postsCollection = collection(db, "posts");
    const postQuery = query(postsCollection, where("id", "==", editPostDetails.id));
    const postQuerySnapshot = await getDocs(postQuery);
    if (postQuerySnapshot.docs.length > 0) {
      const postDoc = postQuerySnapshot.docs[0];
      await updateDoc(postDoc.ref, {
        title: editPostDetails.title,
        sub_title: editPostDetails.sub_title,
        image_url: editPostDetails.image_url,
        content: editPostDetails.content, // Certifique-se de que editPostDetails.content está no formato delta
        is_public: editPostDetails.is_public,
      });
      fetchPosts();
    }
    setIsEditing(false);
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
                <li key={post.id} className="PostDiv" style={{ overflowY: !expandedPosts ? "scroll" : "hidden" }}>
                  <h2>{`${post.title}`}</h2>
                  <div className="ButtonsContainerDashboardPostRenderer">
                    <div>
                      <div className="reactionContainer">
                        <i>{`${(post.likes && post.likes.length) || 0}`}</i>
                        <button onClick={() => handleLike(post.id, globalPosts, setGlobalPosts, userData)} id="likeButton">
                          {post.likes && post.likes.includes(userData.email) ? <FcLike size={"1rem"} /> : <RiHeartLine size={"1rem"} />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="reactionContainer">
                        <i>{`${(post.dislikes && post.dislikes.length) || 0}`}</i>
                        <button onClick={() => handleDislike(post.id, globalPosts, setGlobalPosts, userData)} id="dislikeButton">
                          {post.dislikes && post.dislikes.includes(userData.email) ? <FcDislike size={"1rem"} /> : <RiDislikeLine size={"1rem"} />}
                        </button>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => handleEdit(post)} id="editButton">
                    <i>
                      Editar
                    </i>
                    <FcEditImage size={22} />
                  </button>
                  <div style={{ backgroundImage: `url(${post.imageURL})` }} className="PostImageContainer"></div>
                  <i style={{ fontSize: "12px" }}>Criado por: {`${post.created_by}`}</i>
                  <button className="expandDashboardRendererPost" onClick={() => togglePostContent(post.id)}>
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
        <Modal
          isOpen={true} 
          onRequestClose={handleCloseModal} 
          onAfterOpen={deleteFirstToolbar}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: "5"
            },
            content: {
              width: "90%",
              margin: "auto",
              fontFamily: "DolceVita",
              overflowY: "auto",
              maxHeight: "80vh", 
              display: "flex",
              justifyContent: "center"
            }
          }}
        >
          {/* Conteúdo do Modal */}
          <div style={{ width: "80%", height: "max-content", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "15px" }}>
            <h2 style={{color: GlobalStyleDefault.colors.primarystrong}}>Editar Post</h2>
            <StyledForm>
              <MyQuillEditor 
                value={editPostDetails.content} 
                onChange={(value) => setEditPostDetails({ ...editPostDetails, content: value })}
              />
              <label>Introdução:</label>
              <textarea
                rows={10}
                style={{resize: "none"}}
                placeholder="Introdução (Opcional)"
                type="text"
                name="sub_title"
                value={editPostDetails.sub_title}
                onChange={(e) => setEditPostDetails({ ...editPostDetails, sub_title: e.target.value })}
              />
              <label>Título:</label>
              <input
                placeholder="Título"
                type="text"
                name="title"
                value={editPostDetails.title}
                onChange={(e) => setEditPostDetails({ ...editPostDetails, title: e.target.value })}
              />
              <label>Tags (separadas por vírgula):</label>
              <input
                placeholder="Tags (separadas por vírgula):"
                type="text"
                name="tags"
                value={editPostDetails.tags}
                onChange={(e) => setEditPostDetails({ ...editPostDetails, tags: e.target.value })}
              />
              <label>URL da Imagem:</label>
              <input
                placeholder="URL da Imagem"
                type="text"
                name="imageURL"
                value={editPostDetails.imageURL}
                onChange={(e) => setEditPostDetails({ ...editPostDetails, imageURL: e.target.value })}
              />
              <img src={editPostDetails.imageURL} alt="choosenImageForPost" style={{width: "50%", maxWidth:"320px"}} />
              <label>
                Público:
                <select name="is_public" value={editPostDetails.is_public} onChange={(e) => setEditPostDetails({ ...editPostDetails, is_public: e.target.value })}>
                  <option value="true">Sim</option>
                  <option value="false">Não</option>
                </select>
              </label>
              <button type="button" onClick={handleSave}>
                Salvar
              </button>
              <button type="button" onClick={handleCloseModal}>
                Fechar
              </button>
            </StyledForm>
          </div>
        </Modal>
      )}
    </PostRenderDashboardBody>
  );
};
