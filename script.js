let questionCount = 1;



document.getElementById('addQuestion').addEventListener('click', function() {
  questionCount++;
  const questionBlock = document.createElement('div');
  questionBlock.classList.add('question-block');
  questionBlock.innerHTML = `
    <h2>Questão ${questionCount}</h2>
    <label for="category">Categoria:</label>
    <select id="category${questionCount}" name="category">
      <optgroup label="Negócios">
            <option value="branding">Branding</option>
            <option value="auditoria-controladoria">Auditoria e Controladoria</option>
            <option value="laboratorio-inovacao-mkt1">Laboratório de Inovação MKT_1</option>
            <option value="administracao-cargos-salarios">Administração de Cargos e Salários</option>
            <option value="comportamento-organizacional">Comportamento Organizacional</option>
            <option value="comportamento-consumidor-neuromarketing">Comportamento do Consumidor e Neuromarketing</option>
            <option value="comunicacao-empresarial">Comunicação Empresarial</option>
            <option value="contabilidade-gerencial">Contabilidade Gerencial</option>
            <option value="custos-formacao-precos">Custos e Formação de Preços</option>
            <option value="direito-trabalho">Direito do Trabalho</option>
            <option value="economia-criativa">Economia Criativa</option>
            <option value="economia">Economia</option>
            <option value="etica-profissional-desenvolvimento-sustentavel-empreendedorismo">Ética Profissional Desenvolvimento Sustentável e Empreendedorismo</option>
            <option value="estatistica-aplicada">Estatística Aplicada</option>
            <option value="estrategia-vendas-gestao-servicos">Estratégia de Vendas e Gestão de Serviços</option>
            <option value="gestao-negocios-inovacao">Gestão de Negócios e da Inovação</option>
            <option value="gestao-tecnologia-rh">Gestão da Tecnologia em RH</option>
            <option value="gestao-pessoas">Gestão de Pessoas</option>
            <option value="gestao-custos-precos">Gestão de Custos e Preços</option>
            <option value="gestao-financeira-orcamentaria">Gestão Financeira e Orçamentária</option>
            <option value="gestao-competencias-desempenho">Gestão por Competências e Desempenho</option>
            <option value="inovacao-tecnologia">Inovação e Tecnologia</option>
            <option value="laboratorio-inovacao-i">Laboratório de Inovação I</option>
            <option value="laboratorio-inovacao-ii">Laboratório de Inovação II</option>
            <option value="laboratorio-inovacao-iii">Laboratório de Inovação III</option>
            <option value="laboratorio-inovacao-iv">Laboratório de Inovação IV</option>
            <option value="laboratorio-inovacao-v">Laboratório de Inovação V</option>
            <option value="linguagem-programacao-mobile">Linguagem de Programação Mobile</option>
            <option value="logica-programacao-mkt-gc">Lógica de Programação (MKT e GC)</option>
            <option value="logistica">Logística</option>
            <option value="marketing-contemporaneo">Marketing Contemporâneo</option>
            <option value="marketing-relacionamento">Marketing de Relacionamento</option>
            <option value="marketing-digital-plataformas-ecommerce">Marketing Digital e Plataformas de E-commerce</option>
            <option value="padroes-web">Padrões Web</option>
            <option value="pesquisa-marketing">Pesquisa de Marketing</option>
            <option value="planejamentos-politicas-rh">Planejamentos e Políticas de Recursos Humanos</option>
            <option value="plataformas-ecommerce-marketing-digital">Plataformas de E-commerce e Marketing Digital</option>
            <option value="praticas-dp">PRÁTICAS DE DP</option>
            <option value="praticas-tecnicas-administracao-pessoal">Práticas e Técnicas de Administração de Pessoal</option>
            <option value="publicidade-propaganda-merchandising">Publicidade, Propaganda e Merchandising</option>
            <option value="qualidade-vida-trabalho">Qualidade de Vida no Trabalho</option>
            <option value="qualidade-atendimento-servicos">Qualidade no Atendimento e Prestação de Serviços</option>
            <option value="recrutamento-selecao">Recrutamento e Seleção</option>
            <option value="redes-sociais-midias-digitais-mkt-conteudo">Redes Sociais, Mídias Digitais e MKT de Conteúdo</option>
            <option value="relacoes-publicas-gestao-eventos-crises">Relações Públicas, Gestão de Eventos e de Crises</option>
            <option value="retail-trends">Retail Trends</option>
            <option value="teorias-tecnicas-grupo">Teorias e Técnicas de Grupo</option>
            <option value="4Gestão-Comercial-Prova-2-23">4º Gestão Comercial-Prova 2-23</option>
            <option value="Administracao-de-Carreiras-Cargos-Salarios">Administração de Carreiras, Cargos e Salários</option>
            <option value="Controladoria-Auditoria-Ouvidoria">Controladoria, Auditoria e Ouvidoria</option>
            <option value="Desenvolvimento-de-Interfaces-Web">Desenvolvimento de Interfaces Web</option>
            <option value="Ingles-Tecnico">Inglês Técnico</option>
            <option value="Tecnologia-Aplicada-a-RH">Tecnologia Aplicada à RH</option>
        </optgroup>

        
        <optgroup label="TI">
            <option value="administracao-redes">Administração de Redes</option>
            <option value="analise-preditiva">Análise Preditiva</option>
            <option value="atualidades">Atualidades</option>
            <option value="banco-dados-massivo">Banco de Dados Massivo</option>
            <option value="banco-dados-nosql">Banco de Dados NOSQL</option>
            <option value="banco-dados-tomada-decisao">Banco de Dados para Tomada de Decisão</option>
            <option value="comunicacao-empresarial-ti">Comunicação Empresarial TI</option>
            <option value="criptografia-certificacao-digital">Criptografia e Certificação Digital</option>
            <option value="desenvolvimento-sustentavel-empreendedorismo">Desenvolvimento Sustentável e Empreendedorismo</option>
            <option value="desenvolvimento-sistemas-informacao">Desenvolvimento de Sistemas da Informação</option>
            <option value="engenharia-software">Engenharia de Software</option>
            <option value="estatistica-aplicada-ti">Estatística Aplicada</option>
            <option value="etica-profissional-ti">Ética Profissional Desenvolvimento Sustentável e Empreendedorismo</option>
            <option value="fundamentos-banco-dados">Fundamentos de Banco de Dados</option>
            <option value="gestao-projetos">Gestão de Projetos</option>
            <option value="gestao-seguranca-informacao">Gestão da Segurança da Informação</option>
            <option value="gestao-risco">Gestão de Risco</option>
            <option value="gestao-servicos-ti">Gestão de Serviços de TI</option>
            <option value="governanca-ti">Governança de TI</option>
            <option value="infraestrutura-hardware">Infraestrutura de Hardware</option>
            <option value="infraestrutura-redes">Infraestrutura de Redes</option>
            <option value="introducao-computacao">Introdução à Computação</option>
            <option value="laboratorio-inovacao-i-ti">Laboratório de Inovação I</option>
            <option value="laboratorio-inovacao-ii-ti">Laboratório de Inovação II</option>
            <option value="laboratorio-inovacao-iii">Laboratório de Inovação III</option>
            <option value="laboratorio-inovacao-iv">Laboratório de Inovação IV</option>
            <option value="laboratorio-inovacao-v">Laboratório de Inovação V</option>
            <option value="linguagem-banco-dados">Linguagem de Banco de Dados</option>
            <option value="linguagem-programacao-mobile">Linguagem de Programação Mobile</option>
            <option value="linguagem-orientada-objeto">Linguagem Orientada a Objeto</option>
            <option value="linguagem-orientada-objetos-ii">Linguagem Orientada a Objetos II</option>
            <option value="linguagem-tecnica-programacao-i">Linguagem Técnica de Programação I</option>
            <option value="linguagem-tecnica-programacao-ii">Linguagem Técnica de Programação II</option>
            <option value="logica-programacao">Lógica de Programação</option>
            <option value="matematica-computacional">Matemática Computacional</option>
            <option value="matematica">Matemática</option>
            <option value="padroes-web">Padrões WEB</option>
            <option value="seguranca-rede-computadores">Segurança em Rede de Computadores</option>
            <option value="sistemas-operacionais">Sistemas Operacionais</option>
            <option value="telecomunicacoes-aplicada-ti">Telecomunicações Aplicada à TI</option>
            <option value="topicos-avancados-programacao">Tópicos Avançados em Programação</option>
            <option value="deep-learning">Deep Learning</option>
            <option value="fundamentos-estatistica">Fundamentos de Estatística</option>
            <option value="gestao-conhecimento">Gestão do Conhecimento</option>
            <option value="ingles-tecnico">Inglês Técnico</option>
            <option value="inteligencia-artificial">Inteligência Artificial</option>
            <option value="otimizacao-performance-banco-dados">Otimização e Performance de Banco de Dados</option>
            <option value="politica-qualidade-testes">Política de Qualidade/Testes, Métricas e Qualidade de Software</option>
            <option value="seguranca-cibernetica">Segurança Cibernética</option>
            <option value="seguranca-informacao">Segurança da Informação</option>
            <option value="seguranca-sistemas-operacionais">Segurança em Sistemas Operacionais</option>
            <option value="software-livre-etl">Software Livre para ETL</option>
            <option value="topicos-avancados-banco-dados">Tópicos Avançados em Banco de Dados</option>
            <option value="topicos-avancados-ciencia-dados">Tópicos Avançados em Ciência de Dados</option>
            <option value="topicos-avancados-ti">Tópicos Avançados em TI</option>
            <option value="forense-digital">Forense Digital</option>
            <option value="fundamentos-computacao-nuvem">Fundamentos de Computação em Nuvem</option>
            <option value="linguagem-programacao-web">Linguagem de Programação para Web</option>
            <option value="tecnicas-ataque-defesa">Técnicas de Ataque e Defesa</option>
            <option value="testes-metricas-qualidade-software">Testes, Métricas e Qualidade de Software</option>
          </optgroup>
    </select>

   <label for="titulo">Título da Questão:</label>
    <input type="text" id="titulo${questionCount}" name="titulo" required>

    <label for="questionText">Enunciado:</label>
    <div id="editor${questionCount}" style="height: 150px"></div>
    <input type="hidden" id="questionText${questionCount}" name="questionText">

    <label>Alternativas:</label>
    <input type="text" id="altA${questionCount}" placeholder="Alternativa A" required>
    <input type="text" id="altB${questionCount}" placeholder="Alternativa B" required>
    <input type="text" id="altC${questionCount}" placeholder="Alternativa C" required>
    <input type="text" id="altD${questionCount}" placeholder="Alternativa D" required>
    <input type="text" id="altE${questionCount}" placeholder="Alternativa E (opcional)">

    <label for="correctAnswer">Resposta Correta:</label>
    <select id="correctAnswer${questionCount}">
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
      <option value="D">D</option>
      <option value="E">E</option>
    </select>
  `;
  document.getElementById('quizForm').insertBefore(questionBlock, document.getElementById('addQuestion'));

  // Inicializando o Quill
  const quill = new Quill(`#editor${questionCount}`, {
    theme: 'snow',
    modules: {
        toolbar: [
          ['bold', 'italic', 'underline'],
          ['link', 'image', 'code'],
          [{ list: 'ordered'}, { list: 'bullet' }],
          ['clean']
        ]
    }
  });
});




