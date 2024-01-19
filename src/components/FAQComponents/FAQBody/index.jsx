import React, { useState } from "react";
import { StyledFAQBody } from "./style";
import '../../../App.css'
export const FAQPageBody = () => {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleItem = (index) => {
    const updatedItems = [...expandedItems];
    const itemIndex = updatedItems.indexOf(index);

    if (itemIndex !== -1) {
      updatedItems.splice(itemIndex, 1);
    } else {
      updatedItems.push(index);
    }

    setExpandedItems(updatedItems);
  };

  const faqItems = [
    "O que é o HelpMe?",
    "Quem será meu ajudante?",
    "Quem são os terapeutas?",
    "Como os terapeutas são verificados?",
    "Quanto custa?",
    "O HelpMe é adequado para mim?",
    "O HelpMe pode substituir a terapia tradicional presencial?",
    "Me inscrevi. Quanto tempo até ser pareado com um terapeuta?",
    "Como vou me comunicar com meu terapeuta?",
    "Como funciona a troca de mensagens?",
    "Como funcionam as sessões de chat ao vivo?",
    "Como funcionam as sessões de telefone ao vivo?",
    "Como funcionam as sessões de vídeo ao vivo?",
    "Posso voltar e ler as mensagens anteriores do terapeuta?",
    "Por quanto tempo posso usar o HelpMe?",
    "O HelpMe é acessível na web para usuários com deficiência?",
    "Como farei o pagamento da minha assinatura no HelpMe?",
    "Posso ser reembolsado pelo meu seguro?",
    "Qual é o papel do HelpMe.com?",
    "Como posso ter certeza de que esta é uma forma eficaz de terapia?",
    "Meu terapeuta tratará o que eu disser como confidencial?",
    "Como é protegida minha privacidade e segurança?",
    "Posso permanecer anônimo?",
    "Como posso começar com o HelpMe?",
    "Sou um terapeuta registrado. Como posso fornecer serviços usando o HelpMe?",
  ];

  const faqAnswers = [
    "Resposta para: O que é o HelpMe?",
    "Resposta para: Quem será meu ajudante?",
    "Resposta para: Quem são os terapeutas?",
    "Resposta para: Como os terapeutas são verificados?",
    "Resposta para: Quanto custa?",
    "Resposta para: O HelpMe é adequado para mim?",
    "Resposta para: O HelpMe pode substituir a terapia tradicional presencial?",
    "Resposta para: Me inscrevi. Quanto tempo até ser pareado com um terapeuta?",
    "Resposta para: Como vou me comunicar com meu terapeuta?",
    "Resposta para: Como funciona a troca de mensagens?",
    "Resposta para: Como funcionam as sessões de chat ao vivo?",
    "Resposta para: Como funcionam as sessões de telefone ao vivo?",
    "Resposta para: Como funcionam as sessões de vídeo ao vivo?",
    "Resposta para: Posso voltar e ler as mensagens anteriores do terapeuta?",
    "Resposta para: Por quanto tempo posso usar o HelpMe?",
    "Resposta para: O HelpMe é acessível na web para usuários com deficiência?",
    "Resposta para: Como farei o pagamento da minha assinatura no HelpMe?",
    "Resposta para: Posso ser reembolsado pelo meu seguro?",
    "Resposta para: Qual é o papel do HelpMe.com?",
    "Resposta para: Como posso ter certeza de que esta é uma forma eficaz de terapia?",
    "Resposta para: Meu terapeuta tratará o que eu disser como confidencial?",
    "Resposta para: Como é protegida minha privacidade e segurança?",
    "Resposta para: Posso permanecer anônimo?",
    "Resposta para: Como posso começar com o HelpMe?",
    "Resposta para: Sou um terapeuta registrado. Como posso fornecer serviços usando o HelpMe?",
  ];

  return (
    <StyledFAQBody>
      <h2 style={{fontFamily: "DolceVita"}}>Perguntas Frequentes</h2>
      <ul>
        {faqItems.map((question, index) => (
          <li key={index} className="FaqQuestions">
            <div
              className={`faq-question ${expandedItems.includes(index) ? "open" : ""}`}
              onClick={() => toggleItem(index)}
              style={{ cursor: "pointer" }}
            >
              {question}
            </div>
            {expandedItems.includes(index) && (
              <div className={`faq-answer ${expandedItems.includes(index) ? "open" : ""}`}>
                {faqAnswers[index]}
              </div>
            )}
          </li>
        ))}
      </ul>
    </StyledFAQBody>
  );
};
