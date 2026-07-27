# Flows da Aplicação

## Cadastro de produtos
-  O estado `products` é criado no `App.tsx` utilizando `useState` e é responsável por armazenar a lista de produtos da aplicação.
-  Esse estado é passado como prop para o `Table.tsx`, que utiliza os dados recebidos para renderizar a tabela de produtos.
-  A função `setProducts` também é passada para o `Header.tsx`, que a repassa para o `AddProductModal.tsx`.
-  O usuário preenche o formulário no modal e, ao confirmar o cadastro, a função `createProduct()` é chamada, salvando o novo produto no `localStorage`.
-  Após salvar o produto, o modal executa `setProducts(readAllProducts())`, buscando novamente os produtos armazenados e atualizando o estado `products` no `App.tsx`.
- Como o estado foi atualizado, o React realiza um novo render dos componentes que dependem de `products`, fazendo com que a tabela seja exibida com o novo produto cadastrado.

## Filtro de Categoria
- O estado `category` é criado em `App.tsx` e passado à `SearchBar.tsx`
- Quando o usuário seleciona uma categoria no `<select>`, o `SearchBar.tsx` chama `setCategory()`, atualizando o estado em `App.tsx`.
- Como o estado foi alterado, o `App.tsx` é renderizado novamente e passa o novo valor do estado para `Table.tsx`
- `Table.tsx` recebe a categoria atual, filtra o estado `products` (estado que guarda o array dos produtos no localStorage), e se o estado `category` for diferente de `all`, ele remove os produtos que sejam diferentes do atual valor do estado de `category`

