
import { getFirestore, collection, getDocs, updateDoc, where, query } from "firebase/firestore";



export const updateLikesInFirestore = async (postId, updatedLikes) => {
    const db = getFirestore();
    const postsCollection = collection(db, "posts");
  
    try {
      const querySnapshot = await getDocs(
        query(postsCollection, where("id", "==", postId))
      );
  
      if (!querySnapshot.empty) {
        const postRef = querySnapshot.docs[0].ref;
        await updateDoc(postRef, { likes: updatedLikes });
        console.log('Likes atualizados com sucesso!');
      } else {
        console.error('Documento não encontrado para atualizar likes:', postId);
      }
    } catch (error) {
      console.error('Erro ao atualizar likes:', error);
    }
  };
  
  export const updateDislikesInFirestore = async (postId, updatedDislikes) => {
    const db = getFirestore();
    const postsCollection = collection(db, "posts");
  
    try {
      const querySnapshot = await getDocs(
        query(postsCollection, where("id", "==", postId))
      );
  
      if (!querySnapshot.empty) {
        const postRef = querySnapshot.docs[0].ref;
        await updateDoc(postRef, { dislikes: updatedDislikes });
        //console.log('Dislikes atualizados com sucesso!');
      } else {
        console.error('Documento não encontrado para atualizar dislikes:', postId);
      }
    } catch (error) {
      console.error('Erro ao atualizar dislikes:', error);
    }
  };

export const handleLike = async (postId, globalPosts, setGlobalPosts, userData) => {

    const updatedPosts = globalPosts.map((post) => {
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
  
    setGlobalPosts(updatedPosts);
  };
  
export const handleDislike = async (postId,globalPosts, setGlobalPosts, userData) => {
    
    const updatedPosts = globalPosts.map((post) => {
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
  
    setGlobalPosts(updatedPosts);
  };