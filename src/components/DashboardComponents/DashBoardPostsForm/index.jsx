import React, { useContext, useState, useEffect } from "react";
import Modal from "react-modal";
import { AccessTokenContext } from "../../StyledButtons/ButtonLogInGoogle";
import { getFirestore, collection, getDocs, addDoc, doc, updateDoc } from "firebase/firestore";
import "../../../firebaseconfig";
import { StyledDashboardEventForm } from "./style";
import { PostRenderDashboard } from "./PostRenderDashboard";

export const DashboardPostForm = () => {
  const { userData, accessToken } = useContext(AccessTokenContext);
  const [posts, setPosts] = useState([]);
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
  // ...

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
      const postDataWithId = { ...newPostData, id: newId };

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
    fetchPosts();
  }, []); // Chama fetchPosts uma vez, quando o componente é montado
  
  return (
    <>
      {accessToken ? (
        <>
      <StyledDashboardEventForm>
      <h1>Posts Blog</h1>
      {posts.length !== 0 ? (
        <PostRenderDashboard/>
      ) : (
        <>
          <p>Sem Posts</p>
        </>
      )}

<button onClick={openModal}>Criar Novo Post</button>

<Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  style={{
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      width: "50%",
      height: "80%",
      background: "white",
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
    },
  }}
>
  <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
    <h2>Criar Novo Post</h2>
    <form style={{ width: "80%", margin: "auto" }}>
      <input
      placeholder="Título"
        type="text"
        name="title"
        value={newPostData.title}
        onChange={handleInputChange}
      />
      <textarea
        placeholder="Conteúdo"
        name="content"
        value={newPostData.content}
        onChange={handleInputChange}
        rows={10} // Defina o número inicial de linhas
        cols={40} // Defina o número inicial de colunas
      />
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
  </form>
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
