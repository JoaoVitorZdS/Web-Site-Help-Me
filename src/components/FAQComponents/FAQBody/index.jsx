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
    "Quem somos?",
    "O que fazemos?",
    "O que o Help Me oferece?",
    "Como funciona?",
    "Como são realizados os agendamentos?",
    "Aceita plano de saúde para a os atendimentos psicológicos?",
    "Quando procurar atendimento psicológico?",
    "Privacidade e segurança",
    "Quais são as áreas de atendimento psicológico?",
    "Quais são as áreas atendidas pelo Jurídico?"
 
  ];

  const faqAnswers = [
    `Seja muito bem vinda!
    Somos mulheres, especialistas em atender mulheres. Profissionais dedicadas ao seu bem estar, colocando suas necessidades em primeiro lugar e oferecendo um atendimento humanizado, acolhedor e com qualidade. 
    Profissionais que tem o compromisso de te escutar e compreender você, com empatia, atenção e respeito.
    Profissionais que querem te apoiar e empoderar você incentivando-a em seus objetivos para viver uma vida mais plena e feliz. 
    Há momentos em que percebemos  que precisamos olhar para o nosso íntimo, para nossa história,  para quem somos e como estamos. Precisamos ser cuidadas. 
    `,
    `Observamos, com base em nossa experiência profissional, a necessidade de criar um espaço destinado somente a mulheres. Assim surgiu a ideia de criar um aplicativo, de fácil acesso, que atendesse as necessidades femininas.
    Aqui você encontra um espaço de acolhimento, orientação psicológica e jurídica. Nesse ambiente há ferramentas valiosas para promover sua saúde mental, seu bem estar físico e social e sua segurança. 
    Estamos aqui para te ouvir, compreender suas necessidades e angústias e ajudá-la a enfrentar seus desafios, ponderando meios e modos para as suas melhores escolhas.  
    Queremos cuidar de você e estamos dispostas a caminhar ao seu lado neste processo para apoiá-la em sua jornada de crescimento pessoal e bem estar emocional.
    Queremos que consiga se olhar, se acolher e fazer as pazes com o que não pode  ser mudado. Queconsiga se desenvolver  para ajustar o que  for necessário frente aos desafios da vida.
    Estamos com você! Estamos juntas!    
    `,
    `- Atendimento Psicológico online
    - Atendimento Jurídico online
    - Atendimentos Emergenciais online
    - Contatos Emergenciais de rede de apoio e proteção
    - Materiais e Recursos com conteúdos de orientação,
    informação e apoio psicológico e jurídico
    `,
    `
    - Atendimento Psicológico online: Modalidade testada e autorizada pelo CFP, como previsto na Resolução n.11/2018 .Conta com a mesma ética, sigilo e a competência profissional oferecida no atendimento presencial, assim como seu formato de encontros e duração. 
- Atendimento Psicológico emergencial:  tem a função de acolher, ajudar e orientar às mulheres com demandas urgentes e pontuais que não podem esperar.

- Atendimento Juridico:


- Atendimento Jurídico Emergencial:

    `,
    `Através de nossa agenda eletrônica, você escolhe o profissional especialista, o melhor dia e horário.

    Quanto tempo dura cada atendimento e por onde são realizados?
    Os atendimentos tem duração média de 50 minutos. São realizados através de vídeo chamada pelo whatsapp...........
    `,
    `Não. Nossos atendimentos são particulares e emitimos (recibo ou nota fiscal) para reembolso.
    De acordo com a Resolução da Agência nacional de Saúde (ANS), a cobertura dos tratamentos foi ampliada para ao menos 40 sessões de psicoterapia pop ano. Sendo assim, você tem o direito de solicitar reembolso com seu convênio.
    `,
    `Se você se encontra em sofrimento mental e emocional,  não hesite em buscar ajuda profissional.  No atendimento psicológico  você vai encontrar um espaço de fala pautados acolhimento,  na ética e na escuta ativa e dividualizada.`,
    `A Help Me tem total respeito pela privacidade e segurança das usuárias e isso significa que todos os atendimentos virtuais por vídeo chamada, serão mantidos em absoluto sigilo. 
    Além disso,  todas as regulamentações do CFP e do ...........,  da lei de proteção de dados e da plataforma Google,  serão sempre atendidas .
    `,
    `
    - Relacionamento/ Casamento 
    - Maternidade/ Gestação 
    - Reprodução / Adoção 
    - Estresse/ Burnout
    - Dependência Química (álcool e outras substâncias)
    - Violência física/ psicológica 
    - Ansiedade/ Depressão 
    - Enfermidades/ Adoecimento físico 
    - Transtornos de personalidade ( narcisista,  .......)
    - Transtornos Alimentares e de autoimagem 
    - Sexualidade
    - .......
    `,
    `
    `

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
