# Absoluta Saúde - Automação de Implantação

## Descrição
**Absoluta Saúde - Automação de Implantação** é uma extensão do Chrome projetada para automatizar o processo de cadastro de beneficiários em plataformas de seguro de saúde, começando com a plataforma Unimed. Esta extensão preenche automaticamente os formulários de login e cadastro, reduzindo o esforço manual e aumentando a eficiência operacional.

## Funcionalidades
- **Login Automático:** Automatiza o processo de entrada no site da Unimed.
- **Preenchimento de Formulário:** Insere automaticamente os dados nos campos requeridos para o cadastro de beneficiários.
- **Extensibilidade:** Estrutura modular que permite a fácil adição de novas seguradoras e adaptação a diferentes formulários e campos.

## Pré-requisitos
Antes de instalar e utilizar a extensão, certifique-se de que o seguinte está configurado:
- Google Chrome (Versão 88 ou superior).

## Instalação
Para instalar a extensão em seu ambiente de desenvolvimento local, siga os passos abaixo:

1. Clone o repositório ou baixe o código fonte da extensão.
2. Abra o Google Chrome e navegue até `chrome://extensions/`.
3. Ative o Modo Desenvolvedor no canto superior direito da tela.
4. Clique em **Carregar sem compactação** e selecione o diretório onde o código da extensão foi salvo.
5. A extensão agora deverá aparecer na sua lista de extensões e estar pronta para uso.

## Uso
Para usar a extensão, siga os passos abaixo:

1. Clique no ícone da extensão no canto superior direito da barra de ferramentas do Chrome.
2. No popup que aparece, clique no botão correspondente à ação desejada (por exemplo, "Login Unimed").
3. A extensão irá automatizar o processo de entrada e cadastro conforme configurado.

## Estrutura de Arquivos
- `manifest.json`: Configurações e permissões da extensão.
- `background.js`: Script de fundo que ouve eventos e manipula erros globais.
- `content_scripts/`: Scripts de conteúdo que são injetados nos sites alvo.
  - `unimed.js`: Script específico para automatizar ações no site da Unimed.
- `popup.html`: HTML para o popup de interação do usuário.
- `popup.js`: Scripts que controlam o comportamento do popup.
- `icon.png`: Ícone usado pela extensão em várias resoluções.

## Contribuições
Contribuições são sempre bem-vindas! Para contribuir:
1. Faça um fork do repositório.
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`).
3. Faça suas alterações.
4. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`).
5. Push para a Branch (`git push origin feature/AmazingFeature`).
6. Abra um Pull Request.
