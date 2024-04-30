import { useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { addDoc, collection, getDocs, getFirestore, query, where, updateDoc, doc } from 'firebase/firestore';
import { AccessTokenContext } from '../../StyledButtons/ButtonLogInGoogle';

const AutoLogin = () => {
  const { setUserData, setAccessToken } = useContext(AccessTokenContext);

  const fetchAndSetUserData = async (email, googleData) => {
    const db = getFirestore();
    const clientsCollection = collection(db, "clients");
    const clientQuery = query(clientsCollection, where("email", "==", email));
    const querySnapshot = await getDocs(clientQuery);

    if (querySnapshot.empty) {
      // Se o usuário não estiver registrado, registre-o com a foto do Google
      await addDoc(clientsCollection, googleData);
      setUserData(googleData);
    } else {
      const userDataFromFirestore = querySnapshot.docs[0].data();
      if (userDataFromFirestore.picture) {
        // Use a foto do Firestore se disponível
        setUserData({ ...googleData, picture: userDataFromFirestore.picture });
      } else {
        // Se não houver foto no Firestore, atualize com a do Google e use-a
        const docRef = doc(db, "clients", querySnapshot.docs[0].id);
        await updateDoc(docRef, { picture: googleData.picture });
        setUserData(googleData);
      }
    }
  };

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      // Define o cookie com expiração de 30 dias
      const expiryDate = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000);
      Cookies.set('token', token, { expires: expiryDate });

      const fetchData = async () => {
        try {
          const userInfoResponse = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: { Authorization: `Bearer ${token}` }
          });
          const userInfoData = userInfoResponse.data;
          const { name, email, picture } = userInfoData;

          setAccessToken(token);
          // Prepara os dados conforme retornados do Google
          const googleData = { name, email, picture };

          await fetchAndSetUserData(email, googleData);
        } catch (error) {
          console.error("Erro ao realizar login automático:", error);
        }
      };

      fetchData();
    }
  }, [setAccessToken, setUserData]);

  return null; // Este componente não renderiza nada visualmente
};

export default AutoLogin;
