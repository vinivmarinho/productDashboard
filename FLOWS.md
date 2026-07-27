# Flows da Aplicação

## Cadastro de produtos
-  O estado `products` é criado no `App.tsx` utilizando `useState` e é responsável por armazenar a lista de produtos da aplicação.
-  Esse estado é passado como prop para o `Table.tsx`, que utiliza os dados recebidos para renderizar a tabela de produtos.
-  A função `setProducts` é passada para o `Header.tsx`, que a repassa para o `AddProductModal.tsx` (responsável pelo form de cadastro de produto).
-  O usuário preenche o formulário no modal e, ao confirmar o cadastro, a função `createProduct()` é chamada, salvando o novo produto no `localStorage`.
-  Após salvar o produto, o modal executa `setProducts(readAllProducts())`, buscando novamente os produtos armazenados e atualizando o estado `products` no `App.tsx`.
- Como o estado foi atualizado, o React realiza um novo render dos componentes que dependem de `products`, fazendo com que a tabela seja exibida com o novo produto cadastrado.

