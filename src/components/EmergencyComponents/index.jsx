import React, { useState, useEffect } from "react";
import { StyledEmergencyBody } from "./style";
import '../../App.css'
import consultationImage from "../../assets/imgs/woman-talking-with-psychologist.png";
import { useNavigate } from "react-router-dom";

export const EmergencyPageBody = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Verifica se o usuário está em um dispositivo móvel
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent));
  }, []);

  const handleButtonClick = (number) => {
    if (isMobile) {
      window.location.href = `tel:${number}`;
    } else {
      // Se não for um dispositivo móvel, redireciona para o WhatsApp
      window.location.href = `https://api.whatsapp.com/send?phone=${number}`;
    }
  };

  return (
    <StyledEmergencyBody>
      <div>
        <i>Se você é vítima de violência,</i>
        <i>seja esta física ou verbal, </i>
        <i>e precisa de tratamento médico</i>
        <i> ou atendimento policial.</i>
        <h2 style={{ fontFamily: "DolceVita" }}>PEÇA AJUDA DAS AUTORIDADES</h2>
      </div>
      <nav>
        <div className="container">
          <input id="checkbox1" type="checkbox" />
          <label className="button" htmlFor="checkbox1" onClick={() => handleButtonClick("190")}>
            <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-forward" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zm10.762.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708" />
              </svg>
            </span>
          </label>
          <label htmlFor="checkbox1" className="tagForEmergencyButton">
            Chame ajuda no 190
          </label>
        </div>

        <div className="container">
          <input id="checkbox2" type="checkbox" />
          <label className="button" htmlFor="checkbox2" onClick={() => handleButtonClick("180")}>
            <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
            </span>
          </label>
          <label htmlFor="checkbox2" className="tagForEmergencyButton">
            Denuncie no 180
          </label>
        </div>
      </nav>
      <div>
        <i>Se você está no meio de uma crise</i>
        <i> seja ela de qualquer natureza,</i>
        <p>mas não está ferida</p>
        <i>converse agora mesmo com uma especialista.</i>
        <h2 style={{ fontFamily: "DolceVita" }}>Peça aconselhamento de uma especialista.</h2>
      </div>

      <nav>
        <div className="container">
          <input id="checkbox3" type="checkbox" />
          <label className="button" htmlFor="checkbox3">
            <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-hearts" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.5 1.246c.832-.855 2.913.642 0 2.566-2.913-1.924-.832-3.421 0-2.566M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4m13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276ZM15 2.165c.555-.57 1.942.428 0 1.711-1.942-1.283-.555-2.281 0-1.71Z" />
              </svg>
            </span>
          </label>
          <label htmlFor="checkbox3" className="tagForEmergencyButtonSafe">
            Fale com uma psicóloga
          </label>
        </div>

        <div className="container">
          <input id="checkbox4" type="checkbox" />
          <label className="button" htmlFor="checkbox4">
            <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shield-shaded" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 14.933a1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453a7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625a11.8 11.8 0 0 1-2.517-2.453c-1.678-2.195-3.06-5.513-2.465-9.99a1.54 1.54 0 0 1 1.044-1.262A63 63 0 0 1 5.072.56z" />
              </svg>
            </span>
          </label>
          <label htmlFor="checkbox4" className="tagForEmergencyButtonSafe">
            Fale com uma advogada
          </label>
        </div>
      </nav>
    </StyledEmergencyBody>
  );
};
