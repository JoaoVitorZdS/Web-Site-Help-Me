// BlogContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [globalPosts, setGlobalPosts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const postsCollection = collection(db, 'posts');

    // Crie um observador de alterações para a coleção 'posts'
    const unsubscribe = onSnapshot(postsCollection, (snapshot) => {
      const postsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGlobalPosts(postsData);
    });

    // Retorne uma função de limpeza para remover o observador quando o componente for desmontado
    return () => unsubscribe();
  }, []); // Chamada quando o componente é montado

  return (
    <BlogContext.Provider value={{ globalPosts, setGlobalPosts }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  return useContext(BlogContext);
};
