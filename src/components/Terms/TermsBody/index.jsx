import React, { useState } from "react";
import { StyledTermsBody } from "./style";
import '../../../App.css'
export const TermsPageBody = () => {
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
    "Termos de Uso",
    "Termos de Privacidade",
    "Política de Cookies",

  ];

 const politicadePrivacidade = `Política de privacidade e segurança (Versão Estendida)
 Conforme as normas previstas na Lei 13.709/18, que versa sobre a proteção de dados e as demais legislações pertinentes, apresentamos a Política de Privacidade e Segurança do (coloque o nome do site/blog aqui). 
 
 Este documento é vinculado e integra as Condições e Termos de Uso deste site, sendo passível de alteração a qualquer momento para adequação em regras estabelecidas pelas legislações que estabelecem o modo de tratamento dos dados. 
 
 O acesso, visita e permanência neste site/blog é de livre escolha e acontece conforme a vontade/desejo do usuário, sendo sua visita e prosseguimento no site, escolha deste usuário. 
 
 Ficando ciente por meio deste documento que a partir do momento em que mantém o acesso e a permanência em qualquer uma das nossas páginas está automaticamente demonstrando estar de acordo, de forma explicita com todas as regras e termos trazidos na Política de Privacidade e Segurança descrita abaixo. 
 
 Sendo seu direito a qualquer momento entrar em contato conosco para maiores informações do que aqui foi descrito, bem como esclarecimento de dúvidas que possam vir a existir. 
 
 O site (coloque o domínio do site aqui), foi criado em (coloque a data da criação do site aqui) e é de inteira propriedade (nome da empresa), inscrita sob o CNPJ nº …  e inscrição Estadual n.º …) (caso se trate de pessoa física coloque apenas o nome completo do proprietário do site).
 
 Esta Política de Privacidade foi modificado em 25 de Abril de 2022, criado pelo Advogado Diego Castro, e utilizada com autorização neste site.
 
 Informações Gerais:
 Nosso site se compromete a cumprir e respeitar os princípios previstos no art. 6º da Lei Geral de Proteção de dados, estando eles abaixo elencados e esclarecidos conforme ao tratamento de dados realizado por este site/blog:
 
 I – Princípio da Finalidade: Este site/blog respeita o que prevê o princípio da finalidade trazido na legislação supracitada, realizando o tratamento com finalidade legítima e específica, informando por meio desta Política de Privacidade e Segurança de forma explicita, aos titulares dos dados que serão tratados o motivo do tratamento.  Nenhum tratamento será realizado de forma incompatível com as finalidades que serão informadas neste documento. 
 
 II – Principio da Necessidade: Coletamos e tratamos apenas os dados necessários para a realização das finalidades explicitas do nosso site, com o compromisso de coletar e tratar o mínimo de informações do usuário do nosso site. Utilizamos apenas as informações/dados pertinentes, proporcionais com a a atividade desempenhada por nós, sem exceder nenhum limite na relação existente entre o usuário e o nosso site/blog, sendo todo e qualquer dado coletado e tratado conforme as finalidades estabelecidas em nossas páginas.
 
 III – Principio da Adequação: Todo tratamento realizado em nossas páginas é compatível com as finalidades informadas para o usuário/cliente, respectivo titular dos dados, não sendo realizado nenhum tipo de ação ou mecanismo que seja não condizente e desrespeite o contexto de tratamento necessário. 
 
 IV – Não discriminação: Os dados que coletamos, armazenamos e que realizamos qualquer tipo de tratamento não são utilizados para nenhum fim discriminatório, vexatório, ilícito ou abusivo. 
 
 V – Principio da Qualidade dos dados: Garantimos aos titulares dos dados clareza e relevância no momento da coleta e do tratamento dos dados, além da possibilidade de atualização, conforme se fizer necessário para que seja cumprida a finalidade do tratamento, conforme a atividade que for realizada pelo usuário/cliente em nosso site. 
 
 VI – Principio do Livre Acesso: Esclarecemos por meio desta Política de Privacidade e Segurança que garantimos a todos os titulares de dados que realizamos o tratamento, a consulta de maneira gratuita e fácil, a qualquer momento em que desejarem, por meio de um canal específico, sobre o tratamento realizado com os seus dados, assim como qualquer informação referente aos dados coletados, podendo inclusive acontecer atualização dos dados pessoais do titular, sem que a necessidade de qualquer requisição por parte do nosso site. 
 
 VII – Principio da Prevenção: Adotamos e zelamos pela prevenção de todo e qualquer ato que possa gerar dano aos dados coletados dos usuários/cliente, com medidas implantadas em busca de prevenir qualquer situação incomoda, ilegal, ou que gere qualquer espécie de prejuízo/dano aos dados pessoais que realizamos tratamos. 
 
 VIII – Principio da Transparência: Trabalhamos com clareza, precisão, exatidão e veracidade em todas as informações trazidas sobre o tratamento de dados, sendo o seu acesso fácil e disponível ao usuário/cliente nesta Política de Privacidade, bem como nos Termos de Uso no nosso site/blog. As informações respectivas aos agentes de tratamento seguem o mesmo critério de transparência acima elencados. Todas as informações trazidas sobre o tratamento e os agentes de tratamento respeitam os segredos comerciais e industriais. 
 
 IX – Principio da Segurança: Informamos que utilizamos todas as medidas cabíveis e possíveis na seara técnica e administrativa, visando a maior proteção dos dados pessoais, desde o momento em que temos acesso a eles. As técnicas utilizadas buscam proteger os dados pessoais de todo e qualquer acesso não autorizado, bem como de situações que possam causar danos ao titular dos dados, ainda que acidentais ou ilícitas. As técnicas que utilizamos buscam trazer segurança e proteção ao titular dos dados que realizamos o tratamento, visto que são tomadas em busca de prevenir e proteger as informações coletadas de qualquer situação ilícita de perda, destruição, compartilhamento, comunicação ou difusão não autorizada. 
 
 X – Principio da responsabilização e prestação de contas: O agente irá demonstrar e comprovar que cumpre e respeita todas as normas cabíveis a Proteção de Dados Pessoais, adotando medidas adequadas para isso de maneira eficaz. O nosso site realiza todas as etapas referentes ao tratamento de dados pessoais dos usuários/clientes que o acessam, sem desrespeitar qualquer norma ou princípio presente na Lei 13.709/2018, tendo de forma clara e objetiva o fundamento da finalidade para o tratamento de cada informação pessoal coletada. 
 
 Sobre o Nosso site/blog
 Nosso site/blog possuí textos, vídeos, imagens, áudios, e-books, bem como os demais conteúdos que você poderá visualizar ao acessar nossas abas, todos sem nenhum teor discriminatório, ilícito ou difamatório. 
 
 Traçamos planos e metas a serem seguidos para apresentar um conteúdo de valor, com informações relevantes referente ao tema aqui abordado. 
 
 Assumimos o compromisso por meio deste documento de proporcionar o melhor resultado no momento da navegação do nosso usuário/cliente, nos comprometendo a agir e trabalhar com total segurança e respeitando a privacidade dos dados pessoais tratados. 
 
 Tenha atenção a todas as informações disponibilizadas nesta página, pois é por meio dela que trazemos de forma clara e direta como acontecem todas as etapas de tratamento das informações pessoais coletadas, inclusive deixando claro o compartilhamento e divulgação (em alguns casos) que realizamos com parceiros. (caso tenham parceiros internacionais mencione – não apenas no âmbito nacional, como internacional, que mesmo fora do nosso País, respeitam todas as legislações que versam sobre o tratamento de dados). 
 
 A qualquer momento está Política de Privacidade e Segurança poderá ser modificada, conforme atualizações normativas ou alterações em nossa Política Interna, razão pela qual convidamos ao (a) nosso (a) usuário (a)/ cliente a consultar este documento periodicamente para que tenham ciência imediata de qualquer alteração que venha a acontecer. 
 
 Informações sobre o controlador e Responsável pelo Tratamento de dados
 Conforme previsão do art. 5º da Lei Geral de Proteção de dados trazemos aqui informações sobre o controlador definido pela legislação “in verbis”:
 
 Art. 5º, VI – controlador: pessoa natural ou jurídica, de direito público ou privado, a quem competem as decisões referentes ao tratamento de dados pessoais;
 
 (coloque o nome do site aqui) tem como CONTROLADOR e responsável por definir e tomar qualquer decisão referente ao tratamento de dados realizado por nós e por nossa equipe o Sr. (coloque o nome do CONTROLADOR aqui ou a EMPRESA responsável trazendo informações de contato). 
 
 O CONTROLADOR é um profissional/empresa de nossa inteira confiança, que está ciente de todas as normas trazidas na legislação que realiza a proteção de dados, além de ter total ciência e conhecimento das normas estabelecidas na nossa Política Interna. 
 
 Já o tratamento de dados coletados em nosso site é realizado pelo Sr. (coloque o nome da pessoa responsável pelo tratamento de dados aqui, caso se trate de uma empresa coloque o nome da empresa, trazendo suas informações como localização e contato)
 
 Informações sobre o Conteúdo do site/blog e Classificação Indicativa:
 O conteúdo trazido é direcionado para pessoas que tenham interesse, curiosidade ou busquem informações a respeito do conteúdo do nosso site.
 
 Todo conteúdo abordado em nossas páginas é produzido por nossa equipe ou por parceiros, respeitando as legislações nacionais, bem como, os valores éticos e humanos, além dos princípios morais, zelando pela transparência e veracidade em todas as informações trazidas. 
 
 Nosso conteúdo pode ser encontrado no Google, Yahoo ou outros buscadores, além de ser indicado por sites especializados, como o Eletro Críticas.
 O nosso site, bem como o seu conteúdo e os parceiros são indicados para pessoas com idade a partir de 18 anos.
 
 Caso você não tenha 18 anos de idade completos tenha ciência de que é necessário permissão do seu responsável para você ter acesso aos conteúdos trazidos em nossas páginas, sendo de total responsabilidade DO RESPONSÁVEL pelo menor de idade o acesso ao nosso material, bem como os conteúdos trazidos por nossos parceiros. 
 
 Sobre o tratamento de dados:
 Nosso site trabalha com determinadas operações e funcionalidades das quais se fazem necessárias o tratamento de dados pessoais, desde a etapa da sua coleta até a sua eliminação, ou armazenamento, como será discorrido abaixo:
 
 Da coleta de dados:
 Realizamos a coleta de dados dos usuários/visitantes/clientes do nosso site não apenas para realização dos serviços que prestamos, como também por segurança, já que qualquer ato irregular ou ilícito praticado por ele poderá ser passível de consequências especificas para o responsável. 
 
 A utilização de determinadas funções do nosso site depende expressamente da coleta de dados dos usuários como: nome, telefone de contato, e-mail, bem como os demais dados cabíveis para a finalidade que se apresenta no site. 
 
 A Coleta de Dados pode acontecer por todas as áreas do nosso site/blog, uma vez que ela acontece por meio do preenchimento de formulários, FAQ, envio de dúvidas, Chat ou cadastro. 
 
 Cientificamos ainda, que ao preencher formulário/FAQ/Cadastro ou qualquer tipo de área referente ao retorno de contato ou duvidas em nosso site, assim como o ACEITE dos COOKIES que utilizamos, O USUÁRIO /CLIENTE demonstra A CONCORDÂNCIA de forma objetiva, clara e expressa da coleta e tratamento de seus dados que será realizada pelo site/equipe do site/ parceiros do site respeitando todas as normas de proteção aos dados pessoais. 
 
 É indispensável ainda, informarmos que trabalhamos com ferramenta de análise de dados (analytics ou similar) para monitorar os resultados de acessos, comentários, entre outras informações sobre o desempenho do nosso site/blog. 
 
 Outros dados
 Nosso site também realiza a coleta e o tratamento de dados referentes ao dispositivo e vinculados ao registro de acesso. 
 
 Dados do dispositivo: Coletamos dados vinculados ao dispositivo que acessa ao nosso site, principalmente por motivo de segurança – dados como: modelo do hardware, sistema operacional, identificadores de dispositivo (localização e etc.). 
 Registros de Acesso: Coletamos e tratamos ações vinculadas ao uso de dados, desde a sua inclusão, até a exclusão de dados, IP do usuário/cliente, data (dia/mês/ano), hora do acesso realizado. 
 Dados de navegação: Realizamos a coleta e o tratamento de dados relativos à navegação, assim podemos desempenhar uma melhor experiencia para o usuário/cliente – navegador onde o usuário realizou o acesso e páginas acessadas. 
 Forma de coleta de dados
 A coleta de dados dos nossos usuários/cliente acontece respeitando todos os princípios e normas trazidos na Lei Geral de Proteção de Dados, com a condição expressa de consentimento livre e espontâneo do usuário para isso, visto que não realizamos nenhum tratamento sem permissão do usuário/cliente ou seu responsável. 
 
 Não utilizamos nenhum meio coercivo, autoritário, opressor, repressivo ou abusivo em busca de receber o consentimento do usuário para o tratamento de seus dados. 
 
 A tabela abaixo informa como acontece a coleta dos dados:
 
 Dado	Como acontece a coleta
 Dados pessoais do usuário	Coletados por meio de formulários, FAQS, Fale Conosco, e etc. (Coloque aqui o modo como acontece a coleta dos dados do usuário) 
 Dados do dispositivo	Coletados/Transmitidos/Transferidos pelo acesso ao serviço que acontece por meio da internet
 Registro de acesso	Coletado/Transmitidos/Transferidos pelo acesso ao serviço que acontece por meio da internet
 Dados de navegação	Coletados por meio de cookies durante a navegação no site. 
 A coleta de dados pessoais pode acontecer em diversos locais, páginas e abas do nosso site, por meio de preenchimento de formulários, FAQS, chat e cadastros necessários para o envio de materiais, realização de compras ou envio de informações. 
 
 O registro de acesso, os dados do dispositivo são coletados para a segurança do usuário/cliente bem como do proprietário do site e toda a sua equipe por meio do acesso ao serviço que disponibilizamos, que acontece no momento do acesso a nossa página. 
 
 Como buscamos conhecer melhor o nosso público trabalhamos com alguns mecanismos e plataformas que realizam a coleta de dados de nossos usuários/cliente automaticamente diretamente pelo sistema, sendo respeitadas todas as regras da LGPD, assim como a privacidade do usuário, proporcionando todos os meios técnicos e administrativos de segurança.
 
 Dados de navegação são coletados pelos nossos cookies a partir do momento em que se inicia a navegação no nosso site/blog. 
 
 Finalidade do tratamento dos dados pessoais
 Todos os dados que realizamos tratamentos são utilizados respeitando os princípios da Lei Geral de Proteção de Dados, principalmente o da finalidade, adequação e necessidade, sendo mantidos apenas em nosso sistema até o momento em que a sua finalidade continuar a existir. 
 
 Dado/Informações	Finalidade
 Dados do usuário/cliente	Identificar o usuário/cliente para a finalidade de cadastro/envio de materiais/respostas de dúvidas/envio de novidades e etc. (nesta parte defina a finalidade do tratamento de dados dos usuários) 
 Dados do dispositivo	Trazer um melhor acesso ao usuário, pois através dos dados coletados podemos adequar melhor o site/blog ao dispositivo/navegador do usuário/cliente (nesta parte defina a finalidade do tratamento dos dados do dispositivo)
 Registro de Acesso	Por meio destes dados proporcionamos maior segurança aos proprietários do site e aos usuários, pois assim podemos identificar qualquer ato que aconteça dentro do nosso site/blog (nesta parte defina a finalidade dos dados coletados do acesso ao site)
 Informações de Navegação	Através dessas informações conhecemos melhor o nosso usuário, podendo passar-lhe conteúdo que ele tem interesse, bem como indicar serviço dos nossos parceiros que ele demonstre preferência, que serão encontradas por meio das páginas que ele mais acessou. (nesta parte discorra qual a finalidade do tratamento realizado com as informações de navegação). 
 Os dados dos usuários são coletados e tratados unicamente com a finalidade para qual eles são fornecidos, sendo explicito em cada parte do nosso site/blog para o que servirá o dado fornecido seja por meio de cadastro, FAQ, envio de formulários, envios de novidades e etc. 
 
 Os dados do dispositivo são tratados para que possamos proporcionar a melhor experiência no seu acesso ao site, uma vez que é por meio dele que podemos adequar a visualização do site/blog ao dispositivo/navegador utilizado.
 
 Os registros de acesso são itens imprescindíveis no momento da realização de coleta e tratamento realizado pelo nosso site/blog, pois é por meio dele que podemos proporcionar maior segurança para os usuários e para a nossa equipe, uma vez que por meio desses dados pode identificar informações como endereço de IP, data, hora, atividade realizada e etc., em qualquer área do nosso site/blog, podendo objetivar qualquer ato ilícito que possa vir a acontecer. 
 
 As informações de navegação são a melhor forma de trazer conteúdo nosso e dos nossos parceiros para você, pois é através das informações de navegação que dividimos para cada usuário notícias, publicidades entre outros materiais de sua preferência. Essa preferência é objetivada pelos dados encontrados em páginas mais acessadas pelo usuário/cliente. 
 
 Tratamento realizado nos dados
 O tratamento de dados realizados no nosso site/blog respeita todas as normas previstas na legislação de proteção de dados, tendo base legal para ser realizado, acontecendo apenas com consentimento do usuário. 
 
 Todos os dados tratados são disponíveis para alteração e atualização a qualquer momento, inclusive durante todo o seu armazenamento. 
 
 Todos os dados coletados serão armazenados durante … (coloque o período de armazenamento dos dados) podendo ser alterado conforme a necessidade do serviço prestado, ou por motivo de qualquer disposição que possa vir a existir. 
 
 Veja a descrição do modo de tratamento realizado na tabela abaixo:
 
 Dado/Informação 	Tratamento realizado
 Dados Pessoais	Coleta, armazenamento, compartilhamento, comunicação… (neste tópico você discorre o tratamento realizado com os dados pessoais coletados) 
 Dados do Dispositivo	Coleta, armazenamento, processamento, compartilhamento, comunicação de informações de dispositivos que visitam nosso site/blog (coloque aqui o modo como é realizado o tratamento dos dados do dispositivo)
 Dados de Navegação	Coleta, armazenamento, processamento, compartilhamento, comunicação de informações vinculadas as preferências e comportamento do usuário/visitante que acessa ao nosso site/blog (discorra a respeito de como é realizado o tratamento dos dados de navegação)
 Dados não coletados
 Respeitando os princípios contidos no início desta Política de Privacidade e Segurança não realizamos a coleta de nenhum dado que não seja necessário para os serviços que prestamos, ou que tenha finalidade diversa das informadas. 
 
 Não coletamos dados sensíveis, exceto em casos onde houver determinação legal para isso, sendo informado o usuário de forma expressa da necessidade de tratamento caso venha a existir, bem como o tratamento que será realizado com ele. 
 
 Compartilhamento/divulgação/publicação dos dados coletados
 Respeitamos todos os limites previstos na Lei Geral de Proteção de dados referentes ao compartilhamento/divulgação ou publicação de dados coletados por nós, agindo de boa-fé e moralmente sem nenhuma intenção de causar dano ao nosso usuário/cliente. 
 
 Os dados serão compartilhados apenas com parceiros, se necessário, sendo ciente o usuário de que concede o compartilhamento dos seus dados ao aceitar preencher formulários em nosso site/blog em troca de materiais gratuitos.
 
 Os dados coletados e compartilhados conforme informação mencionada acima podem gerar retorno monetário ao proprietário e a equipe do site/blog, visto que ao preencher formulários em troca de materiais torna-se direito deste site/blog compartilhar as informações fornecidas em busca de gerar renda para manter este projeto. 
 
 Em casos previstos em leis, boletim, ou caso recebamos algum tipo de determinação de autoridade pública ou por meio de alguma determinação regulatória é realizado o compartilhamento de dados, a publicação ou divulgação. 
 
 O titular tem direito de permitir o compartilhamento e o acesso de seus dados a um terceiro, desde que informe de maneira expressa a permissão que deu ao titular. 
 
 Em situações onde somos informados que há investigação criminal ao ser requisitada cooperação do nosso site, deixamos cientes os nossos usuários/clientes que cooperamos do modo como nos for requisitado. 
 
 Sobre os nossos parceiros
 Todos os parceiros que trabalham conosco respeitam as normas previstas na Lei Geral de Proteção de Dados, bem como as demais legislações que tratam sobre esse assunto. 
 
 Informamos que o nosso site contém links e hiperlinks de nossos parceiros, ao clicar em algum desses links ou hiperlinks você é direcionado a um site externo, que não possui nenhum vínculo com o nosso site, tendo Política de Privacidade e Segurança, Política Interna e Termos de Uso diferente dos nossos. 
 
 Não temos nenhum poder ou informações para discorrer do modo como acontece o tratamento de dados pelos nossos parceiros, por isso busque conhecer a Política de Privacidade, Termos de Uso, bem como os demais documentos que versam sobre o tratamento de dados deles. 
 
 Sobre a nossa Equipe
 Nossa equipe tem ciência de todos os mecanismos técnicos e administrativos que devem ser utilizados no tratamento de dados, pois informamos em nossa Política Interna, conhecida por todos os nossos colaboradores o modo como deve acontecer todas as etapas do tratamento de dados, respeitando a privacidade e todas as normas trazidas na Lei 13.709/18. 
 
 OBS: Toda equipe que trabalha conosco tem conhecimento de todas as práticas e técnicas que devem ser utilizadas no tratamento dos dados que coletamos, pois todos tiveram e continuam a ter acesso a nossa Política Interna e Política de Governança, bem como possuem treinamentos específicos para isso, sendo que qualquer ato (realizado por alguém que participe da nossa equipe) considerado ilícito ou danoso ao titular de dados gerara responsabilização direta e será motivo cabível para demissão com justa causa.
 
 Segurança no Tratamento de Dados
 O nosso site tem o compromisso de realizar toda e qualquer medida técnica, administrativa e institucional referente a proteção de dados pessoais. 
 
 As técnicas de segurança utilizadas protegem os dados do usuário/cliente de acessos por terceiros não autorizados, bem como de qualquer ocasião que possa trazer algum tipo de modificação, destruição, difusão, compartilhamento, divulgação, comunicação dos dados sem autorização e desrespeitando a Lei Geral de Proteção de Dados. 
 
 Todas as medidas de proteção e segurança são tomadas especificadamente para o dado coletado, respeitando o contexto e a finalidade que essa informação possui. 
 
 O nosso site aplica criptografia e/ou firewall proporcionando assim a transmissão de maneira segura, privativa e confidencial. 
 
 As transmissões que acontecem entre o transmissor e o usuário/clientes acontecem de maneira totalmente cifrada, em busca de proteger os dados coletados. 
 
 Nós se compromete a avisar ao titular dos dados de qualquer violação ou acesso suspeito que possa causar algum risco de dano aos direitos e liberdades pessoais do titular. 
 
 Disponibilizamos o canal de comunicação no final deste texto para que o nosso usuário/cliente possa informar qualquer situação que identifique falha, vulnerabilidade na segurança ou defeito na realização do tratamento dos dados coletados. 
 
 Cookies e Newlestter
 Os cookies são arquivos que possuem tamanhos pequenos e são enviados pelo nosso site ao seu computador, para que assim possamos armazenar informações de navegação e os dados do usuário/cliente necessários para o serviço que desempenhamos. 
 
 Os cookies são o meio pelo qual realizamos o registro de dados e preferenciais dos nossos usuários/clientes de modo rápido para que possamos proporcionar uma experiência adequada ao ser realizado o acesso a nossa página, trazendo inclusive serviços relacionados as pesquisas que você faz em nosso site/blog. 
 
 Informamos ainda, que nem todos os cookies trazidos neste site/blog realiza a coleta e o armazenamento de dados pessoais, visto que alguns dos cookies trazidos são utilizados para o desempenho de algum dos serviços que prestamos. 
 
  A “newlestter” é o meio pelo qual notificamos e informamos os nossos usuários/clientes de qualquer atualização que realizamos. 
 
 Os dados informados para a “newlestter” são utilizados apenas com essa finalidade, sem qualquer destinação contrária ou que desrespeite a legislação de Proteção de Dados. 
 
 Você não é obrigado a aceitar os “cookies” ou a “newlestter”, é de sua livre escolha optar ou não pelo registro de “cookies”, caso não deseje que ele aconteça, utilize a opção em seu navegador/ aparelho de desativação do registro de cookies.
 
  Informamos que a desativação dos cookies pode lhe trazer uma experiência incompleta ou com falhas na sua visita ao nosso site/blog, além de não trazer o desempenho correto das ferramentas e funções que disponibilizamos em nossas páginas. 
 
 A desativação dos cookies pode ocasionar ainda prejuízos na prestação do nosso serviço fim, bem como, em alguns casos não poderemos lhe proporcionar uma experiência mais adequada as suas preferências pois não teremos acesso a elas. 
 
 Tratamento de dados para outras finalidades
 Respeitando o que prevê a Lei Geral de Proteção de Dados informamos aos nossos usuários/cliente que podemos realizar o tratamento de seus dados para finalidades diversas posteriormente, sem que isso cause qualquer dano ou desrespeito ao titular dos dados, informando abaixo a finalidade de uso posterior das informações coletadas. 
 
 As informações que coletamos sobre o titular, dispositivo, navegação, localização e etc., podem continuar a ser utilizadas para que desenvolvamos a prestação de serviços mais aprimorados e de uma melhor experiência para o usuário/cliente em nossa página. 
 
 Caso o titular dos dados requeira a exclusão de seus dados pode entrar em contato conosco pelo e-mail informado nesta Política de Privacidade. 
 
 Após o requerimento do titular na exclusão de seus dados acontecer, anonimizaremos os dados, sendo que esses continuarão em nossos arquivos de modo anonimizado, podendo ser utilizados futuramente com a finalidade de pesquisa, geração de estatísticas, divulgação de informações especificas, e ainda, em publicações. 
 
 Consentimento do usuário
 O usuário/cliente ao acessar o nosso site/blog demonstra está de acordo com todas as informações contidas em nossa Política de Privacidade e Termos de Uso, bem como concede de livre e espontânea vontade que seus dados sejam tratados pela nossa equipe respeitando os princípios da finalidade, necessidade e adequação. 
 
 É livre o consentimento do usuário/cliente, uma vez que não utilizamos de nenhum meio de coação, obrigatoriedade, indução, constrangimento, ameaça ou imposição para que o usuário/cliente conceda e permita que seja realizado o tratamento de seus dados. 
 
 Eliminação de dados
 Caso o usuário/cliente não permita o armazenamento de seus dados, pode entrar em contato conosco por meio dos canais de contato abaixo:
 
 E-mail: (informe o e-mail para ser requerida a eliminação dos dados)
 
 Telefone: (informe o telefone para o titular dos dados entre em contato e requeira a eliminação de seus dados)
 
 Após o requerimento de eliminação de dados, temos o prazo de … (coloque a quantidade de dias necessárias para que o dado seja eliminado ou anonimizado) dias para que os dados sejam eliminados ou anonimizados.
 
 Canais de Contato e encarregado
 Disponibilizamos canais de contato para o nosso usuário/cliente em busca de termos um relacionamento claro e cordial, nos disponibilizando para esclarecer qualquer dúvida sobre o nosso site, bem como sobre o modo como realizamos o tratamento de seus dados. 
 
 Buscamos por meio desse profissional ter uma comunicação melhor e mais direta com os nossos usuários/clientes.
 
 Disponibilizamos abaixo Canais de Atendimento para você poder entrar em contato com o nosso responsável pelo controle de dados: (inserir nome do responsável)
 
 E-mail: (coloque o e-mail para contato aqui)
 Telefone: (coloque o número de telefone aqui)
 Está Política de Privacidade e Segurança passa a ter validade a partir de 25 de abril de 2022 com validade indeterminada.`

  const PoliticadeUso = `Termos e condições de uso do site ou blog

  Seja bem-vindo ao nosso site. Leia com atenção todos os termos abaixo.
  
  Este documento, e todo o conteúdo do site é oferecido por (ADICIONAR DADOS DA EMPRESA OU NOME FANTASIA), neste termo representado apenas por “EMPRESA”, que regulamenta todos os direitos e obrigações com todos que acessam o site, denominado neste termo como “VISITANTE”, reguardado todos os direitos previstos na legislação, trazem as cláusulas abaixo como requisito para acesso e visita do mesmo, situado no endereço (ADICIONAR ENDEREÇO DO SITE).
  
  A permanência no website implica-se automaticamente na leitura e aceitação tácita do presente termos de uso a seguir. Este termo foi atualizado pela última vez em 14 de setembro de 2021.
  
  1. DA FUNÇÃO DO SITE
  Este site foi criado e desenvolvido com a função de trazer conteúdo informativo de alta qualidade, a venda de produtos físicos, digitais e a divulgação de prestação de serviço. A EMPRESA busca através da criação de conteúdo de alta qualidade, desenvolvido por profissionais da área, trazer o conhecimento ao alcance de todos, assim como a divulgação dos próprios serviços.
  
  Nesta plataforma, poderá ser realizado tanto a divulgação de material original de alta qualidade, assim como a divulgação de produtos de e-commerce.
  
  Todo o conteúdo presente neste site foi desenvolvido buscando fontes e materiais de confiabilidade, assim como são baseados em estudos sérios e respeitados, através de pesquisa de alta nível.
  
  Todo o conteúdo é atualizado periodicamente, porém, pode conter em algum artigo, vídeo ou imagem, alguma informação que não reflita a verdade atual, não podendo a EMPRESA ser responsabilizada de nenhuma forma ou meio por qualquer conteúdo que não esteja devidamente atualizado.
  
  É de responsabilidade do usuário de usar todas as informações presentes no site com senso crítico, utilizando apenas como fonte de informação, e sempre buscando especialistas da área para a solução concreta do seu conflito.
  
  2. DO ACEITE DOS TERMOS
  Este documento, chamado “Termos de Uso”, aplicáveis a todos os visitantes do site, foi desenvolvido por Diego Castro Advogado – OAB/PI 15.613, modificado com permissão para este site.
  
  Este termo especifica e exige que todo usuário ao acessar o site da EMPRESA, leia e compreenda todas as cláusulas do mesmo, visto que ele estabelece entre a EMPRESA e o VISITANTE direitos e obrigações entre ambas as partes, aceitos expressamente pelo VISITANTE a permanecer navegando no site da EMPRESA.
  
  Ao continuar acessando o site, o VISITANTE expressa que aceita e entende todas as cláusulas, assim como concorda integralmente com cada uma delas, sendo este aceite imprescindível para a permanência na mesma. Caso o VISITANTE discorde de alguma cláusula ou termo deste contrato, o mesmo deve imediatamente interromper sua navegação de todas as formas e meios.
  
  Este termo pode e irá ser atualizado periodicamente pela EMPRESA, que se resguarda no direito de alteração, sem qualquer tipo de aviso prévio e comunicação. É importante que o VISITANTE confira sempre se houve movimentação e qual foi a última atualização do mesmo no começo da página.
  
  3. DO GLOSSÁRIO
  Este termo pode conter algumas palavras específicas que podem não se de conhecimento geral. Entre elas:
  
  VISITANTE: Todo e qualquer usuário do site, de qualquer forma e meio, que acesse através de computador, notebook, tablet, celular ou quaisquer outros meios, o website ou plataforma da empresa.
  NAVEGAÇÃO: O ato de visitar páginas e conteúdo do website ou plataforma da empresa.
  COOKIES: Pequenos arquivos de textos gerados automaticamente pelo site e transmitido para o navegador do visitante, que servem para melhorar a usabilidade do visitante.
  LOGIN: Dados de acesso do visitante ao realizar o cadastro junto a EMPRESA, dividido entre usuário e senha, que dá acesso a funções restritas do site.
  HIPERLINKS: São links clicáveis que podem aparecer pelo site ou no conteúdo, que levam para outra página da EMPRESA ou site externo.
  OFFLINE: Quando o site ou plataforma se encontra indisponível, não podendo ser acessado externamente por nenhum usuário.
  Em caso de dúvidas sobre qualquer palavra utilizada neste termo, o VISITANTE deverá entrar em contato com a EMPRESA através dos canais de comunicação encontradas no site.
  
  4. DO ACESSO AO SITE
  O Site e plataforma funcionam normalmente 24 (vinte e quatro) horas por dia, porém podem ocorrer pequenas interrupções de forma temporária para ajustes, manutenção, mudança de servidores, falhas técnicas ou por ordem de força maior, que podem deixar o site indisponível por tempo limitado.
  
  A EMPRESA não se responsabiliza por nenhuma perda de oportunidade ou prejuízos que esta indisponibilidade temporária possa gerar aos usuários.
  
  Em caso de manutenção que exigirem um tempo maior, a EMPRESA irá informar previamente aos clientes da necessidade e do tempo previsto em que o site ou plataforma ficará offline.
  
  O acesso ao site só é permitido a maiores de 18 anos de idade ou que possuírem capacidade civil plena. Para acesso de menores de idade, é necessária a expressa autorização dos pais ou tutores, ficando o mesmo responsáveis sobre qualquer compra ou acesso efetuados pelo mesmo.
  
  Caso seja necessário realizar um cadastro junto a plataforma, onde o VISITANTE deverá preencher um formulário com seus dados e informações, para ter acesso a alguma parte restrita, ou realizar alguma compra.
  
  Todos os dados estão protegidos conforme a Lei Geral de Proteção de Dados, e ao realizar o cadastro junto ao site, o VISITANTE concorda integralmente com a coleta de dados conforme a Lei e com a Política de Privacidade da EMPRESA.
  
  5. DA LICENÇA DE USO E CÓPIA
  O visitante poderá acessar todo o conteúdo do website, como artigos, vídeos, imagens, produtos e serviços, não significando nenhum tipo de cessão de direito ou permissão de uso, ou de cópia dos mesmo.
  
  Todos os direitos são preservados, conforme a legislação brasileira, principalmente na Lei de Direitos Autorais (regulamentada na Lei nº 9.610/18), assim como no Código Civil brasileiro (regulamentada na Lei nº 10.406/02), ou quaisquer outras legislações aplicáveis.
  
  Todo o conteúdo do site é protegido por direitos autorais, e seu uso, cópia, transmissão, venda, cessão ou revenda, deve seguir a lei brasileira, tendo a EMPRESA todos os seus direitos reservados, e não permitindo a cópia ou utilização de nenhuma forma e meio, sem autorização expressa e por escrita da mesma.
  
  A EMPRESA poderá em casos concretos permitir pontualmente exceções a este direito, que serão claramente destacados no mesmo, com a forma e permissão de uso do conteúdo protegido. Este direito é revogável e limitado as especificações de cada caso.
  
  6. DAS OBRIGAÇÕES
  O VISITANTE ao utilizar o website da EMPRESA, concorda integralmente em:
  
  De nenhuma forma ou meio realizar qualquer tipo de ação que tente invadir, hacker, destruir ou prejudicar a estrutura do site, plataforma da EMPRESA ou de seus parceiros comerciais. Incluindo-se, mas não se limitando, ao envio de vírus de computador, de ataques de DDOS, de acesso indevido por falhas da mesma ou quaisquer outras forma e meio.
  De não realizar divulgação indevida nos comentários do site de conteúdo de SPAM, empresas concorrentes, vírus, conteúdo que não possua direitos autorais ou quaisquer outros que não seja pertinente a discussão daquele texto, vídeo ou imagem.
  Da proibição em reproduzir qualquer conteúdo do site ou plataforma sem autorização expressa, podendo responder civil e criminalmente pelo mesmo.
  Com a Política de Privacidade do site, assim como tratamos os dados referentes ao cadastro e visita no site, podendo a qualquer momento e forma, requerer a exclusão dos mesmos, através do formulário de contato.
  7. DA MONETIZAÇÃO E PUBLICIDADE
  A EMPRESA pode alugar ou vender espaços publicitários na plataforma, ou no site, diretamente aos anunciantes, ou através de empresas especializadas com o Adsense (Google), Taboola ou outras plataformas especializadas como o Eletro Criticas
  
  Essas publicidades não significam nenhuma forma de endosso ou responsabilidade pelos mesmos, ficando o VISITANTE responsável pelas compras, visitas, acessos ou quaisquer ações referentes as estas empresas.
  
  Todas as propagandas no site ou plataforma serão claramente destacadas como publicidade, como forma de disclaimer da EMPRESA e de conhecimento do VISITANTE.
  
  Em casos de compra de produtos ou serviços, será possível a devolução em até 07 (sete) dias, conforme o Código de Defesa do Consumidor.
  
  Estes anúncios podem ser selecionados pela empresa de publicidade automaticamente, conforme as visitas recentes do VISITANTE, assim como baseado no seu histórico de busca, conforme as políticas de acesso da plataforma.
  
  8. DOS TERMOS GERAIS
  O Site irá apresentar hiperlinks durante toda a sua navegação, que podem levar diretamente para outra página da EMPRESA ou para sites externos.
  
  Apesar da EMPRESA apenas criar links para sites externos de extrema confiança, caso o usuário acesse um site externo, a EMPRESA não tem nenhuma responsabilidade pelo meio, sendo uma mera indicação de complementação de conteúdo, ficando o mesmo responsável pelo acesso, assim como sobre quaisquer ações que venham a realizar neste site.
  
  Em caso que ocorra eventuais conflitos judiciais entre o VISITANTE e a EMPRESA, o foro elegido para a devida ação será o da comarca da Empresa, mesmo que haja outro mais privilegiado.
  
  Este Termo de uso é valido a partir de 14 de setembro de 2021.`;
  const faqAnswers = [
    PoliticadeUso,
    politicadePrivacidade,
    "Em breve",

  ];
  return (
    <StyledTermsBody style={{ whiteSpace: "pre-wrap" }}>
      <h2 style={{ fontFamily: "DolceVita" }}>Termos de Uso, Privacidade e Cookies</h2>
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
    </StyledTermsBody>
  );
};
