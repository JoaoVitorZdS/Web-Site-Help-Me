import React, { useContext, useEffect, useState } from "react";
import { StyledDashboardContainer } from "./style";
import { DashboardBody } from "../../components/DashboardComponents/DashboardBody";
import { Footer } from "../../components/Footer/Footer";
import { AccessTokenContext } from "../../components/StyledButtons/ButtonLogInGoogle";
import { DashboardHead } from "../../components/DashboardComponents/DashboardHead";
import { FIREBASE_DB } from "../../firebaseconfig";
import { collection, getDocs, query } from "firebase/firestore";
import { DashboardUserBody } from "../../components/DashboardUserComponents/DashboardUserBody";
import { Header} from "../../components/Header/Header";




const DashboardPage = () => {
  const { userData, accessToken } = useContext(AccessTokenContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Função para verificar se o usuário é um administrador
    const checkAdminStatus = async () => {
      try {
        // Substitua 'suaColecaoProfessionals' pelo nome correto da coleção no Firebase
        const q = query(collection(FIREBASE_DB, 'professionals'));
        const querySnapshot = await getDocs(q);

        // Verifica o array "adms" no primeiro documento da coleção
        if (querySnapshot.docs.length > 0) {
          const firstDoc = querySnapshot.docs[0];
          const isAdminUser = firstDoc.exists && firstDoc.data().adms.includes(userData.email);

          // Atualiza o estado isAdmin com base na verificação
          setIsAdmin(isAdminUser);
        }
      } catch (error) {
        console.error("Erro ao verificar status de administrador:", error);
      }
    };

    // Verifique o status de administrador apenas se houver um usuário logado
    if (accessToken) {
      checkAdminStatus();
    }
  }, [accessToken, userData.email]);
  return (
    <div>
      {accessToken ? (
        <StyledDashboardContainer>
          {isAdmin ? (
            // Se o usuário for um administrador, exiba a DashboardAdm
            <>
            <Header/>
            <DashboardHead />
            <DashboardBody />
            <Footer />
          </>
          ) : (
            // Caso contrário, exiba a Dashboard padrão
            <>
              <Header/>
              <DashboardHead />
              <DashboardUserBody />
              <Footer />
            </>
          )}
        </StyledDashboardContainer>
      ) : (
        <StyledDashboardContainer>
          <Header/>
          <DashboardBody />
          <Footer />
        </StyledDashboardContainer>
      )}
    </div>
  );
};

export default DashboardPage;
