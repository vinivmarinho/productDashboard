## O que aprendi / pratiquei

- **Componentes React com TS**
- **CRUD de produtos**
- **Modal de Cadastro**
- **Persistência de dados com LocalStorage**
    - Armazenamento e recuperação dos produtos utilizando a API `localStorage`.
- **Componentes controlados**
    - Criei estados para controlar os campos do formulário.
    - O valor de cada input é definido pelo estado (`value`) e atualizado através do evento (`onChange`).
- **Carregamento de dados na montagem do componente (Data Fetching on Mount)**
    - Utilizei `useEffect` para carregar os produtos de `localStorage` quando o componente `table` for montado


## Desafios encontrados

### Tipagem com TypeScript
Durante o desenvolvimento, o `Type Alias` definia que as propriedades `price` e `stock` deveriam ser do tipo `number`.
Entretanto, os elementos `<input>` do formulário sempre retornam valores do tipo `string`. Além disso, manter esses estados como `number` fazia com que o campo exibisse `0` inicialmente e impedisse que ele ficasse vazio durante a digitação.

**Solução adotada:**
- Mantive os estados do formulário como `string`.
- No momento da criação do produto (na chamada da função `createProduct`), converti os valores para `number`
