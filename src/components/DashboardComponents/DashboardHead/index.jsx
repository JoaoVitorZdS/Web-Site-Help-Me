import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { useDropzone } from 'react-dropzone';
import { AccessTokenContext } from "../../StyledButtons/ButtonLogInGoogle";
import genericProfile from "../../../assets/imgs/GenericProfile.jpg"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { StyledDashboardHead } from './style';
import { toast } from 'react-toastify';

Modal.setAppElement('#root');

export const DashboardHead = () => {
  const { userData, setUserData, accessToken } = useContext(AccessTokenContext);
  const [showModal, setShowModal] = useState(false);
  const [preview, setPreview] = useState(userData.picture || 'path_to_default_image.jpg');

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  });

  const handleSaveImage = async () => {
    if (preview) {
      const storage = getStorage();
      const storageRef = ref(storage, `profilePics/${userData.email}`);
      
      const response = await fetch(preview);
      const blob = await response.blob(); // Converte a URL da pré-visualização em blob
      await uploadBytes(storageRef, blob);
      const photoURL = await getDownloadURL(storageRef);
      setUserData({ ...userData, picture: photoURL });
      toast.success("Foto de perfil atualizada!");
      setShowModal(false);
    }
  };

  return (
    <div>
      {accessToken ? (
        <StyledDashboardHead>
          <div onClick={() => setShowModal(true)} style={{ cursor: 'pointer' }}>
            <img src={userData.picture || genericProfile} alt="Profile Pic" style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
          </div>
          <h3>{userData.name}</h3>
          <Modal
            isOpen={showModal}
            onRequestClose={() => setShowModal(false)}
            contentLabel="Update Profile Picture"
            style={{
              content: {
                width: '100%',
                maxWidth: "500px",
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
              }
            }}
          >
            <h2>Atualize sua foto de perfil</h2>
            <div {...getRootProps()} style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center' }}>
              <input {...getInputProps()} />
              {isDragActive ?
                <p>Solte a imagem aqui...</p> :
                <p>Clique aqui ou arraste uma imagem para este espaço</p>
              }
            </div>
            <img src={preview} alt="Preview" style={{ width: '100%', height: 'auto', marginTop: '20px' }} />
            <button onClick={handleSaveImage} style={{ marginTop: '20px' }}>Salvar Foto</button>
            <button onClick={() => setShowModal(false)} style={{ marginTop: '10px' }}>Cancelar</button>
          </Modal>
        </StyledDashboardHead>
      ) : (
        <div>Faça login para ver esta página.</div>
      )}
    </div>
  );
};
