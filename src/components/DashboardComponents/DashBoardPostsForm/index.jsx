import React, { useContext, useState, useEffect } from "react";
import Modal from "react-modal";
import { AccessTokenContext } from "../../StyledButtons/ButtonLogInGoogle";
import { getFirestore, collection, getDocs, addDoc, doc, updateDoc } from "firebase/firestore";
import "../../../firebaseconfig";
import { StyledDashboardEventForm, StyledForm } from "./style";
import { PostRenderDashboard } from "./PostRenderDashboard";
import GlobalStyleDefault from "../../../GlobalStyles";
import "../../../App.css"
import { FcEditImage } from "react-icons/fc";
import MyQuillEditor from "../../QuillEditor";
import Quill from "quill";
import { useBlogContext } from "../../BlogComponents/BlogBody/BlogContext";
export const DashboardPostForm = () => {
  const { userData, accessToken } = useContext(AccessTokenContext);
  const [posts, setPosts] = useState([]);
  
  const { globalPosts, setGlobalPosts } = useBlogContext();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newPostData, setNewPostData] = useState({
    id: null, // Utilize null para permitir que o Firestore gere o ID automaticamente
    content: "",
    created_by: userData.name, // Utiliza o nome do usuário atual como created_by
    dislikes: [],
    imageURL: "",
    is_public: true, // Valor padrão é true, indicando que é um post público
    likes: [],
    sub_title: "", // Subtítulo é opcional, pode ser deixado em branco
    tags: [],
    title: ""
  });
  // eslint-disable-next-line
  const [quillContent, setQuillContent] = useState({ ops: [] }); // Estado para armazenar o conteúdo JSON
  const handleQuillChange = (delta) => {
    setQuillContent(delta);
    setNewPostData({ ...newPostData, content: delta });
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
   
  const handleIsPublicChange = (e) => {
    const isPublic = e.target.value === "true"; // Converte a string para booleano
    setNewPostData({ ...newPostData, is_public: isPublic });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPostData({ ...newPostData, [name]: value });
  };

  const handleTagsChange = (e) => {
    const tags = e.target.value.split(",").map((tag) => tag.trim());
    setNewPostData({ ...newPostData, tags });
  };
// eslint-disable-next-line
const handleLike = async (postId) => {
  const updatedPosts = posts.map((post) => {
    if (post.id === postId) {
      const userLiked = post.likes.includes(userData.email);

      // Se o usuário já deu like, remove o like
      if (userLiked) {
        const updatedLikes = post.likes.filter((email) => email !== userData.email);
        updateLikesInFirestore(postId, updatedLikes);
        return { ...post, likes: updatedLikes };
      }

      // Se o usuário não deu like, adiciona o like
      const updatedLikes = [...post.likes, userData.email];
      updateLikesInFirestore(postId, updatedLikes);
      return { ...post, likes: updatedLikes };
    }
    return post;
  });

  setPosts(updatedPosts);
};
// eslint-disable-next-line
const handleDislike = async (postId) => {
  const updatedPosts = posts.map((post) => {
    if (post.id === postId) {
      const userDisliked = post.dislikes.includes(userData.email);

      // Se o usuário já deu dislike, remove o dislike
      if (userDisliked) {
        const updatedDislikes = post.dislikes.filter((email) => email !== userData.email);
        updateDislikesInFirestore(postId, updatedDislikes);
        return { ...post, dislikes: updatedDislikes };
      }

      // Se o usuário não deu dislike, adiciona o dislike
      const updatedDislikes = [...post.dislikes, userData.email];
      updateDislikesInFirestore(postId, updatedDislikes);
      return { ...post, dislikes: updatedDislikes };
    }
    return post;
  });

  setPosts(updatedPosts);
};

const updateLikesInFirestore = async (postId, updatedLikes) => {
  const db = getFirestore();
  const postsCollection = collection(db, 'posts');
  const postRef = doc(postsCollection, postId.toString());

  try {
    await updateDoc(postRef, { likes: updatedLikes });
    console.log('Likes atualizados com sucesso!');
  } catch (error) {
    console.error('Erro ao atualizar likes:', error);
  }
};

const updateDislikesInFirestore = async (postId, updatedDislikes) => {
  const db = getFirestore();
  const postsCollection = collection(db, 'posts');
  const postRef = doc(postsCollection, postId.toString());

  try {
    await updateDoc(postRef, { dislikes: updatedDislikes });
    console.log('Dislikes atualizados com sucesso!');
  } catch (error) {
    console.error('Erro ao atualizar dislikes:', error);
  }
};

// ...


const createNewPost = async () => {
  const db = getFirestore();
  const postsCollection = collection(db, `posts`);

  try {
    const postsSnapshot = await getDocs(postsCollection);
    const newId = postsSnapshot.size + 1; // Gera um novo ID baseado no tamanho da coleção
    
    // Converte o objeto Delta para HTML
    const delta = newPostData.content;
    const quill = new Quill(document.createElement('div'));
    quill.setContents(delta);
    const contentHTML = quill.root.innerHTML;

    // Cria um novo objeto de dados para armazenar no Firestore
    const postDataWithId = {
      ...newPostData,
      id: newId,
      content: contentHTML,
    };

    await addDoc(postsCollection, postDataWithId);
    console.log("Novo post criado com sucesso!");
    setModalIsOpen(false);
    setNewPostData({
      id: null,
      content: "",
      created_by: userData.name,
      dislikes: 0,
      imageURL: "",
      is_public: true,
      likes: 0,
      sub_title: "",
      tags: [],
      title: ""
    });
    fetchPosts();
  } catch (error) {
    console.error("Erro ao criar o novo post:", error);
  }
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
  
  const deleteFirstTollbar = async () => {
    const toolbarDiv = document.querySelector('.ql-toolbar')
  if (toolbarDiv) {
    toolbarDiv.parentNode.removeChild(toolbarDiv);
  }
  }
  return (
    <>
      {accessToken ? (
        <>
      <StyledDashboardEventForm>
      <h1 style={{color: `${GlobalStyleDefault.colors.secondarystrong}`, fontFamily: "DolceVita"}}>Posts Blog</h1>
    
      <button onClick={openModal}   className="ButtonCreateNewPostADMDashboard">
      <FcEditImage size={22} />
        <i>
          Criar Novo Post
        </i>
      </button>
      {globalPosts.length !== 0 ? (
        <PostRenderDashboard/>
      ) : (
        <>
          <p>Sem Posts</p>
        </>
      )}



<Modal
  isOpen={modalIsOpen}
  onAfterOpen={deleteFirstTollbar}
  onRequestClose={closeModal}
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
      maxHeight: "80vh", // Defina a altura máxima desejada
      display: "flex",
      justifyContent: "center"
      
    },
  }}
>
  <div style={{ width: "80%", height: "max-content", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "15px" }}>
    <h2 style={{color: GlobalStyleDefault.colors.secondarystrong}}>Criar Novo Post</h2>
    <StyledForm >
      <input
      placeholder="Título"
        type="text"
        name="title"
        value={newPostData.title}
        onChange={handleInputChange}
      />

      <MyQuillEditor onChange={handleQuillChange}/>
      <input
       placeholder="Subtítulo (Opcional)"
        type="text"
        name="sub_title"
        value={newPostData.sub_title}
        onChange={handleInputChange}
      />
      <input
      placeholder="Tags (separadas por vírgula):"
        type="text"
        name="tags"
        value={newPostData.tags}
        onChange={handleTagsChange}
      />

    
      <input
      placeholder="URL da Imagem"
        type="text"
        name="imageURL"
        value={newPostData.imageURL}
        onChange={handleInputChange}
      />
      <img src={newPostData.imageURL} alt="" />
  
    <label>
      Público:
      <select name="is_public" value={newPostData.is_public} onChange={handleIsPublicChange}>
        <option value="true">Sim</option>
        <option value="false">Não</option>
      </select>
    </label>
    <button type="button" onClick={createNewPost}>
      Criar Post
    </button>
    <button type="button" onClick={closeModal}>
      Fechar
    </button>
  </StyledForm>
  </div>
</Modal>
      
</StyledDashboardEventForm>
        </>
      ) : (
        <h1>Faça login</h1>
      )}
    </>
  );
};
