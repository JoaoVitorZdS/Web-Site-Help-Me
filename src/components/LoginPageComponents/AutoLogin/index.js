import { useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { addDoc, collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { AccessTokenContext } from '../../StyledButtons/ButtonLogInGoogle';

const AutoLogin = () => {
  const { setUserData, setAccessToken } = useContext(AccessTokenContext);

  const saveUserDataToFirebase = async (userInfo) => {
    const db = getFirestore();
    const clientsCollection = collection(db, "clients");
    const { name, email, picture } = userInfo.data;

    try {
      const querySnapshot = await getDocs(
        query(clientsCollection, where("email", "==", email))
      );

      if (querySnapshot.empty) {
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
      // Definir cookie com expiração de 30 dias
      const expiryDate = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000);
      Cookies.set('token', token, { expires: expiryDate });

      const fetchData = async () => {
        try {
          const userInfo = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: { Authorization: `Bearer ${token}` }
          });
          setUserData(userInfo.data);
          setAccessToken(token);

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
