import React, { useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { addDoc, collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { AccessTokenContext } from '../../StyledButtons/ButtonLogInGoogle';
import { useGoogleLogin } from '@react-oauth/google';

const AutoLogin = () => {
  const { setUserData, setAccessToken } = useContext(AccessTokenContext);

  const saveUserDataToFirebase = async (userInfo) => {
    const db = getFirestore();
    const clientsCollection = collection(db, "clients");

    try {
      const { name, email, picture } = userInfo.data;

      // Verificar se o email já está registrado na coleção
      const querySnapshot = await getDocs(
        query(clientsCollection, where("email", "==", email))
      );

      if (querySnapshot.empty) {
        // Se não houver documentos com o mesmo email, então o usuário não está registrado
        await addDoc(clientsCollection, { name, email, picture });
        console.log("Novo usuário registrado no Firestore!");
      } else {
        console.log("Usuário já registrado no Firestore. Pulando a etapa de registro.");
      }
    } catch (error) {
      console.error("Erro ao salvar dados do usuário no Firestore:", error);
    }
  };

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const fetchData = async () => {
        try {
          const userInfo = await axios.get(
            "https://www.googleapis.com/oauth2/v3/userinfo",
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          const { name, email, picture } = userInfo.data;

          setUserData({ name, email, picture });
          
        setAccessToken(token);

          // Save user data to Firebase before redirection
          await saveUserDataToFirebase(userInfo);

       

        } catch (error) {
          console.error("Erro ao realizar login automático:", error);
        }
      };

      fetchData();
    }
  }, []);

  return null; // Este componente não renderiza nada visualmente
};

export default AutoLogin;
