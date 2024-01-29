// BlogContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [globalPosts, setGlobalPosts] = useState([]);

  const fetchPosts = async () => {
    const db = getFirestore();
    const postsCollection = collection(db, 'posts');
    const postsSnapshot = await getDocs(postsCollection);
    const postsData = postsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setGlobalPosts(postsData);
  };

  useEffect(() => {
    fetchPosts();
  }, []); // Chamada quando o componente é montado

  return (
    <BlogContext.Provider value={{ globalPosts, setGlobalPosts, fetchPosts }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  return useContext(BlogContext);
};