// Evento para enviar o formulário e gerar o XML
document.getElementById('quizForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Previne o envio padrão do formulário

  // Atualiza o valor do campo hidden com o conteúdo do Quill
  for (let i = 1; i <= questionCount; i++) {
    const quillInstance = new Quill(`#editor${i}`);
    document.getElementById(`questionText${i}`).value = quillInstance.root.innerHTML;
  }

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n`;

  for (let i = 1; i <= questionCount; i++) {
    const title = document.getElementById(`titulo${i}`).value;
    const category = document.getElementById(`category${i}`).value;
    const questionText = document.getElementById(`questionText${i}`).value;
    const altA = document.getElementById(`altA${i}`).value;
    const altB = document.getElementById(`altB${i}`).value;
    const altC = document.getElementById(`altC${i}`).value;
    const altD = document.getElementById(`altD${i}`).value;
    const altE = document.getElementById(`altE${i}`).value || "";
    const correctAnswer = document.getElementById(`correctAnswer${i}`).value;

    xml += `
      <!-- question: ${i} -->
      <question type="multichoice">
        <name><text>${title}</text></name>
        <questiontext format="html"><text><![CDATA[${questionText}]]></text></questiontext>
        <answer fraction="${correctAnswer === 'A' ? 100 : 0}" format="html"><text><![CDATA[${altA}]]></text></answer>
        <answer fraction="${correctAnswer === 'B' ? 100 : 0}" format="html"><text><![CDATA[${altB}]]></text></answer>
        <answer fraction="${correctAnswer === 'C' ? 100 : 0}" format="html"><text><![CDATA[${altC}]]></text></answer>
        <answer fraction="${correctAnswer === 'D' ? 100 : 0}" format="html"><text><![CDATA[${altD}]]></text></answer>
        <answer fraction="${correctAnswer === 'E' ? 100 : 0}" format="html"><text><![CDATA[${altE}]]></text></answer>
      </question>\n`;
  }

  xml += `</quiz>`;

  // Aqui você pode fazer algo com o XML, como exibir em um alert ou baixar como um arquivo
  console.log(xml); // Para depuração, você pode exibir o XML no console
  // Exemplo para baixar o arquivo:
  const blob = new Blob([xml], { type: 'text/xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'quiz.xml';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

// Adiciona evento para o botão "Limpar"
document.getElementById('clearForm').addEventListener('click', function() {
    // Limpa o formulário
    document.getElementById('quizForm').reset();
    
    // Reinicia o contador de questões
    questionCount = 0;
  });

  