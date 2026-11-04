# Digital Store

Projeto final de Front-end do curso de Desenvolvimento FullStack da Geração Tech , baseado no design **Drip Store** do Figma. É uma loja virtual feita com React, com página inicial, listagem de produtos e página de detalhes do produto.

## Páginas

| Rota | Página |
| --- | --- |
| `/` | Home |
| `/products` | Listagem de produtos |
| `/product/:id` | Visualização do produto |

## Funcionalidades

- **Header** com busca que redireciona para `/products?filter=termo` e navegação com destaque na página atual
- **Footer** com informações, categorias, contato e redes sociais
- **Galeria de imagens** reutilizável, com setas (desabilitadas na primeira e na última imagem) e miniaturas opcionais
- **Home** com carrossel, coleções em destaque e produtos em alta
- **Listagem** com filtros (Marca, Categoria, Gênero e Estado) e botão de ordenação, ambos apenas visuais
- **Página de produto** com galeria, seleção de tamanho e cor, botão de compra e produtos relacionados

## Tecnologias

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- CSS puro
- ESLint

## Como rodar o projeto

Pré-requisito: ter o [Node.js](https://nodejs.org/) instalado.

```bash
# clonar o repositório
git clone https://github.com/nnaiadyyffernandess/DigitalStore-FrontEnd

# entrar na pasta
cd digital-store

# instalar as dependências
npm install

# iniciar o servidor de desenvolvimento
npm run dev
```

Depois, abra `http://localhost:5173` no navegador.

## Estrutura de pastas

```
src/
├── assets/        # logos e ícones (SVG)
├── components/    # BuyBox, CollectionCard, FilterGroup, Footer, FooterInfo,
│                  # Gallery, Header, Logo, ProductCard, ProductListing,
│                  # ProductOptions, Section
├── data/          # lista de produtos (products.js)
├── pages/         # Home, Layout, ProductListingPage, ProductPage
├── App.jsx        # rotas da aplicação
├── index.css      # estilos globais e variáveis de cor
└── main.jsx       # ponto de entrada
```

## Links

- Deploy: _em breve_
- Design no Figma: [Drip Store - Digital College](https://www.figma.com/design/nUk0ihM3x4u8JQtxUoAEJf/DRIP-STORE---DIGITAL-COLLEGE--Copy-?node-id=22-30&p=f)
- Repositório base: [digitalcollegebr/projeto-digital-store](https://github.com/digitalcollegebr/projeto-digital-store)

## Desenvolvido por

Náiady Teixeira Fernandes