import React from 'react';
import './style.css'; 

function App() {
  const handleMouseOver = (event) => {
    // Exibe a descrição alternativa ao passar o mouse sobre uma imagem, som ou vídeo
    const alt = event.target.alt || event.target.title;
    alert(`Descrição Alternativa: ${alt}`);
  };

  const handleMouseOverLink = (event) => {
    // Destaca o link ou item de menu ao passar o mouse sobre ele
    event.target.style.backgroundColor = '#ddd';
  };

  const handleMouseLeaveLink = (event) => {
    // Restaura a cor de fundo ao sair do link ou item de menu
    event.target.style.backgroundColor = '';
  };
   //menu:
  <nav>
    <ul>
      <li>
        <a
          href="#section1"
          onMouseOver={handleMouseOverLink}
          onMouseLeave={handleMouseLeaveLink}
        >
          Trabalho que Desempenho
        </a>
      </li>
      <li>
        <a
          href="#section2"
          onMouseOver={handleMouseOverLink}
          onMouseLeave={handleMouseLeaveLink}
        >
          A Empresa
        </a>
      </li>
      <li>
        <a
          href="#section3"
          onMouseOver={handleMouseOverLink}
          onMouseLeave={handleMouseLeaveLink}
        >
          Principais Produtos
        </a>
      </li>
      <li>
        <a
          href="#section4"
          onMouseOver={handleMouseOverLink}
          onMouseLeave={handleMouseLeaveLink}
        >
          Programa de Treinamento
        </a>
      </li>
    </ul>
  </nav>
  //fim menu

  // Componente para cada Seção
  const Section = ({ id, title, content }) => {
    return (
      <section id={id}>
        <h2>{title}</h2>
        {content}
      </section>
    );
  };

  // Dados da Página
    const sections = [
      {
        id: 'section1',
        title: 'Trabalho que Desempenho',
        content: (
          <p>
            Trabalho na empresa há 10 anos, onde presto, aos clientes, suporte de utilização dos sistemas que a empresa desenvolve.
            O atendimento é gratuito, realizado por telefone, WhatsApp, Chat e e-mail.
          </p>
        ),
      },

      {
        id: 'section2',
        title: 'A Empresa',
        content: (
          <p>
            No mercado desde 1994, a Exotics Informática desenvolve sistemas inteligentes e de alta qualidade para profissionais das áreas jurídica, contábil e econômica. Com sede em Porto Alegre e mais de 10 mil clientes em todo o país, elabora soluções de acordo com as necessidades dos usuários, presta atendimento personalizado e busca a plena satisfação de seus clientes.Oferece suporte técnico gratuito.
<a href="https://www.exotics.com.br/sobre.html" target="_blank">Acesse o site da empresa para conhecer mais</a>
          </p>
        ),
      },

      {
        id: 'section3',
        title: 'Principais Produtos',
        content: (
          <table>
            <tr>
              <th>Memorial</th>
              <th>Advoc</th>
          <th>Previdenciário</th>
            </tr>

            <tr>		
              <td>
          <center>
          Sistema para cálculos de correção monetária, liquidação de sentenças, revisão de financiamentos e controle de débitos.
          <p><a href="https://www.memocalc.com.br/" target="_blank">Acesse a homepage do sistema</a></p>
          </center>
          </td>	

              <td>
          <center>
          Avançado sistema para controle e gerenciamento de processos, desde 1994 atende totalmente as necessidades de escritórios e departamentos jurídicos.
          <p><a href="https://advoc.com.br/" target="_blank">Acesse a homepage do sistema</a></p>
          </center>
          </td>

          <td>
          <center>
          Sistema para cálculos revisionais de benefícios do INSS com acesso total pela internet. 
          <p><a href="https://www.memoprev.com.br/" target="_blank">Acesse a homepage do sistema</a></p>
          </center>
          </td>
            </tr>
          </table>
        ),
      },

      {
        id: 'section4',
        title: 'Conheça nosso programa de treinamento:',
        content: (
          <iframe width="560" height="315" src="https://www.youtube.com/embed/skHtodEBX2s?si=B1A2KYa8_IyapcuG" title="YouTube video player - Vídeo sobre o programa de treinamento da empresa" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        ),
      },
    ];

    return (
      <div>
        {/* Barra de Navegação */}
        <Navbar />

        {/* Seções da Página */}
        {sections.map((section) => (
          <Section
            key={section.id}
            id={section.id}
            title={section.title}
            content={section.content}
          />
        ))}

        {/* Rodapé */}
        <footer>
          <p>Autora: Esther G. K. S. Borges</p>
          <p>Data de Criação: 23 de novembro de 2023</p>
        </footer>
      </div>
    );
  };
